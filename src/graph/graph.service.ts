import { Injectable } from "@nestjs/common";

/**
 * Servicio que define el grafo y permite obtener su estructura.
 */
@Injectable()
export class GraphService {
  private graph: Record<string, Record<string, number>> = {
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

  getGraph(): Record<string, Record<string, number>> {
    return this.graph;
  }
}
