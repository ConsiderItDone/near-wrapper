import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeLightClientProof,
  deserializeLightClientProof,
  writeLightClientProof,
  readLightClientProof
} from "./serialization";
import * as Types from "..";

export class LightClientProof {
  outcome_proof: Types.Near_ExecutionOutcomeWithId;
  outcome_root_proof: Array<Types.Near_ExecutionProof>;
  block_header_lite: Types.LightClientBlockLiteView;
  block_proof: Array<Types.Near_ExecutionProof>;

  static toBuffer(type: LightClientProof): ArrayBuffer {
    return serializeLightClientProof(type);
  }

  static fromBuffer(buffer: ArrayBuffer): LightClientProof {
    return deserializeLightClientProof(buffer);
  }

  static write(writer: Write, type: LightClientProof): void {
    writeLightClientProof(writer, type);
  }

  static read(reader: Read): LightClientProof {
    return readLightClientProof(reader);
  }
}
