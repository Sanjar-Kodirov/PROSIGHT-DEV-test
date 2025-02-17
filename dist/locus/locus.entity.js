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
exports.LocusMembers = exports.Locus = void 0;
const typeorm_1 = require("typeorm");
const locusMember_entity_1 = require("./locusMember.entity");
let Locus = class Locus {
};
exports.Locus = Locus;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Locus.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'assembly_id' }),
    __metadata("design:type", String)
], Locus.prototype, "assemblyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locus_name' }),
    __metadata("design:type", String)
], Locus.prototype, "locusName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'public_locus_name' }),
    __metadata("design:type", String)
], Locus.prototype, "publicLocusName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Locus.prototype, "chromosome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Locus.prototype, "strand", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locus_start' }),
    __metadata("design:type", Number)
], Locus.prototype, "locusStart", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locus_stop' }),
    __metadata("design:type", Number)
], Locus.prototype, "locusStop", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'member_count' }),
    __metadata("design:type", Number)
], Locus.prototype, "memberCount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => locusMember_entity_1.LocusMember, (member) => member.locus),
    __metadata("design:type", Array)
], Locus.prototype, "locusMembers", void 0);
exports.Locus = Locus = __decorate([
    (0, typeorm_1.Entity)('rnc_locus')
], Locus);
let LocusMembers = class LocusMembers {
};
exports.LocusMembers = LocusMembers;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'locus_member_id' }),
    __metadata("design:type", Number)
], LocusMembers.prototype, "locusMemberId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'region_id' }),
    __metadata("design:type", Number)
], LocusMembers.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'locus_id' }),
    __metadata("design:type", Number)
], LocusMembers.prototype, "locusId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'membership_status' }),
    __metadata("design:type", String)
], LocusMembers.prototype, "membershipStatus", void 0);
exports.LocusMembers = LocusMembers = __decorate([
    (0, typeorm_1.Entity)('rnc_locus_members')
], LocusMembers);
//# sourceMappingURL=locus.entity.js.map