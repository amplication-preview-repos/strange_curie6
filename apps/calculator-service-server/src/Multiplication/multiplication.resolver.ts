import * as graphql from "@nestjs/graphql";
import { OperationInput } from "../addition/OperationInput";
import { MultiplicationService } from "./multiplication.service";

export class MultiplicationResolver {
  constructor(protected readonly service: MultiplicationService) {}

  @graphql.Mutation(() => String)
  async PerformMultiplication(
    @graphql.Args()
    args: OperationInput
  ): Promise<string> {
    return this.service.PerformMultiplication(args);
  }
}
