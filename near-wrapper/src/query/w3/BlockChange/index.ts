import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeBlockChange,
  deserializeBlockChange,
  writeBlockChange,
  readBlockChange
} from "./serialization";
import * as Types from "..";

export class BlockChange {
  changeType: string;
  account_id: string;

  static toBuffer(type: BlockChange): ArrayBuffer {
    return serializeBlockChange(type);
  }

  static fromBuffer(buffer: ArrayBuffer): BlockChange {
    return deserializeBlockChange(buffer);
  }

  static write(writer: Write, type: BlockChange): void {
    writeBlockChange(writer, type);
  }

  static read(reader: Read): BlockChange {
    return readBlockChange(reader);
  }
}
