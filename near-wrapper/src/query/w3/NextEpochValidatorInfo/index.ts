import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNextEpochValidatorInfo,
  deserializeNextEpochValidatorInfo,
  writeNextEpochValidatorInfo,
  readNextEpochValidatorInfo
} from "./serialization";
import * as Types from "..";

export class NextEpochValidatorInfo {
  account_id: string;
  public_key: string;
  stake: string;
  shards: Array<BigInt>;

  static toBuffer(type: NextEpochValidatorInfo): ArrayBuffer {
    return serializeNextEpochValidatorInfo(type);
  }

  static fromBuffer(buffer: ArrayBuffer): NextEpochValidatorInfo {
    return deserializeNextEpochValidatorInfo(buffer);
  }

  static write(writer: Write, type: NextEpochValidatorInfo): void {
    writeNextEpochValidatorInfo(writer, type);
  }

  static read(reader: Read): NextEpochValidatorInfo {
    return readNextEpochValidatorInfo(reader);
  }
}
