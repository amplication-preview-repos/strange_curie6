import { Injectable } from "@nestjs/common";
import { OperationInput } from "../addition/OperationInput";

@Injectable()
export class AdditionService {
  constructor() {}
  async PerformAddition(args: OperationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
