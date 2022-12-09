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
import { AccessKeyInfo } from "./";
import * as Types from "..";

export function serializeAccessKeyInfo(type: AccessKeyInfo): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: AccessKeyInfo");
  const sizer = new WriteSizer(sizerContext);
  writeAccessKeyInfo(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: AccessKeyInfo");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeAccessKeyInfo(encoder, type);
  return buffer;
}

export function writeAccessKeyInfo(writer: Write, type: AccessKeyInfo): void {
  writer.writeMapLength(2);
  writer.context().push("publicKey", "string", "writing property");
  writer.writeString("publicKey");
  writer.writeString(type.publicKey);
  writer.context().pop();
  writer.context().push("accessKey", "Types.AccessKey", "writing property");
  writer.writeString("accessKey");
  Types.AccessKey.write(writer, type.accessKey);
  writer.context().pop();
}

export function deserializeAccessKeyInfo(buffer: ArrayBuffer): AccessKeyInfo {
  const context: Context = new Context("Deserializing object-type AccessKeyInfo");
  const reader = new ReadDecoder(buffer, context);
  return readAccessKeyInfo(reader);
}

export function readAccessKeyInfo(reader: Read): AccessKeyInfo {
  let numFields = reader.readMapLength();

  let _publicKey: string = "";
  let _publicKeySet: bool = false;
  let _accessKey: Types.AccessKey | null = null;
  let _accessKeySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "publicKey") {
      reader.context().push(field, "string", "type found, reading property");
      _publicKey = reader.readString();
      _publicKeySet = true;
      reader.context().pop();
    }
    else if (field == "accessKey") {
      reader.context().push(field, "Types.AccessKey", "type found, reading property");
      const object = Types.AccessKey.read(reader);
      _accessKey = object;
      _accessKeySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_publicKeySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'publicKey: String'"));
  }
  if (!_accessKey || !_accessKeySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'accessKey: AccessKey'"));
  }

  return {
    publicKey: _publicKey,
    accessKey: _accessKey
  };
}
