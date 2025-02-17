export declare class LocusMemberDto {
    locusMemberId: number;
    regionId: number;
    locusId: number;
    membershipStatus: string;
}
export declare class LocusResponseDto {
    id: number;
    assemblyId: string;
    locusName: string;
    publicLocusName: string;
    chromosome: string;
    strand: string;
    locusStart: number;
    locusStop: number;
    memberCount: number;
    ursTaxid?: string;
    locusMembers?: LocusMemberDto[];
}
