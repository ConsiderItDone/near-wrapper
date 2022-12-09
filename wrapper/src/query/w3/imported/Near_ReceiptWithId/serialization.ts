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
import { Near_ReceiptWithId } from "./";
import * as Types from "../..";

export function serializeNear_ReceiptWithId(type: Near_ReceiptWithId): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_ReceiptWithId");
  const sizer = new WriteSizer(sizerContext);
  writeNear_ReceiptWithId(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_ReceiptWithId");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_ReceiptWithId(encoder, type);
  return buffer;
}

export function writeNear_ReceiptWithId(writer: Write, type: Near_ReceiptWithId): void {
  writer.writeMapLength(4);
  writer.context().push("predecessor_id", "string", "writing property");
  writer.writeString("predecessor_id");
  writer.writeString(type.predecessor_id);
  writer.context().pop();
  writer.context().push("receipt", "Types.Near_Receipt", "writing property");
  writer.writeString("receipt");
  Types.Near_Receipt.write(writer, type.receipt);
  writer.context().pop();
  writer.context().push("receipt_id", "string", "writing property");
  writer.writeString("receipt_id");
  writer.writeString(type.receipt_id);
  writer.context().pop();
  writer.context().push("receiver_id", "string", "writing property");
  writer.writeString("receiver_id");
  writer.writeString(type.receiver_id);
  writer.context().pop();
}

export function deserializeNear_ReceiptWithId(buffer: ArrayBuffer): Near_ReceiptWithId {
  const context: Context = new Context("Deserializing imported object-type Near_ReceiptWithId");
  const reader = new ReadDecoder(buffer, context);
  return readNear_ReceiptWithId(reader);
}

export function readNear_ReceiptWithId(reader: Read): Near_ReceiptWithId {
  let numFields = reader.readMapLength();

  let _predecessor_id: string = "";
  let _predecessor_idSet: bool = false;
  let _receipt: Types.Near_Receipt | null = null;
  let _receiptSet: bool = false;
  let _receipt_id: string = "";
  let _receipt_idSet: bool = false;
  let _receiver_id: string = "";
  let _receiver_idSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "predecessor_id") {
      reader.context().push(field, "string", "type found, reading property");
      _predecessor_id = reader.readString();
      _predecessor_idSet = true;
      reader.context().pop();
    }
    else if (field == "receipt") {
      reader.context().push(field, "Types.Near_Receipt", "type found, reading property");
      const object = Types.Near_Receipt.read(reader);
      _receipt = object;
      _receiptSet = true;
      reader.context().pop();
    }
    else if (field == "receipt_id") {
      reader.context().push(field, "string", "type found, reading property");
      _receipt_id = reader.readString();
      _receipt_idSet = true;
      reader.context().pop();
    }
    else if (field == "receiver_id") {
      reader.context().push(field, "string", "type found, reading property");
      _receiver_id = reader.readString();
      _receiver_idSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_predecessor_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'predecessor_id: String'"));
  }
  if (!_receipt || !_receiptSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receipt: Near_Receipt'"));
  }
  if (!_receipt_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receipt_id: String'"));
  }
  if (!_receiver_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receiver_id: String'"));
  }

  return {
    predecessor_id: _predecessor_id,
    receipt: _receipt,
    receipt_id: _receipt_id,
    receiver_id: _receiver_id
  };
}
