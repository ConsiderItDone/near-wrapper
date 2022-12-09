import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeBlockHeader,
  deserializeBlockHeader,
  writeBlockHeader,
  readBlockHeader
} from "./serialization";
import * as Types from "..";

export class BlockHeader {
  height: BigInt;
  epoch_id: string;
  next_epoch_id: string;
  hash: string;
  prev_hash: string;
  prev_state_root: string;
  chunk_receipts_root: string;
  chunk_headers_root: string;
  chunk_tx_root: string;
  outcome_root: string;
  chunks_included: BigInt;
  challenges_root: string;
  timestamp: BigInt;
  timestamp_nanosec: string;
  random_value: string;
  validator_proposals: Array<JSON.Value>;
  chunk_mask: Array<bool>;
  gas_price: string;
  rent_paid: string;
  validator_reward: string;
  total_supply: string;
  challenges_result: Array<JSON.Value>;
  last_final_block: string;
  last_ds_final_block: string;
  next_bp_hash: string;
  block_merkle_root: string;
  approvals: Array<string | null>;
  signature: string;
  latest_protocol_version: BigInt;

  static toBuffer(type: BlockHeader): ArrayBuffer {
    return serializeBlockHeader(type);
  }

  static fromBuffer(buffer: ArrayBuffer): BlockHeader {
    return deserializeBlockHeader(buffer);
  }

  static write(writer: Write, type: BlockHeader): void {
    writeBlockHeader(writer, type);
  }

  static read(reader: Read): BlockHeader {
    return readBlockHeader(reader);
  }
}
