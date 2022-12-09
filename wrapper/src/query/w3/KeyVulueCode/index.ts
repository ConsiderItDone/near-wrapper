import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeKeyVulueCode,
  deserializeKeyVulueCode,
  writeKeyVulueCode,
  readKeyVulueCode
} from "./serialization";
import * as Types from "..";

export class KeyVulueCode {
  code_base64: string;
  hash: string;
  block_height: BigInt;
  block_hash: string;

  static toBuffer(type: KeyVulueCode): ArrayBuffer {
    return serializeKeyVulueCode(type);
  }

  static fromBuffer(buffer: ArrayBuffer): KeyVulueCode {
    return deserializeKeyVulueCode(buffer);
  }

  static write(writer: Write, type: KeyVulueCode): void {
    writeKeyVulueCode(writer, type);
  }

  static read(reader: Read): KeyVulueCode {
    return readKeyVulueCode(reader);
  }
}
