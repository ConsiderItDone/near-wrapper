import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeChunk,
  deserializeChunk,
  writeChunk,
  readChunk
} from "./serialization";
import * as Types from "..";

export class Chunk {
  chunk_hash: string;
  prev_block_hash: string;
  outcome_root: string;
  prev_state_root: string;
  encoded_merkle_root: string;
  encoded_length: BigInt;
  height_created: BigInt;
  height_included: BigInt;
  shard_id: BigInt;
  gas_used: BigInt;
  gas_limit: BigInt;
  rent_paid: string;
  validator_reward: string;
  balance_burnt: string;
  outgoing_receipts_root: string;
  tx_root: string;
  validator_proposals: Array<JSON.Value>;
  signature: string;

  static toBuffer(type: Chunk): ArrayBuffer {
    return serializeChunk(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Chunk {
    return deserializeChunk(buffer);
  }

  static write(writer: Write, type: Chunk): void {
    writeChunk(writer, type);
  }

  static read(reader: Read): Chunk {
    return readChunk(reader);
  }
}
