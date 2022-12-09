import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeKeyValuePair,
  deserializeKeyValuePair,
  writeKeyValuePair,
  readKeyValuePair
} from "./serialization";
import * as Types from "..";

export class KeyValuePair {
  key: string;
  value: string;

  static toBuffer(type: KeyValuePair): ArrayBuffer {
    return serializeKeyValuePair(type);
  }

  static fromBuffer(buffer: ArrayBuffer): KeyValuePair {
    return deserializeKeyValuePair(buffer);
  }

  static write(writer: Write, type: KeyValuePair): void {
    writeKeyValuePair(writer, type);
  }

  static read(reader: Read): KeyValuePair {
    return readKeyValuePair(reader);
  }
}
