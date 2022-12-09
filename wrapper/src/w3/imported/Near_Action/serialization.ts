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
import { Near_Action } from "./";
import * as Types from "../..";

export function serializeNear_Action(type: Near_Action): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_Action");
  const sizer = new WriteSizer(sizerContext);
  writeNear_Action(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_Action");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_Action(encoder, type);
  return buffer;
}

export function writeNear_Action(writer: Write, type: Near_Action): void {
  writer.writeMapLength(9);
  writer.context().push("code", "ArrayBuffer | null", "writing property");
  writer.writeString("code");
  writer.writeNullableBytes(type.code);
  writer.context().pop();
  writer.context().push("methodName", "string | null", "writing property");
  writer.writeString("methodName");
  writer.writeNullableString(type.methodName);
  writer.context().pop();
  writer.context().push("args", "ArrayBuffer | null", "writing property");
  writer.writeString("args");
  writer.writeNullableBytes(type.args);
  writer.context().pop();
  writer.context().push("gas", "BigInt | null", "writing property");
  writer.writeString("gas");
  writer.writeNullableBigInt(type.gas);
  writer.context().pop();
  writer.context().push("deposit", "BigInt | null", "writing property");
  writer.writeString("deposit");
  writer.writeNullableBigInt(type.deposit);
  writer.context().pop();
  writer.context().push("stake", "BigInt | null", "writing property");
  writer.writeString("stake");
  writer.writeNullableBigInt(type.stake);
  writer.context().pop();
  writer.context().push("publicKey", "Types.Near_PublicKey | null", "writing property");
  writer.writeString("publicKey");
  if (type.publicKey) {
    Types.Near_PublicKey.write(writer, type.publicKey as Types.Near_PublicKey);
  } else {
    writer.writeNil();
  }
  writer.context().pop();
  writer.context().push("accessKey", "Types.Near_AccessKey | null", "writing property");
  writer.writeString("accessKey");
  if (type.accessKey) {
    Types.Near_AccessKey.write(writer, type.accessKey as Types.Near_AccessKey);
  } else {
    writer.writeNil();
  }
  writer.context().pop();
  writer.context().push("beneficiaryId", "string | null", "writing property");
  writer.writeString("beneficiaryId");
  writer.writeNullableString(type.beneficiaryId);
  writer.context().pop();
}

export function deserializeNear_Action(buffer: ArrayBuffer): Near_Action {
  const context: Context = new Context("Deserializing imported object-type Near_Action");
  const reader = new ReadDecoder(buffer, context);
  return readNear_Action(reader);
}

export function readNear_Action(reader: Read): Near_Action {
  let numFields = reader.readMapLength();

  let _code: ArrayBuffer | null = null;
  let _methodName: string | null = null;
  let _args: ArrayBuffer | null = null;
  let _gas: BigInt | null = null;
  let _deposit: BigInt | null = null;
  let _stake: BigInt | null = null;
  let _publicKey: Types.Near_PublicKey | null = null;
  let _accessKey: Types.Near_AccessKey | null = null;
  let _beneficiaryId: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "code") {
      reader.context().push(field, "ArrayBuffer | null", "type found, reading property");
      _code = reader.readNullableBytes();
      reader.context().pop();
    }
    else if (field == "methodName") {
      reader.context().push(field, "string | null", "type found, reading property");
      _methodName = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "args") {
      reader.context().push(field, "ArrayBuffer | null", "type found, reading property");
      _args = reader.readNullableBytes();
      reader.context().pop();
    }
    else if (field == "gas") {
      reader.context().push(field, "BigInt | null", "type found, reading property");
      _gas = reader.readNullableBigInt();
      reader.context().pop();
    }
    else if (field == "deposit") {
      reader.context().push(field, "BigInt | null", "type found, reading property");
      _deposit = reader.readNullableBigInt();
      reader.context().pop();
    }
    else if (field == "stake") {
      reader.context().push(field, "BigInt | null", "type found, reading property");
      _stake = reader.readNullableBigInt();
      reader.context().pop();
    }
    else if (field == "publicKey") {
      reader.context().push(field, "Types.Near_PublicKey | null", "type found, reading property");
      let object: Types.Near_PublicKey | null = null;
      if (!reader.isNextNil()) {
        object = Types.Near_PublicKey.read(reader);
      }
      _publicKey = object;
      reader.context().pop();
    }
    else if (field == "accessKey") {
      reader.context().push(field, "Types.Near_AccessKey | null", "type found, reading property");
      let object: Types.Near_AccessKey | null = null;
      if (!reader.isNextNil()) {
        object = Types.Near_AccessKey.read(reader);
      }
      _accessKey = object;
      reader.context().pop();
    }
    else if (field == "beneficiaryId") {
      reader.context().push(field, "string | null", "type found, reading property");
      _beneficiaryId = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }


  return {
    code: _code,
    methodName: _methodName,
    args: _args,
    gas: _gas,
    deposit: _deposit,
    stake: _stake,
    publicKey: _publicKey,
    accessKey: _accessKey,
    beneficiaryId: _beneficiaryId
  };
}
