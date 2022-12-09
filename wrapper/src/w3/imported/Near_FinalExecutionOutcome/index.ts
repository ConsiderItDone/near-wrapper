import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_FinalExecutionOutcome,
  deserializeNear_FinalExecutionOutcome,
  writeNear_FinalExecutionOutcome,
  readNear_FinalExecutionOutcome
} from "./serialization";
import * as Types from "../..";

export class Near_FinalExecutionOutcome {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  status: Types.Near_ExecutionStatus;
  transaction: Types.Near_Transaction;
  transaction_outcome: Types.Near_ExecutionOutcomeWithId;
  receipts_outcome: Array<Types.Near_ExecutionOutcomeWithId>;

  static toBuffer(type: Near_FinalExecutionOutcome): ArrayBuffer {
    return serializeNear_FinalExecutionOutcome(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_FinalExecutionOutcome {
    return deserializeNear_FinalExecutionOutcome(buffer);
  }

  static write(writer: Write, type: Near_FinalExecutionOutcome): void {
    writeNear_FinalExecutionOutcome(writer, type);
  }

  static read(reader: Read): Near_FinalExecutionOutcome {
    return readNear_FinalExecutionOutcome(reader);
  }
}
