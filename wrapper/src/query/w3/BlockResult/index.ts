import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeBlockResult,
  deserializeBlockResult,
  writeBlockResult,
  readBlockResult
} from "./serialization";
import * as Types from "..";

export class BlockResult {
  author: string;
  header: Types.BlockHeader;
  chunks: Array<Types.Chunk>;

  static toBuffer(type: BlockResult): ArrayBuffer {
    return serializeBlockResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): BlockResult {
    return deserializeBlockResult(buffer);
  }

  static write(writer: Write, type: BlockResult): void {
    writeBlockResult(writer, type);
  }

  static read(reader: Read): BlockResult {
    return readBlockResult(reader);
  }
}
