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
import { Near_AccessKey } from "./";
import * as Types from "../..";

export function serializeNear_AccessKey(type: Near_AccessKey): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_AccessKey");
  const sizer = new WriteSizer(sizerContext);
  writeNear_AccessKey(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_AccessKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_AccessKey(encoder, type);
  return buffer;
}

export function writeNear_AccessKey(writer: Write, type: Near_AccessKey): void {
  writer.writeMapLength(2);
  writer.context().push("nonce", "BigInt", "writing property");
  writer.writeString("nonce");
  writer.writeBigInt(type.nonce);
  writer.context().pop();
  writer.context().push("permission", "Types.Near_AccessKeyPermission", "writing property");
  writer.writeString("permission");
  Types.Near_AccessKeyPermission.write(writer, type.permission);
  writer.context().pop();
}

export function deserializeNear_AccessKey(buffer: ArrayBuffer): Near_AccessKey {
  const context: Context = new Context("Deserializing imported object-type Near_AccessKey");
  const reader = new ReadDecoder(buffer, context);
  return readNear_AccessKey(reader);
}

export function readNear_AccessKey(reader: Read): Near_AccessKey {
  let numFields = reader.readMapLength();

  let _nonce: BigInt = BigInt.fromUInt16(0);
  let _nonceSet: bool = false;
  let _permission: Types.Near_AccessKeyPermission | null = null;
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
      reader.context().push(field, "Types.Near_AccessKeyPermission", "type found, reading property");
      const object = Types.Near_AccessKeyPermission.read(reader);
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
    throw new Error(reader.context().printWithContext("Missing required property: 'permission: Near_AccessKeyPermission'"));
  }

  return {
    nonce: _nonce,
    permission: _permission
  };
}
