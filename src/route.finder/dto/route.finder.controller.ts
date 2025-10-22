import { Controller, Post, Body } from "@nestjs/common";
import { RouteFinderService } from "src/route.finder/route.finder.service";
import { RouteRequestDto } from "src/route.finder/dto/route-request.dto";
import { RouteResponseDto } from "src/route.finder/dto/route-response.dto";

@Controller("route-finder")
export class RouteFinderController {
  constructor(private readonly routeFinderService: RouteFinderService) {}

  /**
   * Endpoint POST para calcular la mejor ruta entre dos nodos.
    POST /route-finder
   */
  @Post()
  findRoute(@Body() routeRequest: RouteRequestDto): RouteResponseDto {
    const { origin, destination } = routeRequest;
    return this.routeFinderService.findShortestPath(origin, destination);
  }
}
