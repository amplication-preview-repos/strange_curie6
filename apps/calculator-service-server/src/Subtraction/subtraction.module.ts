import { Module } from "@nestjs/common";
import { SubtractionService } from "./subtraction.service";
import { SubtractionController } from "./subtraction.controller";
import { SubtractionResolver } from "./subtraction.resolver";

@Module({
  controllers: [SubtractionController],
  providers: [SubtractionService, SubtractionResolver],
  exports: [SubtractionService],
})
export class SubtractionModule {}
