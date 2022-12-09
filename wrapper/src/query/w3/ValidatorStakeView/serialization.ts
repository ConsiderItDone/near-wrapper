import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable,
  BigInt,
  JSON,
  Context
} from "@web3api/wasm-as";
import { ValidatorStakeView } from "./";
import * as Types from "..";

export function serializeValidatorStakeView(type: ValidatorStakeView): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: ValidatorStakeView");
  const sizer = new WriteSizer(sizerContext);
  writeValidatorStakeView(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: ValidatorStakeView");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeValidatorStakeView(encoder, type);
  return buffer;
}

export function writeValidatorStakeView(writer: Write, type: ValidatorStakeView): void {
  writer.writeMapLength(3);
  writer.context().push("account_id", "string", "writing property");
  writer.writeString("account_id");
  writer.writeString(type.account_id);
  writer.context().pop();
  writer.context().push("public_key", "string", "writing property");
  writer.writeString("public_key");
  writer.writeString(type.public_key);
  writer.context().pop();
  writer.context().push("stake", "string", "writing property");
  writer.writeString("stake");
  writer.writeString(type.stake);
  writer.context().pop();
}

export function deserializeValidatorStakeView(buffer: ArrayBuffer): ValidatorStakeView {
  const context: Context = new Context("Deserializing object-type ValidatorStakeView");
  const reader = new ReadDecoder(buffer, context);
  return readValidatorStakeView(reader);
}

export function readValidatorStakeView(reader: Read): ValidatorStakeView {
  let numFields = reader.readMapLength();

  let _account_id: string = "";
  let _account_idSet: bool = false;
  let _public_key: string = "";
  let _public_keySet: bool = false;
  let _stake: string = "";
  let _stakeSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "account_id") {
      reader.context().push(field, "string", "type found, reading property");
      _account_id = reader.readString();
      _account_idSet = true;
      reader.context().pop();
    }
    else if (field == "public_key") {
      reader.context().push(field, "string", "type found, reading property");
      _public_key = reader.readString();
      _public_keySet = true;
      reader.context().pop();
    }
    else if (field == "stake") {
      reader.context().push(field, "string", "type found, reading property");
      _stake = reader.readString();
      _stakeSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_account_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'account_id: String'"));
  }
  if (!_public_keySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'public_key: String'"));
  }
  if (!_stakeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'stake: String'"));
  }

  return {
    account_id: _account_id,
    public_key: _public_key,
    stake: _stake
  };
}
