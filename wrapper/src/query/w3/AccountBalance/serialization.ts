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
import { AccountBalance } from "./";
import * as Types from "..";

export function serializeAccountBalance(type: AccountBalance): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: AccountBalance");
  const sizer = new WriteSizer(sizerContext);
  writeAccountBalance(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: AccountBalance");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeAccountBalance(encoder, type);
  return buffer;
}

export function writeAccountBalance(writer: Write, type: AccountBalance): void {
  writer.writeMapLength(4);
  writer.context().push("total", "string", "writing property");
  writer.writeString("total");
  writer.writeString(type.total);
  writer.context().pop();
  writer.context().push("stateStaked", "string", "writing property");
  writer.writeString("stateStaked");
  writer.writeString(type.stateStaked);
  writer.context().pop();
  writer.context().push("staked", "string", "writing property");
  writer.writeString("staked");
  writer.writeString(type.staked);
  writer.context().pop();
  writer.context().push("available", "string", "writing property");
  writer.writeString("available");
  writer.writeString(type.available);
  writer.context().pop();
}

export function deserializeAccountBalance(buffer: ArrayBuffer): AccountBalance {
  const context: Context = new Context("Deserializing object-type AccountBalance");
  const reader = new ReadDecoder(buffer, context);
  return readAccountBalance(reader);
}

export function readAccountBalance(reader: Read): AccountBalance {
  let numFields = reader.readMapLength();

  let _total: string = "";
  let _totalSet: bool = false;
  let _stateStaked: string = "";
  let _stateStakedSet: bool = false;
  let _staked: string = "";
  let _stakedSet: bool = false;
  let _available: string = "";
  let _availableSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "total") {
      reader.context().push(field, "string", "type found, reading property");
      _total = reader.readString();
      _totalSet = true;
      reader.context().pop();
    }
    else if (field == "stateStaked") {
      reader.context().push(field, "string", "type found, reading property");
      _stateStaked = reader.readString();
      _stateStakedSet = true;
      reader.context().pop();
    }
    else if (field == "staked") {
      reader.context().push(field, "string", "type found, reading property");
      _staked = reader.readString();
      _stakedSet = true;
      reader.context().pop();
    }
    else if (field == "available") {
      reader.context().push(field, "string", "type found, reading property");
      _available = reader.readString();
      _availableSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_totalSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'total: String'"));
  }
  if (!_stateStakedSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'stateStaked: String'"));
  }
  if (!_stakedSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'staked: String'"));
  }
  if (!_availableSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'available: String'"));
  }

  return {
    total: _total,
    stateStaked: _stateStaked,
    staked: _staked,
    available: _available
  };
}
