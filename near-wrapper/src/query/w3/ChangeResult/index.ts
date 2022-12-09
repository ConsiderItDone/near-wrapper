import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeChangeResult,
  deserializeChangeResult,
  writeChangeResult,
  readChangeResult
} from "./serialization";
import * as Types from "..";

export class ChangeResult {
  block_hash: string;
  changes: Array<JSON.Value>;

  static toBuffer(type: ChangeResult): ArrayBuffer {
    return serializeChangeResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): ChangeResult {
    return deserializeChangeResult(buffer);
  }

  static write(writer: Write, type: ChangeResult): void {
    writeChangeResult(writer, type);
  }

  static read(reader: Read): ChangeResult {
    return readChangeResult(reader);
  }
}
