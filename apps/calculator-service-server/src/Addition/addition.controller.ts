import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdditionService } from "./addition.service";
import { OperationInput } from "../addition/OperationInput";

@swagger.ApiTags("additions")
@common.Controller("additions")
export class AdditionController {
  constructor(protected readonly service: AdditionService) {}

  @common.Post("/add")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformAddition(
    @common.Body()
    body: OperationInput
  ): Promise<string> {
        return this.service.PerformAddition(body);
      }
}
