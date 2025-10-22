"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphService = void 0;
const common_1 = require("@nestjs/common");
/**
 * Servicio que define el grafo y permite obtener su estructura.
 * Aquí podrías más adelante actualizar nodos, pesos, etc.
 */
let GraphService = class GraphService {
    constructor() {
        this.graph = {
            A: { B: 2, C: 4 },
            B: { D: 7, E: 3 },
            C: { F: 5 },
            D: { G: 2 },
            E: { G: 1, F: 3 },
            F: { H: 2 },
            G: { I: 4 },
            H: { I: 1, J: 4 },
            I: { J: 3 },
            J: { K: 2 },
            K: { L: 1 },
        };
    }
    getGraph() {
        return this.graph;
    }
};
GraphService = __decorate([
    (0, common_1.Injectable)()
], GraphService);
exports.GraphService = GraphService;
//# sourceMappingURL=graph.service.js.map