import { Injectable } from "@nestjs/common";
import { OperationInput } from "../addition/OperationInput";

@Injectable()
export class MultiplicationService {
  constructor() {}
  async PerformMultiplication(args: OperationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
