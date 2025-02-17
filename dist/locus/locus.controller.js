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
exports.LocusController = void 0;
const common_1 = require("@nestjs/common");
const locus_service_1 = require("./locus.service");
const swagger_1 = require("@nestjs/swagger");
const locus_query_dto_1 = require("./dto/locus-query.dto");
const locus_response_dto_1 = require("./dto/locus-response.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let LocusController = class LocusController {
    constructor(locusService) {
        this.locusService = locusService;
    }
    async getLocus(req, query) {
        return this.locusService.getLocus(query, req.user.role);
    }
};
exports.LocusController = LocusController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get locus data with optional filtering and sideloading' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns locus data based on query parameters',
        type: [locus_response_dto_1.LocusResponseDto]
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, locus_query_dto_1.LocusQueryDto]),
    __metadata("design:returntype", Promise)
], LocusController.prototype, "getLocus", null);
exports.LocusController = LocusController = __decorate([
    (0, swagger_1.ApiTags)('Locus'),
    (0, common_1.Controller)('locus'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [locus_service_1.LocusService])
], LocusController);
//# sourceMappingURL=locus.controller.js.map