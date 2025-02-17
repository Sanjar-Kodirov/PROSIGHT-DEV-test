import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { LocusMember } from './locusMember.entity';

@Entity('rnc_locus')
export class Locus {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'assembly_id' })
  assemblyId: string;

  @Column({ name: 'locus_name' })
  locusName: string;

  @Column({ name: 'public_locus_name' })
  publicLocusName: string;

  @Column()
  chromosome: string;

  @Column()
  strand: string;

  @Column({ name: 'locus_start' })
  locusStart: number;

  @Column({ name: 'locus_stop' })
  locusStop: number;

  @Column({ name: 'member_count' })
  memberCount: number;

  @OneToMany(() => LocusMember, (member) => member.locus)
  locusMembers: LocusMember[];
}

@Entity('rnc_locus_members')
export class LocusMembers {
  @PrimaryColumn({ name: 'locus_member_id' })
  locusMemberId: number;

  @Column({ name: 'region_id' })
  regionId: number;

  @Column({ name: 'locus_id' })
  locusId: number;

  @Column({ name: 'membership_status' })
  membershipStatus: string;
}
