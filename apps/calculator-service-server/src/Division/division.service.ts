import { Injectable } from "@nestjs/common";
import { OperationInput } from "../addition/OperationInput";

@Injectable()
export class DivisionService {
  constructor() {}
  async PerformDivision(args: OperationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
