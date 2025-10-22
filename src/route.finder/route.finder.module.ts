import { Module } from "@nestjs/common";
import { RouteFinderController } from "src/route.finder/dto/route.finder.controller";
import { RouteFinderService } from "src/route.finder/route.finder.service";
import { GraphModule } from "src/graph/graph.module";

@Module({
  imports: [GraphModule],
  controllers: [RouteFinderController],
  providers: [RouteFinderService],
})
export class RouteFinderModule {}
