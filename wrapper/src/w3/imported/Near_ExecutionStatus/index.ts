import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_ExecutionStatus,
  deserializeNear_ExecutionStatus,
  writeNear_ExecutionStatus,
  readNear_ExecutionStatus
} from "./serialization";
import * as Types from "../..";

export class Near_ExecutionStatus {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  SuccessValue: string | null;
  SuccessReceiptId: string | null;
  failure: JSON.Value | null;

  static toBuffer(type: Near_ExecutionStatus): ArrayBuffer {
    return serializeNear_ExecutionStatus(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_ExecutionStatus {
    return deserializeNear_ExecutionStatus(buffer);
  }

  static write(writer: Write, type: Near_ExecutionStatus): void {
    writeNear_ExecutionStatus(writer, type);
  }

  static read(reader: Read): Near_ExecutionStatus {
    return readNear_ExecutionStatus(reader);
  }
}
