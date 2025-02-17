"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocusModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const locus_controller_1 = require("./locus.controller");
const locus_service_1 = require("./locus.service");
const locus_entity_1 = require("./locus.entity");
let LocusModule = class LocusModule {
};
exports.LocusModule = LocusModule;
exports.LocusModule = LocusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([locus_entity_1.Locus, locus_entity_1.LocusMembers])],
        controllers: [locus_controller_1.LocusController],
        providers: [locus_service_1.LocusService],
        exports: [locus_service_1.LocusService]
    })
], LocusModule);
//# sourceMappingURL=locus.module.js.map