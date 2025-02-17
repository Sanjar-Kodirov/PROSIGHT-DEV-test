import { LocusMember } from './locusMember.entity';
export declare class Locus {
    id: number;
    assemblyId: string;
    locusName: string;
    publicLocusName: string;
    chromosome: string;
    strand: string;
    locusStart: number;
    locusStop: number;
    memberCount: number;
    locusMembers: LocusMember[];
}
export declare class LocusMembers {
    locusMemberId: number;
    regionId: number;
    locusId: number;
    membershipStatus: string;
}
