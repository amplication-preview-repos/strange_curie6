import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MultiplicationService } from "./multiplication.service";
import { OperationInput } from "../addition/OperationInput";

@swagger.ApiTags("multiplications")
@common.Controller("multiplications")
export class MultiplicationController {
  constructor(protected readonly service: MultiplicationService) {}

  @common.Post("/multiply")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformMultiplication(
    @common.Body()
    body: OperationInput
  ): Promise<string> {
        return this.service.PerformMultiplication(body);
      }
}
