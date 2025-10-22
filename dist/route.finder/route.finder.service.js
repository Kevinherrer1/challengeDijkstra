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
exports.RouteFinderService = void 0;
const common_1 = require("@nestjs/common");
const graph_service_1 = require("../graph/graph.service");
let RouteFinderService = class RouteFinderService {
    constructor(graphService) {
        this.graphService = graphService;
    }
    /**
     * Implementa el algoritmo de Dijkstra para encontrar la ruta más corta
     * entre dos nodos del grafo.
     */
    findShortestPath(origin, destination) {
        const graph = this.graphService.getGraph();
        const distances = {};
        const previous = {};
        const unvisited = new Set(Object.keys(graph));
        // Inicializar distancias
        for (const node of unvisited) {
            distances[node] = node === origin ? 0 : Infinity;
            previous[node] = null;
        }
        while (unvisited.size > 0) {
            // Obtener el nodo no visitado con menor distancia
            const current = [...unvisited].reduce((a, b) => distances[a] < distances[b] ? a : b);
            if (current === destination)
                break;
            unvisited.delete(current);
            for (const [neighbor, weight] of Object.entries(graph[current])) {
                const alt = distances[current] + weight;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = current;
                }
            }
        }
        // Construir el camino final
        const path = [];
        let curr = destination;
        while (curr) {
            path.unshift(curr);
            curr = previous[curr];
        }
        return {
            path,
            totalDistance: distances[destination],
        };
    }
};
RouteFinderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [graph_service_1.GraphService])
], RouteFinderService);
exports.RouteFinderService = RouteFinderService;
//# sourceMappingURL=route.finder.service.js.map