import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeValidatorStakeView,
  deserializeValidatorStakeView,
  writeValidatorStakeView,
  readValidatorStakeView
} from "./serialization";
import * as Types from "..";

export class ValidatorStakeView {
  account_id: string;
  public_key: string;
  stake: string;

  static toBuffer(type: ValidatorStakeView): ArrayBuffer {
    return serializeValidatorStakeView(type);
  }

  static fromBuffer(buffer: ArrayBuffer): ValidatorStakeView {
    return deserializeValidatorStakeView(buffer);
  }

  static write(writer: Write, type: ValidatorStakeView): void {
    writeValidatorStakeView(writer, type);
  }

  static read(reader: Read): ValidatorStakeView {
    return readValidatorStakeView(reader);
  }
}
