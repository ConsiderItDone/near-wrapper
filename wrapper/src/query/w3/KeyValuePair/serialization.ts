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
import { KeyValuePair } from "./";
import * as Types from "..";

export function serializeKeyValuePair(type: KeyValuePair): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: KeyValuePair");
  const sizer = new WriteSizer(sizerContext);
  writeKeyValuePair(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: KeyValuePair");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeKeyValuePair(encoder, type);
  return buffer;
}

export function writeKeyValuePair(writer: Write, type: KeyValuePair): void {
  writer.writeMapLength(2);
  writer.context().push("key", "string", "writing property");
  writer.writeString("key");
  writer.writeString(type.key);
  writer.context().pop();
  writer.context().push("value", "string", "writing property");
  writer.writeString("value");
  writer.writeString(type.value);
  writer.context().pop();
}

export function deserializeKeyValuePair(buffer: ArrayBuffer): KeyValuePair {
  const context: Context = new Context("Deserializing object-type KeyValuePair");
  const reader = new ReadDecoder(buffer, context);
  return readKeyValuePair(reader);
}

export function readKeyValuePair(reader: Read): KeyValuePair {
  let numFields = reader.readMapLength();

  let _key: string = "";
  let _keySet: bool = false;
  let _value: string = "";
  let _valueSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "key") {
      reader.context().push(field, "string", "type found, reading property");
      _key = reader.readString();
      _keySet = true;
      reader.context().pop();
    }
    else if (field == "value") {
      reader.context().push(field, "string", "type found, reading property");
      _value = reader.readString();
      _valueSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_keySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'key: String'"));
  }
  if (!_valueSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'value: String'"));
  }

  return {
    key: _key,
    value: _value
  };
}
