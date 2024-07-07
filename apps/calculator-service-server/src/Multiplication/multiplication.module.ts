import { Module } from "@nestjs/common";
import { MultiplicationService } from "./multiplication.service";
import { MultiplicationController } from "./multiplication.controller";
import { MultiplicationResolver } from "./multiplication.resolver";

@Module({
  controllers: [MultiplicationController],
  providers: [MultiplicationService, MultiplicationResolver],
  exports: [MultiplicationService],
})
export class MultiplicationModule {}
