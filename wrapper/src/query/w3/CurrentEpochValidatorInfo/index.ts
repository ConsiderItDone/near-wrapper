import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeCurrentEpochValidatorInfo,
  deserializeCurrentEpochValidatorInfo,
  writeCurrentEpochValidatorInfo,
  readCurrentEpochValidatorInfo
} from "./serialization";
import * as Types from "..";

export class CurrentEpochValidatorInfo {
  account_id: string;
  public_key: string;
  is_slashed: bool;
  stake: string;
  shards: Array<BigInt>;
  num_produced_blocks: u32;
  num_expected_blocks: u32;

  static toBuffer(type: CurrentEpochValidatorInfo): ArrayBuffer {
    return serializeCurrentEpochValidatorInfo(type);
  }

  static fromBuffer(buffer: ArrayBuffer): CurrentEpochValidatorInfo {
    return deserializeCurrentEpochValidatorInfo(buffer);
  }

  static write(writer: Write, type: CurrentEpochValidatorInfo): void {
    writeCurrentEpochValidatorInfo(writer, type);
  }

  static read(reader: Read): CurrentEpochValidatorInfo {
    return readCurrentEpochValidatorInfo(reader);
  }
}
