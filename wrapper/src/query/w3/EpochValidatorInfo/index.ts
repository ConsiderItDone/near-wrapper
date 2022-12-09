import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeEpochValidatorInfo,
  deserializeEpochValidatorInfo,
  writeEpochValidatorInfo,
  readEpochValidatorInfo
} from "./serialization";
import * as Types from "..";

export class EpochValidatorInfo {
  next_validators: Array<Types.NextEpochValidatorInfo>;
  current_validators: Array<Types.CurrentEpochValidatorInfo>;
  next_fisherman: Array<Types.ValidatorStakeView>;
  current_fisherman: Array<Types.ValidatorStakeView>;
  current_proposals: Array<Types.ValidatorStakeView>;
  prev_epoch_kickout: Array<Types.ValidatorStakeView>;
  epoch_start_height: BigInt;
  epoch_height: BigInt;

  static toBuffer(type: EpochValidatorInfo): ArrayBuffer {
    return serializeEpochValidatorInfo(type);
  }

  static fromBuffer(buffer: ArrayBuffer): EpochValidatorInfo {
    return deserializeEpochValidatorInfo(buffer);
  }

  static write(writer: Write, type: EpochValidatorInfo): void {
    writeEpochValidatorInfo(writer, type);
  }

  static read(reader: Read): EpochValidatorInfo {
    return readEpochValidatorInfo(reader);
  }
}
