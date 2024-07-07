import { Injectable } from "@nestjs/common";
import { OperationInput } from "../addition/OperationInput";

@Injectable()
export class SubtractionService {
  constructor() {}
  async PerformSubtraction(args: OperationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
