import { Module } from "@nestjs/common";
import { GraphModule } from "./graph/graph.module";
import { RouteFinderModule } from "./route.finder/route.finder.module";

@Module({
  imports: [GraphModule, RouteFinderModule],
})
export class AppModule {}
