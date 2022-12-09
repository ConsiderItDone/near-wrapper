import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeAccountBalance,
  deserializeAccountBalance,
  writeAccountBalance,
  readAccountBalance
} from "./serialization";
import * as Types from "..";

export class AccountBalance {
  total: string;
  stateStaked: string;
  staked: string;
  available: string;

  static toBuffer(type: AccountBalance): ArrayBuffer {
    return serializeAccountBalance(type);
  }

  static fromBuffer(buffer: ArrayBuffer): AccountBalance {
    return deserializeAccountBalance(buffer);
  }

  static write(writer: Write, type: AccountBalance): void {
    writeAccountBalance(writer, type);
  }

  static read(reader: Read): AccountBalance {
    return readAccountBalance(reader);
  }
}
