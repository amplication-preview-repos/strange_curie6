import { Module } from "@nestjs/common";
import { DivisionService } from "./division.service";
import { DivisionController } from "./division.controller";
import { DivisionResolver } from "./division.resolver";

@Module({
  controllers: [DivisionController],
  providers: [DivisionService, DivisionResolver],
  exports: [DivisionService],
})
export class DivisionModule {}
