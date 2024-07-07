import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DivisionService } from "./division.service";
import { OperationInput } from "../addition/OperationInput";

@swagger.ApiTags("divisions")
@common.Controller("divisions")
export class DivisionController {
  constructor(protected readonly service: DivisionService) {}

  @common.Post("/divide")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PerformDivision(
    @common.Body()
    body: OperationInput
  ): Promise<string> {
        return this.service.PerformDivision(body);
      }
}
