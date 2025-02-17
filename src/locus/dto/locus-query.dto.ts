import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export enum SideloadingEnum {
  LOCUS_MEMBERS = 'locusMembers',
}

export class LocusQueryDto {
  @ApiProperty({ required: false, description: 'ID from rl table' })
  @IsOptional()
  @IsInt()
  id?: number;

  @ApiProperty({ required: false, description: 'Assembly ID from rl table' })
  @IsOptional()
  @IsInt()
  assemblyId?: number;

  @ApiProperty({ required: false, description: 'Region ID from rld table' })
  @IsOptional()
  @IsEnum(['86118093', '86696489', '88186467'])
  regionId?: string;

  @ApiProperty({ required: false, description: 'Membership status from rld table' })
  @IsOptional()
  @IsString()
  membershipStatus?: string;

  @ApiProperty({ 
    required: false, 
    enum: SideloadingEnum,
    description: 'Include additional related data' 
  })
  @IsOptional()
  @IsEnum(SideloadingEnum)
  sideloading?: SideloadingEnum;

  @ApiProperty({ required: false, default: 1000, description: 'Number of rows per page' })
  @IsOptional()
  @IsInt()
  limit?: number = 1000;

  @ApiProperty({ required: false, default: 1, description: 'Page number' })
  @IsOptional()
  @IsInt()
  page?: number = 1;

  @ApiProperty({ required: false, description: 'Sort field and direction (e.g. id:DESC)' })
  @IsOptional()
  @IsString()
  sort?: string;
} 