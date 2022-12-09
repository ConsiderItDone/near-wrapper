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
import { AccessKey } from "./";
import * as Types from "..";

export function serializeAccessKey(type: AccessKey): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: AccessKey");
  const sizer = new WriteSizer(sizerContext);
  writeAccessKey(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: AccessKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeAccessKey(encoder, type);
  return buffer;
}

export function writeAccessKey(writer: Write, type: AccessKey): void {
  writer.writeMapLength(2);
  writer.context().push("nonce", "BigInt", "writing property");
  writer.writeString("nonce");
  writer.writeBigInt(type.nonce);
  writer.context().pop();
  writer.context().push("permission", "Types.AccessKeyPermission", "writing property");
  writer.writeString("permission");
  Types.AccessKeyPermission.write(writer, type.permission);
  writer.context().pop();
}

export function deserializeAccessKey(buffer: ArrayBuffer): AccessKey {
  const context: Context = new Context("Deserializing object-type AccessKey");
  const reader = new ReadDecoder(buffer, context);
  return readAccessKey(reader);
}

export function readAccessKey(reader: Read): AccessKey {
  let numFields = reader.readMapLength();

  let _nonce: BigInt = BigInt.fromUInt16(0);
  let _nonceSet: bool = false;
  let _permission: Types.AccessKeyPermission | null = null;
  let _permissionSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "nonce") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _nonce = reader.readBigInt();
      _nonceSet = true;
      reader.context().pop();
    }
    else if (field == "permission") {
      reader.context().push(field, "Types.AccessKeyPermission", "type found, reading property");
      const object = Types.AccessKeyPermission.read(reader);
      _permission = object;
      _permissionSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_nonceSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'nonce: BigInt'"));
  }
  if (!_permission || !_permissionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'permission: AccessKeyPermission'"));
  }

  return {
    nonce: _nonce,
    permission: _permission
  };
}
