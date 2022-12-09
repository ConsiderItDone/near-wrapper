import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeBlockReference,
  deserializeBlockReference,
  writeBlockReference,
  readBlockReference
} from "./serialization";
import * as Types from "..";

export class BlockReference {
  block_id: string | null;
  finality: string | null;
  syncCheckpoint: string | null;

  static toBuffer(type: BlockReference): ArrayBuffer {
    return serializeBlockReference(type);
  }

  static fromBuffer(buffer: ArrayBuffer): BlockReference {
    return deserializeBlockReference(buffer);
  }

  static write(writer: Write, type: BlockReference): void {
    writeBlockReference(writer, type);
  }

  static read(reader: Read): BlockReference {
    return readBlockReference(reader);
  }
}
