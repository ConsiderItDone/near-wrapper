import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeBlockChangeResult,
  deserializeBlockChangeResult,
  writeBlockChangeResult,
  readBlockChangeResult
} from "./serialization";
import * as Types from "..";

export class BlockChangeResult {
  block_hash: string;
  changes: Array<Types.BlockChange>;

  static toBuffer(type: BlockChangeResult): ArrayBuffer {
    return serializeBlockChangeResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): BlockChangeResult {
    return deserializeBlockChangeResult(buffer);
  }

  static write(writer: Write, type: BlockChangeResult): void {
    writeBlockChangeResult(writer, type);
  }

  static read(reader: Read): BlockChangeResult {
    return readBlockChangeResult(reader);
  }
}
