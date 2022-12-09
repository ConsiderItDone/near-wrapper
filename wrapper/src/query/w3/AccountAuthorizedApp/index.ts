import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeAccountAuthorizedApp,
  deserializeAccountAuthorizedApp,
  writeAccountAuthorizedApp,
  readAccountAuthorizedApp
} from "./serialization";
import * as Types from "..";

export class AccountAuthorizedApp {
  contractId: string;
  amount: string;
  publicKey: string;

  static toBuffer(type: AccountAuthorizedApp): ArrayBuffer {
    return serializeAccountAuthorizedApp(type);
  }

  static fromBuffer(buffer: ArrayBuffer): AccountAuthorizedApp {
    return deserializeAccountAuthorizedApp(buffer);
  }

  static write(writer: Write, type: AccountAuthorizedApp): void {
    writeAccountAuthorizedApp(writer, type);
  }

  static read(reader: Read): AccountAuthorizedApp {
    return readAccountAuthorizedApp(reader);
  }
}
