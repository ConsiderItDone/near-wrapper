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
import { AccountAuthorizedApp } from "./";
import * as Types from "..";

export function serializeAccountAuthorizedApp(type: AccountAuthorizedApp): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: AccountAuthorizedApp");
  const sizer = new WriteSizer(sizerContext);
  writeAccountAuthorizedApp(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: AccountAuthorizedApp");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeAccountAuthorizedApp(encoder, type);
  return buffer;
}

export function writeAccountAuthorizedApp(writer: Write, type: AccountAuthorizedApp): void {
  writer.writeMapLength(3);
  writer.context().push("contractId", "string", "writing property");
  writer.writeString("contractId");
  writer.writeString(type.contractId);
  writer.context().pop();
  writer.context().push("amount", "string", "writing property");
  writer.writeString("amount");
  writer.writeString(type.amount);
  writer.context().pop();
  writer.context().push("publicKey", "string", "writing property");
  writer.writeString("publicKey");
  writer.writeString(type.publicKey);
  writer.context().pop();
}

export function deserializeAccountAuthorizedApp(buffer: ArrayBuffer): AccountAuthorizedApp {
  const context: Context = new Context("Deserializing object-type AccountAuthorizedApp");
  const reader = new ReadDecoder(buffer, context);
  return readAccountAuthorizedApp(reader);
}

export function readAccountAuthorizedApp(reader: Read): AccountAuthorizedApp {
  let numFields = reader.readMapLength();

  let _contractId: string = "";
  let _contractIdSet: bool = false;
  let _amount: string = "";
  let _amountSet: bool = false;
  let _publicKey: string = "";
  let _publicKeySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "contractId") {
      reader.context().push(field, "string", "type found, reading property");
      _contractId = reader.readString();
      _contractIdSet = true;
      reader.context().pop();
    }
    else if (field == "amount") {
      reader.context().push(field, "string", "type found, reading property");
      _amount = reader.readString();
      _amountSet = true;
      reader.context().pop();
    }
    else if (field == "publicKey") {
      reader.context().push(field, "string", "type found, reading property");
      _publicKey = reader.readString();
      _publicKeySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_contractIdSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'contractId: String'"));
  }
  if (!_amountSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'amount: String'"));
  }
  if (!_publicKeySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'publicKey: String'"));
  }

  return {
    contractId: _contractId,
    amount: _amount,
    publicKey: _publicKey
  };
}
