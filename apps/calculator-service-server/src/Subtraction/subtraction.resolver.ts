import * as graphql from "@nestjs/graphql";
import { OperationInput } from "../addition/OperationInput";
import { SubtractionService } from "./subtraction.service";

export class SubtractionResolver {
  constructor(protected readonly service: SubtractionService) {}

  @graphql.Mutation(() => String)
  async PerformSubtraction(
    @graphql.Args()
    args: OperationInput
  ): Promise<string> {
    return this.service.PerformSubtraction(args);
  }
}
