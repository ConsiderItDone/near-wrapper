import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeBlockHeaderInnerLiteView,
  deserializeBlockHeaderInnerLiteView,
  writeBlockHeaderInnerLiteView,
  readBlockHeaderInnerLiteView
} from "./serialization";
import * as Types from "..";

export class BlockHeaderInnerLiteView {
  height: BigInt;
  epoch_id: string;
  next_epoch_id: string;
  prev_state_root: string;
  outcome_root: string;
  timestamp: BigInt;
  next_bp_hash: string;
  block_merkle_root: string;

  static toBuffer(type: BlockHeaderInnerLiteView): ArrayBuffer {
    return serializeBlockHeaderInnerLiteView(type);
  }

  static fromBuffer(buffer: ArrayBuffer): BlockHeaderInnerLiteView {
    return deserializeBlockHeaderInnerLiteView(buffer);
  }

  static write(writer: Write, type: BlockHeaderInnerLiteView): void {
    writeBlockHeaderInnerLiteView(writer, type);
  }

  static read(reader: Read): BlockHeaderInnerLiteView {
    return readBlockHeaderInnerLiteView(reader);
  }
}
