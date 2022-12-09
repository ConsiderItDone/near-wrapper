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
import { NearProtocolRuntimeConfig } from "./";
import * as Types from "..";

export function serializeNearProtocolRuntimeConfig(type: NearProtocolRuntimeConfig): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: NearProtocolRuntimeConfig");
  const sizer = new WriteSizer(sizerContext);
  writeNearProtocolRuntimeConfig(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: NearProtocolRuntimeConfig");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNearProtocolRuntimeConfig(encoder, type);
  return buffer;
}

export function writeNearProtocolRuntimeConfig(writer: Write, type: NearProtocolRuntimeConfig): void {
  writer.writeMapLength(1);
  writer.context().push("storage_amount_per_byte", "string", "writing property");
  writer.writeString("storage_amount_per_byte");
  writer.writeString(type.storage_amount_per_byte);
  writer.context().pop();
}

export function deserializeNearProtocolRuntimeConfig(buffer: ArrayBuffer): NearProtocolRuntimeConfig {
  const context: Context = new Context("Deserializing object-type NearProtocolRuntimeConfig");
  const reader = new ReadDecoder(buffer, context);
  return readNearProtocolRuntimeConfig(reader);
}

export function readNearProtocolRuntimeConfig(reader: Read): NearProtocolRuntimeConfig {
  let numFields = reader.readMapLength();

  let _storage_amount_per_byte: string = "";
  let _storage_amount_per_byteSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "storage_amount_per_byte") {
      reader.context().push(field, "string", "type found, reading property");
      _storage_amount_per_byte = reader.readString();
      _storage_amount_per_byteSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_storage_amount_per_byteSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'storage_amount_per_byte: String'"));
  }

  return {
    storage_amount_per_byte: _storage_amount_per_byte
  };
}
