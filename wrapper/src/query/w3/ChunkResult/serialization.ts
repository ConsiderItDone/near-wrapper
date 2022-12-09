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
import { ChunkResult } from "./";
import * as Types from "..";

export function serializeChunkResult(type: ChunkResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: ChunkResult");
  const sizer = new WriteSizer(sizerContext);
  writeChunkResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: ChunkResult");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeChunkResult(encoder, type);
  return buffer;
}

export function writeChunkResult(writer: Write, type: ChunkResult): void {
  writer.writeMapLength(3);
  writer.context().push("header", "Types.ChunkHeader", "writing property");
  writer.writeString("header");
  Types.ChunkHeader.write(writer, type.header);
  writer.context().pop();
  writer.context().push("receipts", "Array<JSON.Value>", "writing property");
  writer.writeString("receipts");
  writer.writeArray(type.receipts, (writer: Write, item: JSON.Value): void => {
    writer.writeJSON(item);
  });
  writer.context().pop();
  writer.context().push("transactions", "Array<Types.Near_Transaction>", "writing property");
  writer.writeString("transactions");
  writer.writeArray(type.transactions, (writer: Write, item: Types.Near_Transaction): void => {
    Types.Near_Transaction.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeChunkResult(buffer: ArrayBuffer): ChunkResult {
  const context: Context = new Context("Deserializing object-type ChunkResult");
  const reader = new ReadDecoder(buffer, context);
  return readChunkResult(reader);
}

export function readChunkResult(reader: Read): ChunkResult {
  let numFields = reader.readMapLength();

  let _header: Types.ChunkHeader | null = null;
  let _headerSet: bool = false;
  let _receipts: Array<JSON.Value> = [];
  let _receiptsSet: bool = false;
  let _transactions: Array<Types.Near_Transaction> = [];
  let _transactionsSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "header") {
      reader.context().push(field, "Types.ChunkHeader", "type found, reading property");
      const object = Types.ChunkHeader.read(reader);
      _header = object;
      _headerSet = true;
      reader.context().pop();
    }
    else if (field == "receipts") {
      reader.context().push(field, "Array<JSON.Value>", "type found, reading property");
      _receipts = reader.readArray((reader: Read): JSON.Value => {
        return reader.readJSON();
      });
      _receiptsSet = true;
      reader.context().pop();
    }
    else if (field == "transactions") {
      reader.context().push(field, "Array<Types.Near_Transaction>", "type found, reading property");
      _transactions = reader.readArray((reader: Read): Types.Near_Transaction => {
        const object = Types.Near_Transaction.read(reader);
        return object;
      });
      _transactionsSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_header || !_headerSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'header: ChunkHeader'"));
  }
  if (!_receiptsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receipts: [JSON]'"));
  }
  if (!_transactionsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'transactions: [Near_Transaction]'"));
  }

  return {
    header: _header,
    receipts: _receipts,
    transactions: _transactions
  };
}
