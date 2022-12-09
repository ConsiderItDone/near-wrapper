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
import { KeyVulueCode } from "./";
import * as Types from "..";

export function serializeKeyVulueCode(type: KeyVulueCode): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: KeyVulueCode");
  const sizer = new WriteSizer(sizerContext);
  writeKeyVulueCode(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: KeyVulueCode");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeKeyVulueCode(encoder, type);
  return buffer;
}

export function writeKeyVulueCode(writer: Write, type: KeyVulueCode): void {
  writer.writeMapLength(4);
  writer.context().push("code_base64", "string", "writing property");
  writer.writeString("code_base64");
  writer.writeString(type.code_base64);
  writer.context().pop();
  writer.context().push("hash", "string", "writing property");
  writer.writeString("hash");
  writer.writeString(type.hash);
  writer.context().pop();
  writer.context().push("block_height", "BigInt", "writing property");
  writer.writeString("block_height");
  writer.writeBigInt(type.block_height);
  writer.context().pop();
  writer.context().push("block_hash", "string", "writing property");
  writer.writeString("block_hash");
  writer.writeString(type.block_hash);
  writer.context().pop();
}

export function deserializeKeyVulueCode(buffer: ArrayBuffer): KeyVulueCode {
  const context: Context = new Context("Deserializing object-type KeyVulueCode");
  const reader = new ReadDecoder(buffer, context);
  return readKeyVulueCode(reader);
}

export function readKeyVulueCode(reader: Read): KeyVulueCode {
  let numFields = reader.readMapLength();

  let _code_base64: string = "";
  let _code_base64Set: bool = false;
  let _hash: string = "";
  let _hashSet: bool = false;
  let _block_height: BigInt = BigInt.fromUInt16(0);
  let _block_heightSet: bool = false;
  let _block_hash: string = "";
  let _block_hashSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "code_base64") {
      reader.context().push(field, "string", "type found, reading property");
      _code_base64 = reader.readString();
      _code_base64Set = true;
      reader.context().pop();
    }
    else if (field == "hash") {
      reader.context().push(field, "string", "type found, reading property");
      _hash = reader.readString();
      _hashSet = true;
      reader.context().pop();
    }
    else if (field == "block_height") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _block_height = reader.readBigInt();
      _block_heightSet = true;
      reader.context().pop();
    }
    else if (field == "block_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _block_hash = reader.readString();
      _block_hashSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_code_base64Set) {
    throw new Error(reader.context().printWithContext("Missing required property: 'code_base64: String'"));
  }
  if (!_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'hash: String'"));
  }
  if (!_block_heightSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'block_height: BigInt'"));
  }
  if (!_block_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'block_hash: String'"));
  }

  return {
    code_base64: _code_base64,
    hash: _hash,
    block_height: _block_height,
    block_hash: _block_hash
  };
}
