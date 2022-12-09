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
import { Near_AccessKeyPermission } from "./";
import * as Types from "../..";

export function serializeNear_AccessKeyPermission(type: Near_AccessKeyPermission): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_AccessKeyPermission");
  const sizer = new WriteSizer(sizerContext);
  writeNear_AccessKeyPermission(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_AccessKeyPermission");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_AccessKeyPermission(encoder, type);
  return buffer;
}

export function writeNear_AccessKeyPermission(writer: Write, type: Near_AccessKeyPermission): void {
  writer.writeMapLength(4);
  writer.context().push("_", "string | null", "writing property");
  writer.writeString("_");
  writer.writeNullableString(type._);
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

export function deserializeNear_AccessKeyPermission(buffer: ArrayBuffer): Near_AccessKeyPermission {
  const context: Context = new Context("Deserializing imported object-type Near_AccessKeyPermission");
  const reader = new ReadDecoder(buffer, context);
  return readNear_AccessKeyPermission(reader);
}

export function readNear_AccessKeyPermission(reader: Read): Near_AccessKeyPermission {
  let numFields = reader.readMapLength();

  let __: string | null = null;
  let _receiverId: string | null = null;
  let _methodNames: Array<string> | null = null;
  let _allowance: BigInt | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "_") {
      reader.context().push(field, "string | null", "type found, reading property");
      __ = reader.readNullableString();
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


  return {
    _: __,
    receiverId: _receiverId,
    methodNames: _methodNames,
    allowance: _allowance
  };
}
