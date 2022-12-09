import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeAccessKeyWithPublicKey,
  deserializeAccessKeyWithPublicKey,
  writeAccessKeyWithPublicKey,
  readAccessKeyWithPublicKey
} from "./serialization";
import * as Types from "..";

export class AccessKeyWithPublicKey {
  account_id: string;
  public_key: string;

  static toBuffer(type: AccessKeyWithPublicKey): ArrayBuffer {
    return serializeAccessKeyWithPublicKey(type);
  }

  static fromBuffer(buffer: ArrayBuffer): AccessKeyWithPublicKey {
    return deserializeAccessKeyWithPublicKey(buffer);
  }

  static write(writer: Write, type: AccessKeyWithPublicKey): void {
    writeAccessKeyWithPublicKey(writer, type);
  }

  static read(reader: Read): AccessKeyWithPublicKey {
    return readAccessKeyWithPublicKey(reader);
  }
}
