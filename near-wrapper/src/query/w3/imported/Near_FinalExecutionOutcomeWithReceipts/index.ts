import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_FinalExecutionOutcomeWithReceipts,
  deserializeNear_FinalExecutionOutcomeWithReceipts,
  writeNear_FinalExecutionOutcomeWithReceipts,
  readNear_FinalExecutionOutcomeWithReceipts
} from "./serialization";
import * as Types from "../..";

export class Near_FinalExecutionOutcomeWithReceipts {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  status: Types.Near_ExecutionStatus;
  transaction: Types.Near_Transaction;
  transaction_outcome: Types.Near_ExecutionOutcomeWithId;
  receipts_outcome: Array<Types.Near_ExecutionOutcomeWithId>;
  receipts: Array<Types.Near_ReceiptWithId>;

  static toBuffer(type: Near_FinalExecutionOutcomeWithReceipts): ArrayBuffer {
    return serializeNear_FinalExecutionOutcomeWithReceipts(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_FinalExecutionOutcomeWithReceipts {
    return deserializeNear_FinalExecutionOutcomeWithReceipts(buffer);
  }

  static write(writer: Write, type: Near_FinalExecutionOutcomeWithReceipts): void {
    writeNear_FinalExecutionOutcomeWithReceipts(writer, type);
  }

  static read(reader: Read): Near_FinalExecutionOutcomeWithReceipts {
    return readNear_FinalExecutionOutcomeWithReceipts(reader);
  }
}
