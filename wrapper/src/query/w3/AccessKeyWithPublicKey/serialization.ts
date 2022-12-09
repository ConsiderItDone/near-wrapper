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
import { AccessKeyWithPublicKey } from "./";
import * as Types from "..";

export function serializeAccessKeyWithPublicKey(type: AccessKeyWithPublicKey): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: AccessKeyWithPublicKey");
  const sizer = new WriteSizer(sizerContext);
  writeAccessKeyWithPublicKey(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: AccessKeyWithPublicKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeAccessKeyWithPublicKey(encoder, type);
  return buffer;
}

export function writeAccessKeyWithPublicKey(writer: Write, type: AccessKeyWithPublicKey): void {
  writer.writeMapLength(2);
  writer.context().push("account_id", "string", "writing property");
  writer.writeString("account_id");
  writer.writeString(type.account_id);
  writer.context().pop();
  writer.context().push("public_key", "string", "writing property");
  writer.writeString("public_key");
  writer.writeString(type.public_key);
  writer.context().pop();
}

export function deserializeAccessKeyWithPublicKey(buffer: ArrayBuffer): AccessKeyWithPublicKey {
  const context: Context = new Context("Deserializing object-type AccessKeyWithPublicKey");
  const reader = new ReadDecoder(buffer, context);
  return readAccessKeyWithPublicKey(reader);
}

export function readAccessKeyWithPublicKey(reader: Read): AccessKeyWithPublicKey {
  let numFields = reader.readMapLength();

  let _account_id: string = "";
  let _account_idSet: bool = false;
  let _public_key: string = "";
  let _public_keySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "account_id") {
      reader.context().push(field, "string", "type found, reading property");
      _account_id = reader.readString();
      _account_idSet = true;
      reader.context().pop();
    }
    else if (field == "public_key") {
      reader.context().push(field, "string", "type found, reading property");
      _public_key = reader.readString();
      _public_keySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_account_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'account_id: String'"));
  }
  if (!_public_keySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'public_key: String'"));
  }

  return {
    account_id: _account_id,
    public_key: _public_key
  };
}
