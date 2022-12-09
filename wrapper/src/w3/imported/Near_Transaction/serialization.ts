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
import { Near_Transaction } from "./";
import * as Types from "../..";

export function serializeNear_Transaction(type: Near_Transaction): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_Transaction");
  const sizer = new WriteSizer(sizerContext);
  writeNear_Transaction(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_Transaction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_Transaction(encoder, type);
  return buffer;
}

export function writeNear_Transaction(writer: Write, type: Near_Transaction): void {
  writer.writeMapLength(7);
  writer.context().push("signerId", "string", "writing property");
  writer.writeString("signerId");
  writer.writeString(type.signerId);
  writer.context().pop();
  writer.context().push("publicKey", "Types.Near_PublicKey", "writing property");
  writer.writeString("publicKey");
  Types.Near_PublicKey.write(writer, type.publicKey);
  writer.context().pop();
  writer.context().push("nonce", "BigInt", "writing property");
  writer.writeString("nonce");
  writer.writeBigInt(type.nonce);
  writer.context().pop();
  writer.context().push("receiverId", "string", "writing property");
  writer.writeString("receiverId");
  writer.writeString(type.receiverId);
  writer.context().pop();
  writer.context().push("actions", "Array<Types.Near_Action>", "writing property");
  writer.writeString("actions");
  writer.writeArray(type.actions, (writer: Write, item: Types.Near_Action): void => {
    Types.Near_Action.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("blockHash", "ArrayBuffer | null", "writing property");
  writer.writeString("blockHash");
  writer.writeNullableBytes(type.blockHash);
  writer.context().pop();
  writer.context().push("hash", "string | null", "writing property");
  writer.writeString("hash");
  writer.writeNullableString(type.hash);
  writer.context().pop();
}

export function deserializeNear_Transaction(buffer: ArrayBuffer): Near_Transaction {
  const context: Context = new Context("Deserializing imported object-type Near_Transaction");
  const reader = new ReadDecoder(buffer, context);
  return readNear_Transaction(reader);
}

export function readNear_Transaction(reader: Read): Near_Transaction {
  let numFields = reader.readMapLength();

  let _signerId: string = "";
  let _signerIdSet: bool = false;
  let _publicKey: Types.Near_PublicKey | null = null;
  let _publicKeySet: bool = false;
  let _nonce: BigInt = BigInt.fromUInt16(0);
  let _nonceSet: bool = false;
  let _receiverId: string = "";
  let _receiverIdSet: bool = false;
  let _actions: Array<Types.Near_Action> = [];
  let _actionsSet: bool = false;
  let _blockHash: ArrayBuffer | null = null;
  let _hash: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    else if (field == "publicKey") {
      reader.context().push(field, "Types.Near_PublicKey", "type found, reading property");
      const object = Types.Near_PublicKey.read(reader);
      _publicKey = object;
      _publicKeySet = true;
      reader.context().pop();
    }
    else if (field == "nonce") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _nonce = reader.readBigInt();
      _nonceSet = true;
      reader.context().pop();
    }
    else if (field == "receiverId") {
      reader.context().push(field, "string", "type found, reading property");
      _receiverId = reader.readString();
      _receiverIdSet = true;
      reader.context().pop();
    }
    else if (field == "actions") {
      reader.context().push(field, "Array<Types.Near_Action>", "type found, reading property");
      _actions = reader.readArray((reader: Read): Types.Near_Action => {
        const object = Types.Near_Action.read(reader);
        return object;
      });
      _actionsSet = true;
      reader.context().pop();
    }
    else if (field == "blockHash") {
      reader.context().push(field, "ArrayBuffer | null", "type found, reading property");
      _blockHash = reader.readNullableBytes();
      reader.context().pop();
    }
    else if (field == "hash") {
      reader.context().push(field, "string | null", "type found, reading property");
      _hash = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'signerId: String'"));
  }
  if (!_publicKey || !_publicKeySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'publicKey: Near_PublicKey'"));
  }
  if (!_nonceSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'nonce: BigInt'"));
  }
  if (!_receiverIdSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receiverId: String'"));
  }
  if (!_actionsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'actions: [Near_Action]'"));
  }

  return {
    signerId: _signerId,
    publicKey: _publicKey,
    nonce: _nonce,
    receiverId: _receiverId,
    actions: _actions,
    blockHash: _blockHash,
    hash: _hash
  };
}
