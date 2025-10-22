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
exports.RouteFinderController = void 0;
const common_1 = require("@nestjs/common");
const route_finder_service_1 = require("../route.finder.service");
const route_request_dto_1 = require("./route-request.dto");
const route_response_dto_1 = require("./route-response.dto");
let RouteFinderController = class RouteFinderController {
    constructor(routeFinderService) {
        this.routeFinderService = routeFinderService;
    }
    /**
     * Endpoint POST para calcular la mejor ruta entre dos nodos.
      POST /route-finder
     */
    findRoute(routeRequest) {
        const { origin, destination } = routeRequest;
        return this.routeFinderService.findShortestPath(origin, destination);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [route_request_dto_1.RouteRequestDto]),
    __metadata("design:returntype", route_response_dto_1.RouteResponseDto)
], RouteFinderController.prototype, "findRoute", null);
RouteFinderController = __decorate([
    (0, common_1.Controller)("route-finder"),
    __metadata("design:paramtypes", [route_finder_service_1.RouteFinderService])
], RouteFinderController);
exports.RouteFinderController = RouteFinderController;
//# sourceMappingURL=route.finder.controller.js.map