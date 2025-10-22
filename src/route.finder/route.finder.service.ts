import { Injectable } from "@nestjs/common";
import { GraphService } from "src/graph/graph.service";
import { RouteResponseDto } from "./dto/route-response.dto";

@Injectable()
export class RouteFinderService {
  constructor(private readonly graphService: GraphService) {}

  /**
   * Implementa el algoritmo de Dijkstra para encontrar la ruta más corta
   * entre dos nodos del grafo.
   */
  findShortestPath(origin: string, destination: string): RouteResponseDto {
    const graph = this.graphService.getGraph();
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};
    const unvisited = new Set(Object.keys(graph));

    // Inicializar distancias
    for (const node of unvisited) {
      distances[node] = node === origin ? 0 : Infinity;
      previous[node] = null;
    }

    while (unvisited.size > 0) {
      // Obtener el nodo no visitado con menor distancia
      const current = [...unvisited].reduce((a, b) =>
        distances[a] < distances[b] ? a : b
      );

      if (current === destination) break;

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
    const path: string[] = [];
    let curr: string | null = destination;

    while (curr) {
      path.unshift(curr);
      curr = previous[curr];
    }

    return {
      path,
      totalDistance: distances[destination],
    };
  }
}
