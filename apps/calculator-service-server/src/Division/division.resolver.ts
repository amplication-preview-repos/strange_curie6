import * as graphql from "@nestjs/graphql";
import { OperationInput } from "../addition/OperationInput";
import { DivisionService } from "./division.service";

export class DivisionResolver {
  constructor(protected readonly service: DivisionService) {}

  @graphql.Mutation(() => String)
  async PerformDivision(
    @graphql.Args()
    args: OperationInput
  ): Promise<string> {
    return this.service.PerformDivision(args);
  }
}
