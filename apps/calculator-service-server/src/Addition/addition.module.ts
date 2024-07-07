import { Module } from "@nestjs/common";
import { AdditionService } from "./addition.service";
import { AdditionController } from "./addition.controller";
import { AdditionResolver } from "./addition.resolver";

@Module({
  controllers: [AdditionController],
  providers: [AdditionService, AdditionResolver],
  exports: [AdditionService],
})
export class AdditionModule {}
