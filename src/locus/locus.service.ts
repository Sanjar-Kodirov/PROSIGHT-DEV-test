import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locus, LocusMembers } from './locus.entity';
import { LocusQueryDto, SideloadingEnum } from './dto/locus-query.dto';

@Injectable()
export class LocusService {
  constructor(
    @InjectRepository(Locus)
    private locusRepository: Repository<Locus>,
    @InjectRepository(LocusMembers)
    private locusMembersRepository: Repository<LocusMembers>,
  ) {}

  async getLocus(query: LocusQueryDto, userRole: string) {
    const {
      id,
      assemblyId,
      regionId,
      membershipStatus,
      sideloading,
      limit = 1000,
      page = 1,
      sort,
    } = query;

    // Build query
    let qb = this.locusRepository.createQueryBuilder('rl');

    // Apply filters
    if (id) {
      qb = qb.andWhere('rl.id = :id', { id });
    }

    if (assemblyId) {
      qb = qb.andWhere('rl.assembly_id = :assemblyId', { assemblyId });
    }

    // Handle role-based restrictions
    if (userRole === 'limited') {
      const allowedRegionIds = ['86118093', '86696489', '88186467'];
      qb = qb
        .innerJoin('rnc_locus_members', 'rlm', 'rlm.locus_id = rl.id')
        .andWhere('rlm.region_id IN (:...allowedRegionIds)', {
          allowedRegionIds,
        });
    }

    if (regionId) {
      qb = qb
        .innerJoin('rnc_locus_members', 'rlm', 'rlm.locus_id = rl.id')
        .andWhere('rlm.region_id = :regionId', { regionId });
    }

    if (membershipStatus) {
      qb = qb
        .innerJoin('rnc_locus_members', 'rlm', 'rlm.locus_id = rl.id')
        .andWhere('rlm.membership_status = :membershipStatus', {
          membershipStatus,
        });
    }

    // Apply sorting
    if (sort) {
      const [field, direction] = sort.split(':');
      qb = qb.orderBy(`rl.${field}`, direction as 'ASC' | 'DESC');
    }

    // Apply pagination
    qb = qb.skip((page - 1) * limit).take(limit);

    // Get results
    const results = await qb.getMany();

    // Handle sideloading
    if (sideloading === SideloadingEnum.LOCUS_MEMBERS && userRole === 'admin') {
      const locusIds = results.map((r) => r.id);
      const members = await this.locusMembersRepository
        .createQueryBuilder('rlm')
        .where('rlm.locus_id IN (:...locusIds)', { locusIds })
        .getMany();

      // Attach members to results
      return results.map((locus) => ({
        ...locus,
        locusMembers: members.filter((m) => m.locusId === locus.id),
      }));
    }

    return results;
  }

  // Add your service methods here
}
