import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeAccessKeyInfo,
  deserializeAccessKeyInfo,
  writeAccessKeyInfo,
  readAccessKeyInfo
} from "./serialization";
import * as Types from "..";

export class AccessKeyInfo {
  publicKey: string;
  accessKey: Types.AccessKey;

  static toBuffer(type: AccessKeyInfo): ArrayBuffer {
    return serializeAccessKeyInfo(type);
  }

  static fromBuffer(buffer: ArrayBuffer): AccessKeyInfo {
    return deserializeAccessKeyInfo(buffer);
  }

  static write(writer: Write, type: AccessKeyInfo): void {
    writeAccessKeyInfo(writer, type);
  }

  static read(reader: Read): AccessKeyInfo {
    return readAccessKeyInfo(reader);
  }
}
