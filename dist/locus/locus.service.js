"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocusService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const locus_entity_1 = require("./locus.entity");
const locus_query_dto_1 = require("./dto/locus-query.dto");
let LocusService = class LocusService {
    constructor(locusRepository, locusMembersRepository) {
        this.locusRepository = locusRepository;
        this.locusMembersRepository = locusMembersRepository;
    }
    async getLocus(query, userRole) {
        const { id, assemblyId, regionId, membershipStatus, sideloading, limit = 1000, page = 1, sort, } = query;
        let qb = this.locusRepository.createQueryBuilder('rl');
        if (id) {
            qb = qb.andWhere('rl.id = :id', { id });
        }
        if (assemblyId) {
            qb = qb.andWhere('rl.assembly_id = :assemblyId', { assemblyId });
        }
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
        if (sort) {
            const [field, direction] = sort.split(':');
            qb = qb.orderBy(`rl.${field}`, direction);
        }
        qb = qb.skip((page - 1) * limit).take(limit);
        const results = await qb.getMany();
        if (sideloading === locus_query_dto_1.SideloadingEnum.LOCUS_MEMBERS && userRole === 'admin') {
            const locusIds = results.map((r) => r.id);
            const members = await this.locusMembersRepository
                .createQueryBuilder('rlm')
                .where('rlm.locus_id IN (:...locusIds)', { locusIds })
                .getMany();
            return results.map((locus) => ({
                ...locus,
                locusMembers: members.filter((m) => m.locusId === locus.id),
            }));
        }
        return results;
    }
};
exports.LocusService = LocusService;
exports.LocusService = LocusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(locus_entity_1.Locus)),
    __param(1, (0, typeorm_1.InjectRepository)(locus_entity_1.LocusMembers)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LocusService);
//# sourceMappingURL=locus.service.js.map