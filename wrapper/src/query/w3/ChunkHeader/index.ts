import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeChunkHeader,
  deserializeChunkHeader,
  writeChunkHeader,
  readChunkHeader
} from "./serialization";
import * as Types from "..";

export class ChunkHeader {
  balance_burnt: string;
  chunk_hash: string;
  encoded_length: BigInt;
  encoded_merkle_root: string;
  gas_limit: BigInt;
  gas_used: string;
  height_created: BigInt;
  height_included: BigInt;
  outgoing_receipts_root: string;
  prev_block_hash: string;
  prev_state_root: string;
  rent_paid: string;
  shard_id: BigInt;
  signature: string;
  tx_root: string;
  validator_proposals: Array<JSON.Value>;
  validator_reward: string;

  static toBuffer(type: ChunkHeader): ArrayBuffer {
    return serializeChunkHeader(type);
  }

  static fromBuffer(buffer: ArrayBuffer): ChunkHeader {
    return deserializeChunkHeader(buffer);
  }

  static write(writer: Write, type: ChunkHeader): void {
    writeChunkHeader(writer, type);
  }

  static read(reader: Read): ChunkHeader {
    return readChunkHeader(reader);
  }
}
