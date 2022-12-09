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
import { LightClientProofRequest } from "./";
import * as Types from "..";

export function serializeLightClientProofRequest(type: LightClientProofRequest): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: LightClientProofRequest");
  const sizer = new WriteSizer(sizerContext);
  writeLightClientProofRequest(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: LightClientProofRequest");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeLightClientProofRequest(encoder, type);
  return buffer;
}

export function writeLightClientProofRequest(writer: Write, type: LightClientProofRequest): void {
  writer.writeMapLength(6);
  writer.context().push("type", "Types.IdType", "writing property");
  writer.writeString("type");
  writer.writeInt32(type.m_type);
  writer.context().pop();
  writer.context().push("light_client_head", "string", "writing property");
  writer.writeString("light_client_head");
  writer.writeString(type.light_client_head);
  writer.context().pop();
  writer.context().push("transaction_hash", "string | null", "writing property");
  writer.writeString("transaction_hash");
  writer.writeNullableString(type.transaction_hash);
  writer.context().pop();
  writer.context().push("sender_id", "string | null", "writing property");
  writer.writeString("sender_id");
  writer.writeNullableString(type.sender_id);
  writer.context().pop();
  writer.context().push("receipt_id", "string | null", "writing property");
  writer.writeString("receipt_id");
  writer.writeNullableString(type.receipt_id);
  writer.context().pop();
  writer.context().push("receiver_id", "string | null", "writing property");
  writer.writeString("receiver_id");
  writer.writeNullableString(type.receiver_id);
  writer.context().pop();
}

export function deserializeLightClientProofRequest(buffer: ArrayBuffer): LightClientProofRequest {
  const context: Context = new Context("Deserializing object-type LightClientProofRequest");
  const reader = new ReadDecoder(buffer, context);
  return readLightClientProofRequest(reader);
}

export function readLightClientProofRequest(reader: Read): LightClientProofRequest {
  let numFields = reader.readMapLength();

  let _type: Types.IdType = 0;
  let _typeSet: bool = false;
  let _light_client_head: string = "";
  let _light_client_headSet: bool = false;
  let _transaction_hash: string | null = null;
  let _sender_id: string | null = null;
  let _receipt_id: string | null = null;
  let _receiver_id: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "type") {
      reader.context().push(field, "Types.IdType", "type found, reading property");
      let value: Types.IdType;
      if (reader.isNextString()) {
        value = Types.getIdTypeValue(reader.readString());
      } else {
        value = reader.readInt32();
        Types.sanitizeIdTypeValue(value);
      }
      _type = value;
      _typeSet = true;
      reader.context().pop();
    }
    else if (field == "light_client_head") {
      reader.context().push(field, "string", "type found, reading property");
      _light_client_head = reader.readString();
      _light_client_headSet = true;
      reader.context().pop();
    }
    else if (field == "transaction_hash") {
      reader.context().push(field, "string | null", "type found, reading property");
      _transaction_hash = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "sender_id") {
      reader.context().push(field, "string | null", "type found, reading property");
      _sender_id = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "receipt_id") {
      reader.context().push(field, "string | null", "type found, reading property");
      _receipt_id = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "receiver_id") {
      reader.context().push(field, "string | null", "type found, reading property");
      _receiver_id = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_typeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'type: IdType'"));
  }
  if (!_light_client_headSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'light_client_head: String'"));
  }

  return {
    m_type: _type,
    light_client_head: _light_client_head,
    transaction_hash: _transaction_hash,
    sender_id: _sender_id,
    receipt_id: _receipt_id,
    receiver_id: _receiver_id
  };
}
