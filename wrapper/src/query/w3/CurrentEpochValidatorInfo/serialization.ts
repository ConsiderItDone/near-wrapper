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
import { CurrentEpochValidatorInfo } from "./";
import * as Types from "..";

export function serializeCurrentEpochValidatorInfo(type: CurrentEpochValidatorInfo): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: CurrentEpochValidatorInfo");
  const sizer = new WriteSizer(sizerContext);
  writeCurrentEpochValidatorInfo(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: CurrentEpochValidatorInfo");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeCurrentEpochValidatorInfo(encoder, type);
  return buffer;
}

export function writeCurrentEpochValidatorInfo(writer: Write, type: CurrentEpochValidatorInfo): void {
  writer.writeMapLength(7);
  writer.context().push("account_id", "string", "writing property");
  writer.writeString("account_id");
  writer.writeString(type.account_id);
  writer.context().pop();
  writer.context().push("public_key", "string", "writing property");
  writer.writeString("public_key");
  writer.writeString(type.public_key);
  writer.context().pop();
  writer.context().push("is_slashed", "bool", "writing property");
  writer.writeString("is_slashed");
  writer.writeBool(type.is_slashed);
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
  writer.context().push("num_produced_blocks", "u32", "writing property");
  writer.writeString("num_produced_blocks");
  writer.writeUInt32(type.num_produced_blocks);
  writer.context().pop();
  writer.context().push("num_expected_blocks", "u32", "writing property");
  writer.writeString("num_expected_blocks");
  writer.writeUInt32(type.num_expected_blocks);
  writer.context().pop();
}

export function deserializeCurrentEpochValidatorInfo(buffer: ArrayBuffer): CurrentEpochValidatorInfo {
  const context: Context = new Context("Deserializing object-type CurrentEpochValidatorInfo");
  const reader = new ReadDecoder(buffer, context);
  return readCurrentEpochValidatorInfo(reader);
}

export function readCurrentEpochValidatorInfo(reader: Read): CurrentEpochValidatorInfo {
  let numFields = reader.readMapLength();

  let _account_id: string = "";
  let _account_idSet: bool = false;
  let _public_key: string = "";
  let _public_keySet: bool = false;
  let _is_slashed: bool = false;
  let _is_slashedSet: bool = false;
  let _stake: string = "";
  let _stakeSet: bool = false;
  let _shards: Array<BigInt> = [];
  let _shardsSet: bool = false;
  let _num_produced_blocks: u32 = 0;
  let _num_produced_blocksSet: bool = false;
  let _num_expected_blocks: u32 = 0;
  let _num_expected_blocksSet: bool = false;

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
    else if (field == "is_slashed") {
      reader.context().push(field, "bool", "type found, reading property");
      _is_slashed = reader.readBool();
      _is_slashedSet = true;
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
    else if (field == "num_produced_blocks") {
      reader.context().push(field, "u32", "type found, reading property");
      _num_produced_blocks = reader.readUInt32();
      _num_produced_blocksSet = true;
      reader.context().pop();
    }
    else if (field == "num_expected_blocks") {
      reader.context().push(field, "u32", "type found, reading property");
      _num_expected_blocks = reader.readUInt32();
      _num_expected_blocksSet = true;
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
  if (!_is_slashedSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'is_slashed: Boolean'"));
  }
  if (!_stakeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'stake: String'"));
  }
  if (!_shardsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'shards: [BigInt]'"));
  }
  if (!_num_produced_blocksSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'num_produced_blocks: UInt'"));
  }
  if (!_num_expected_blocksSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'num_expected_blocks: UInt'"));
  }

  return {
    account_id: _account_id,
    public_key: _public_key,
    is_slashed: _is_slashed,
    stake: _stake,
    shards: _shards,
    num_produced_blocks: _num_produced_blocks,
    num_expected_blocks: _num_expected_blocks
  };
}
