import { Module } from "@nestjs/common";
import { GraphService } from "./graph.service";

@Module({
  providers: [GraphService],
  exports: [GraphService], //permite que otros módulos usen GraphService
})
export class GraphModule {}
