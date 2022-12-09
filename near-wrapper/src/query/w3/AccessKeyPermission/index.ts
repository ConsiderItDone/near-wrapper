import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeAccessKeyPermission,
  deserializeAccessKeyPermission,
  writeAccessKeyPermission,
  readAccessKeyPermission
} from "./serialization";
import * as Types from "..";

export class AccessKeyPermission {
  isFullAccess: bool;
  receiverId: string | null;
  methodNames: Array<string> | null;
  allowance: BigInt | null;

  static toBuffer(type: AccessKeyPermission): ArrayBuffer {
    return serializeAccessKeyPermission(type);
  }

  static fromBuffer(buffer: ArrayBuffer): AccessKeyPermission {
    return deserializeAccessKeyPermission(buffer);
  }

  static write(writer: Write, type: AccessKeyPermission): void {
    writeAccessKeyPermission(writer, type);
  }

  static read(reader: Read): AccessKeyPermission {
    return readAccessKeyPermission(reader);
  }
}
