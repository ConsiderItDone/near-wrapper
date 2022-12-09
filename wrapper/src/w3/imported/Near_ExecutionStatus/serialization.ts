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
import { Near_ExecutionStatus } from "./";
import * as Types from "../..";

export function serializeNear_ExecutionStatus(type: Near_ExecutionStatus): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_ExecutionStatus");
  const sizer = new WriteSizer(sizerContext);
  writeNear_ExecutionStatus(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_ExecutionStatus");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_ExecutionStatus(encoder, type);
  return buffer;
}

export function writeNear_ExecutionStatus(writer: Write, type: Near_ExecutionStatus): void {
  writer.writeMapLength(3);
  writer.context().push("SuccessValue", "string | null", "writing property");
  writer.writeString("SuccessValue");
  writer.writeNullableString(type.SuccessValue);
  writer.context().pop();
  writer.context().push("SuccessReceiptId", "string | null", "writing property");
  writer.writeString("SuccessReceiptId");
  writer.writeNullableString(type.SuccessReceiptId);
  writer.context().pop();
  writer.context().push("failure", "JSON.Value | null", "writing property");
  writer.writeString("failure");
  writer.writeNullableJSON(type.failure);
  writer.context().pop();
}

export function deserializeNear_ExecutionStatus(buffer: ArrayBuffer): Near_ExecutionStatus {
  const context: Context = new Context("Deserializing imported object-type Near_ExecutionStatus");
  const reader = new ReadDecoder(buffer, context);
  return readNear_ExecutionStatus(reader);
}

export function readNear_ExecutionStatus(reader: Read): Near_ExecutionStatus {
  let numFields = reader.readMapLength();

  let _SuccessValue: string | null = null;
  let _SuccessReceiptId: string | null = null;
  let _failure: JSON.Value | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "SuccessValue") {
      reader.context().push(field, "string | null", "type found, reading property");
      _SuccessValue = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "SuccessReceiptId") {
      reader.context().push(field, "string | null", "type found, reading property");
      _SuccessReceiptId = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "failure") {
      reader.context().push(field, "JSON.Value | null", "type found, reading property");
      _failure = reader.readNullableJSON();
      reader.context().pop();
    }
    reader.context().pop();
  }


  return {
    SuccessValue: _SuccessValue,
    SuccessReceiptId: _SuccessReceiptId,
    failure: _failure
  };
}
