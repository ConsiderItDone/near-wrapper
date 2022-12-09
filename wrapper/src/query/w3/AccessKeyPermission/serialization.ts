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
import { AccessKeyPermission } from "./";
import * as Types from "..";

export function serializeAccessKeyPermission(type: AccessKeyPermission): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: AccessKeyPermission");
  const sizer = new WriteSizer(sizerContext);
  writeAccessKeyPermission(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: AccessKeyPermission");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeAccessKeyPermission(encoder, type);
  return buffer;
}

export function writeAccessKeyPermission(writer: Write, type: AccessKeyPermission): void {
  writer.writeMapLength(4);
  writer.context().push("isFullAccess", "bool", "writing property");
  writer.writeString("isFullAccess");
  writer.writeBool(type.isFullAccess);
  writer.context().pop();
  writer.context().push("receiverId", "string | null", "writing property");
  writer.writeString("receiverId");
  writer.writeNullableString(type.receiverId);
  writer.context().pop();
  writer.context().push("methodNames", "Array<string> | null", "writing property");
  writer.writeString("methodNames");
  writer.writeNullableArray(type.methodNames, (writer: Write, item: string): void => {
    writer.writeString(item);
  });
  writer.context().pop();
  writer.context().push("allowance", "BigInt | null", "writing property");
  writer.writeString("allowance");
  writer.writeNullableBigInt(type.allowance);
  writer.context().pop();
}

export function deserializeAccessKeyPermission(buffer: ArrayBuffer): AccessKeyPermission {
  const context: Context = new Context("Deserializing object-type AccessKeyPermission");
  const reader = new ReadDecoder(buffer, context);
  return readAccessKeyPermission(reader);
}

export function readAccessKeyPermission(reader: Read): AccessKeyPermission {
  let numFields = reader.readMapLength();

  let _isFullAccess: bool = false;
  let _isFullAccessSet: bool = false;
  let _receiverId: string | null = null;
  let _methodNames: Array<string> | null = null;
  let _allowance: BigInt | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "isFullAccess") {
      reader.context().push(field, "bool", "type found, reading property");
      _isFullAccess = reader.readBool();
      _isFullAccessSet = true;
      reader.context().pop();
    }
    else if (field == "receiverId") {
      reader.context().push(field, "string | null", "type found, reading property");
      _receiverId = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "methodNames") {
      reader.context().push(field, "Array<string> | null", "type found, reading property");
      _methodNames = reader.readNullableArray((reader: Read): string => {
        return reader.readString();
      });
      reader.context().pop();
    }
    else if (field == "allowance") {
      reader.context().push(field, "BigInt | null", "type found, reading property");
      _allowance = reader.readNullableBigInt();
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_isFullAccessSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'isFullAccess: Boolean'"));
  }

  return {
    isFullAccess: _isFullAccess,
    receiverId: _receiverId,
    methodNames: _methodNames,
    allowance: _allowance
  };
}
