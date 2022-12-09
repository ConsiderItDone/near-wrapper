import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeChunkResult,
  deserializeChunkResult,
  writeChunkResult,
  readChunkResult
} from "./serialization";
import * as Types from "..";

export class ChunkResult {
  header: Types.ChunkHeader;
  receipts: Array<JSON.Value>;
  transactions: Array<Types.Near_Transaction>;

  static toBuffer(type: ChunkResult): ArrayBuffer {
    return serializeChunkResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): ChunkResult {
    return deserializeChunkResult(buffer);
  }

  static write(writer: Write, type: ChunkResult): void {
    writeChunkResult(writer, type);
  }

  static read(reader: Read): ChunkResult {
    return readChunkResult(reader);
  }
}
