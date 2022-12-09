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
import { NextEpochValidatorInfo } from "./";
import * as Types from "..";

export function serializeNextEpochValidatorInfo(type: NextEpochValidatorInfo): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: NextEpochValidatorInfo");
  const sizer = new WriteSizer(sizerContext);
  writeNextEpochValidatorInfo(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: NextEpochValidatorInfo");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNextEpochValidatorInfo(encoder, type);
  return buffer;
}

export function writeNextEpochValidatorInfo(writer: Write, type: NextEpochValidatorInfo): void {
  writer.writeMapLength(4);
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
  writer.context().push("shards", "Array<BigInt>", "writing property");
  writer.writeString("shards");
  writer.writeArray(type.shards, (writer: Write, item: BigInt): void => {
    writer.writeBigInt(item);
  });
  writer.context().pop();
}

export function deserializeNextEpochValidatorInfo(buffer: ArrayBuffer): NextEpochValidatorInfo {
  const context: Context = new Context("Deserializing object-type NextEpochValidatorInfo");
  const reader = new ReadDecoder(buffer, context);
  return readNextEpochValidatorInfo(reader);
}

export function readNextEpochValidatorInfo(reader: Read): NextEpochValidatorInfo {
  let numFields = reader.readMapLength();

  let _account_id: string = "";
  let _account_idSet: bool = false;
  let _public_key: string = "";
  let _public_keySet: bool = false;
  let _stake: string = "";
  let _stakeSet: bool = false;
  let _shards: Array<BigInt> = [];
  let _shardsSet: bool = false;

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
    else if (field == "shards") {
      reader.context().push(field, "Array<BigInt>", "type found, reading property");
      _shards = reader.readArray((reader: Read): BigInt => {
        return reader.readBigInt();
      });
      _shardsSet = true;
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
  if (!_shardsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'shards: [BigInt]'"));
  }

  return {
    account_id: _account_id,
    public_key: _public_key,
    stake: _stake,
    shards: _shards
  };
}
