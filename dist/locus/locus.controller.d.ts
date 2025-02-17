import { LocusService } from './locus.service';
import { LocusQueryDto } from './dto/locus-query.dto';
import { LocusResponseDto } from './dto/locus-response.dto';
export declare class LocusController {
    private readonly locusService;
    constructor(locusService: LocusService);
    getLocus(req: any, query: LocusQueryDto): Promise<LocusResponseDto[]>;
}
