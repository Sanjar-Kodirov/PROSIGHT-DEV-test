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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocusQueryDto = exports.SideloadingEnum = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var SideloadingEnum;
(function (SideloadingEnum) {
    SideloadingEnum["LOCUS_MEMBERS"] = "locusMembers";
})(SideloadingEnum || (exports.SideloadingEnum = SideloadingEnum = {}));
class LocusQueryDto {
    constructor() {
        this.limit = 1000;
        this.page = 1;
    }
}
exports.LocusQueryDto = LocusQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'ID from rl table' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], LocusQueryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Assembly ID from rl table' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], LocusQueryDto.prototype, "assemblyId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Region ID from rld table' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['86118093', '86696489', '88186467']),
    __metadata("design:type", String)
], LocusQueryDto.prototype, "regionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Membership status from rld table' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocusQueryDto.prototype, "membershipStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        enum: SideloadingEnum,
        description: 'Include additional related data'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(SideloadingEnum),
    __metadata("design:type", String)
], LocusQueryDto.prototype, "sideloading", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 1000, description: 'Number of rows per page' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], LocusQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, default: 1, description: 'Page number' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], LocusQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Sort field and direction (e.g. id:DESC)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LocusQueryDto.prototype, "sort", void 0);
//# sourceMappingURL=locus-query.dto.js.map