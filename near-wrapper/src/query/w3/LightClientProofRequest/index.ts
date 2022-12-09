import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeLightClientProofRequest,
  deserializeLightClientProofRequest,
  writeLightClientProofRequest,
  readLightClientProofRequest
} from "./serialization";
import * as Types from "..";

export class LightClientProofRequest {
  m_type: Types.IdType;
  light_client_head: string;
  transaction_hash: string | null;
  sender_id: string | null;
  receipt_id: string | null;
  receiver_id: string | null;

  static toBuffer(type: LightClientProofRequest): ArrayBuffer {
    return serializeLightClientProofRequest(type);
  }

  static fromBuffer(buffer: ArrayBuffer): LightClientProofRequest {
    return deserializeLightClientProofRequest(buffer);
  }

  static write(writer: Write, type: LightClientProofRequest): void {
    writeLightClientProofRequest(writer, type);
  }

  static read(reader: Read): LightClientProofRequest {
    return readLightClientProofRequest(reader);
  }
}
