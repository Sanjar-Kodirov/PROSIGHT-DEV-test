export declare enum SideloadingEnum {
    LOCUS_MEMBERS = "locusMembers"
}
export declare class LocusQueryDto {
    id?: number;
    assemblyId?: number;
    regionId?: string;
    membershipStatus?: string;
    sideloading?: SideloadingEnum;
    limit?: number;
    page?: number;
    sort?: string;
}
