import * as graphql from "@nestjs/graphql";
import { OperationInput } from "../addition/OperationInput";
import { AdditionService } from "./addition.service";

export class AdditionResolver {
  constructor(protected readonly service: AdditionService) {}

  @graphql.Mutation(() => String)
  async PerformAddition(
    @graphql.Args()
    args: OperationInput
  ): Promise<string> {
    return this.service.PerformAddition(args);
  }
}
