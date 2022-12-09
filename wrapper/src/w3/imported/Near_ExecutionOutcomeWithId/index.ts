import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_ExecutionOutcomeWithId,
  deserializeNear_ExecutionOutcomeWithId,
  writeNear_ExecutionOutcomeWithId,
  readNear_ExecutionOutcomeWithId
} from "./serialization";
import * as Types from "../..";

export class Near_ExecutionOutcomeWithId {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  block_hash: string | null;
  id: string;
  outcome: Types.Near_ExecutionOutcome;
  proof: Array<Types.Near_ExecutionProof> | null;

  static toBuffer(type: Near_ExecutionOutcomeWithId): ArrayBuffer {
    return serializeNear_ExecutionOutcomeWithId(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_ExecutionOutcomeWithId {
    return deserializeNear_ExecutionOutcomeWithId(buffer);
  }

  static write(writer: Write, type: Near_ExecutionOutcomeWithId): void {
    writeNear_ExecutionOutcomeWithId(writer, type);
  }

  static read(reader: Read): Near_ExecutionOutcomeWithId {
    return readNear_ExecutionOutcomeWithId(reader);
  }
}
