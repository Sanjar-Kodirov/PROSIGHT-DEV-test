import { ApiProperty } from '@nestjs/swagger';

export class LocusMemberDto {
  @ApiProperty()
  locusMemberId: number;

  @ApiProperty()
  regionId: number;

  @ApiProperty()
  locusId: number;

  @ApiProperty()
  membershipStatus: string;
}

export class LocusResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  assemblyId: string;

  @ApiProperty()
  locusName: string;

  @ApiProperty()
  publicLocusName: string;

  @ApiProperty()
  chromosome: string;

  @ApiProperty()
  strand: string;

  @ApiProperty()
  locusStart: number;

  @ApiProperty()
  locusStop: number;

  @ApiProperty()
  memberCount: number;

  @ApiProperty()
  ursTaxid?: string;

  @ApiProperty({ type: [LocusMemberDto], required: false })
  locusMembers?: LocusMemberDto[];
} 