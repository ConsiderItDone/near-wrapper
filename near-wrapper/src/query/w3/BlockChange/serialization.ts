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
import { BlockChange } from "./";
import * as Types from "..";

export function serializeBlockChange(type: BlockChange): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: BlockChange");
  const sizer = new WriteSizer(sizerContext);
  writeBlockChange(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: BlockChange");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeBlockChange(encoder, type);
  return buffer;
}

export function writeBlockChange(writer: Write, type: BlockChange): void {
  writer.writeMapLength(2);
  writer.context().push("changeType", "string", "writing property");
  writer.writeString("changeType");
  writer.writeString(type.changeType);
  writer.context().pop();
  writer.context().push("account_id", "string", "writing property");
  writer.writeString("account_id");
  writer.writeString(type.account_id);
  writer.context().pop();
}

export function deserializeBlockChange(buffer: ArrayBuffer): BlockChange {
  const context: Context = new Context("Deserializing object-type BlockChange");
  const reader = new ReadDecoder(buffer, context);
  return readBlockChange(reader);
}

export function readBlockChange(reader: Read): BlockChange {
  let numFields = reader.readMapLength();

  let _changeType: string = "";
  let _changeTypeSet: bool = false;
  let _account_id: string = "";
  let _account_idSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "changeType") {
      reader.context().push(field, "string", "type found, reading property");
      _changeType = reader.readString();
      _changeTypeSet = true;
      reader.context().pop();
    }
    else if (field == "account_id") {
      reader.context().push(field, "string", "type found, reading property");
      _account_id = reader.readString();
      _account_idSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_changeTypeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'changeType: String'"));
  }
  if (!_account_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'account_id: String'"));
  }

  return {
    changeType: _changeType,
    account_id: _account_id
  };
}
