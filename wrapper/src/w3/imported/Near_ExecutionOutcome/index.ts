import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_ExecutionOutcome,
  deserializeNear_ExecutionOutcome,
  writeNear_ExecutionOutcome,
  readNear_ExecutionOutcome
} from "./serialization";
import * as Types from "../..";

export class Near_ExecutionOutcome {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  executor_id: string | null;
  gas_burnt: BigInt;
  logs: Array<string> | null;
  metadata: Types.Near_OutcomeMetaData | null;
  receipt_ids: Array<string>;
  status: Types.Near_ExecutionStatus;
  tokens_burnt: string | null;

  static toBuffer(type: Near_ExecutionOutcome): ArrayBuffer {
    return serializeNear_ExecutionOutcome(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_ExecutionOutcome {
    return deserializeNear_ExecutionOutcome(buffer);
  }

  static write(writer: Write, type: Near_ExecutionOutcome): void {
    writeNear_ExecutionOutcome(writer, type);
  }

  static read(reader: Read): Near_ExecutionOutcome {
    return readNear_ExecutionOutcome(reader);
  }
}
