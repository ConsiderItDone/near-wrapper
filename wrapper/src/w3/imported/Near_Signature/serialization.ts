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
import { Near_Signature } from "./";
import * as Types from "../..";

export function serializeNear_Signature(type: Near_Signature): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_Signature");
  const sizer = new WriteSizer(sizerContext);
  writeNear_Signature(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_Signature");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_Signature(encoder, type);
  return buffer;
}

export function writeNear_Signature(writer: Write, type: Near_Signature): void {
  writer.writeMapLength(2);
  writer.context().push("keyType", "Types.Near_KeyType", "writing property");
  writer.writeString("keyType");
  writer.writeInt32(type.keyType);
  writer.context().pop();
  writer.context().push("data", "ArrayBuffer", "writing property");
  writer.writeString("data");
  writer.writeBytes(type.data);
  writer.context().pop();
}

export function deserializeNear_Signature(buffer: ArrayBuffer): Near_Signature {
  const context: Context = new Context("Deserializing imported object-type Near_Signature");
  const reader = new ReadDecoder(buffer, context);
  return readNear_Signature(reader);
}

export function readNear_Signature(reader: Read): Near_Signature {
  let numFields = reader.readMapLength();

  let _keyType: Types.Near_KeyType = 0;
  let _keyTypeSet: bool = false;
  let _data: ArrayBuffer = new ArrayBuffer(0);
  let _dataSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "keyType") {
      reader.context().push(field, "Types.Near_KeyType", "type found, reading property");
      let value: Types.Near_KeyType;
      if (reader.isNextString()) {
        value = Types.getNear_KeyTypeValue(reader.readString());
      } else {
        value = reader.readInt32();
        Types.sanitizeNear_KeyTypeValue(value);
      }
      _keyType = value;
      _keyTypeSet = true;
      reader.context().pop();
    }
    else if (field == "data") {
      reader.context().push(field, "ArrayBuffer", "type found, reading property");
      _data = reader.readBytes();
      _dataSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_keyTypeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'keyType: Near_KeyType'"));
  }
  if (!_dataSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'data: Bytes'"));
  }

  return {
    keyType: _keyType,
    data: _data
  };
}