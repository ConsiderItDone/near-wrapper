import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_ExecutionProof,
  deserializeNear_ExecutionProof,
  writeNear_ExecutionProof,
  readNear_ExecutionProof
} from "./serialization";
import * as Types from "../..";

export class Near_ExecutionProof {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  direction: string;
  hash: string;

  static toBuffer(type: Near_ExecutionProof): ArrayBuffer {
    return serializeNear_ExecutionProof(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_ExecutionProof {
    return deserializeNear_ExecutionProof(buffer);
  }

  static write(writer: Write, type: Near_ExecutionProof): void {
    writeNear_ExecutionProof(writer, type);
  }

  static read(reader: Read): Near_ExecutionProof {
    return readNear_ExecutionProof(reader);
  }
}
