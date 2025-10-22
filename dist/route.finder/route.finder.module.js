"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteFinderModule = void 0;
const common_1 = require("@nestjs/common");
const route_finder_controller_1 = require("./dto/route.finder.controller");
const route_finder_service_1 = require("./route.finder.service");
const graph_module_1 = require("../graph/graph.module");
let RouteFinderModule = class RouteFinderModule {
};
RouteFinderModule = __decorate([
    (0, common_1.Module)({
        imports: [graph_module_1.GraphModule],
        controllers: [route_finder_controller_1.RouteFinderController],
        providers: [route_finder_service_1.RouteFinderService],
    })
], RouteFinderModule);
exports.RouteFinderModule = RouteFinderModule;
//# sourceMappingURL=route.finder.module.js.map