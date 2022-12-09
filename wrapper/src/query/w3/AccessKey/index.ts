import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeAccessKey,
  deserializeAccessKey,
  writeAccessKey,
  readAccessKey
} from "./serialization";
import * as Types from "..";

export class AccessKey {
  nonce: BigInt;
  permission: Types.AccessKeyPermission;

  static toBuffer(type: AccessKey): ArrayBuffer {
    return serializeAccessKey(type);
  }

  static fromBuffer(buffer: ArrayBuffer): AccessKey {
    return deserializeAccessKey(buffer);
  }

  static write(writer: Write, type: AccessKey): void {
    writeAccessKey(writer, type);
  }

  static read(reader: Read): AccessKey {
    return readAccessKey(reader);
  }
}
