import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SubtractionService } from "./subtraction.service";
import { OperationInput } from "../addition/OperationInput";

@swagger.ApiTags("subtractions")
@common.Controller("subtractions")
export class SubtractionController {
  constructor(protected readonly service: SubtractionService) {}

  @common.Post("/subtract")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformSubtraction(
    @common.Body()
    body: OperationInput
  ): Promise<string> {
        return this.service.PerformSubtraction(body);
      }
}
