import { Controller, Get, Query, UseGuards, Request } from '@nestjs/common';
import { LocusService } from './locus.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LocusQueryDto } from './dto/locus-query.dto';
import { LocusResponseDto } from './dto/locus-response.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Locus')
@Controller('locus')
@ApiBearerAuth()
export class LocusController {
  constructor(private readonly locusService: LocusService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Get locus data with optional filtering and sideloading' })
  @ApiResponse({ 
    status: 200, 
    description: 'Returns locus data based on query parameters',
    type: [LocusResponseDto]
  })
  async getLocus(
    @Request() req, 
    @Query() query: LocusQueryDto
  ): Promise<LocusResponseDto[]> {
    return this.locusService.getLocus(query, req.user.role);
  }
}
