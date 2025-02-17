import { Repository } from 'typeorm';
import { Locus, LocusMembers } from './locus.entity';
import { LocusQueryDto } from './dto/locus-query.dto';
export declare class LocusService {
    private locusRepository;
    private locusMembersRepository;
    constructor(locusRepository: Repository<Locus>, locusMembersRepository: Repository<LocusMembers>);
    getLocus(query: LocusQueryDto, userRole: string): Promise<{
        locusMembers: LocusMembers[];
        id: number;
        assemblyId: string;
        locusName: string;
        publicLocusName: string;
        chromosome: string;
        strand: string;
        locusStart: number;
        locusStop: number;
        memberCount: number;
    }[]>;
}
