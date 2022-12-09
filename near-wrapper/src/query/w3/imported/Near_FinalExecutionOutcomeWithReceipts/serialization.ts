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
import { Near_FinalExecutionOutcomeWithReceipts } from "./";
import * as Types from "../..";

export function serializeNear_FinalExecutionOutcomeWithReceipts(type: Near_FinalExecutionOutcomeWithReceipts): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_FinalExecutionOutcomeWithReceipts");
  const sizer = new WriteSizer(sizerContext);
  writeNear_FinalExecutionOutcomeWithReceipts(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_FinalExecutionOutcomeWithReceipts");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_FinalExecutionOutcomeWithReceipts(encoder, type);
  return buffer;
}

export function writeNear_FinalExecutionOutcomeWithReceipts(writer: Write, type: Near_FinalExecutionOutcomeWithReceipts): void {
  writer.writeMapLength(5);
  writer.context().push("status", "Types.Near_ExecutionStatus", "writing property");
  writer.writeString("status");
  Types.Near_ExecutionStatus.write(writer, type.status);
  writer.context().pop();
  writer.context().push("transaction", "Types.Near_Transaction", "writing property");
  writer.writeString("transaction");
  Types.Near_Transaction.write(writer, type.transaction);
  writer.context().pop();
  writer.context().push("transaction_outcome", "Types.Near_ExecutionOutcomeWithId", "writing property");
  writer.writeString("transaction_outcome");
  Types.Near_ExecutionOutcomeWithId.write(writer, type.transaction_outcome);
  writer.context().pop();
  writer.context().push("receipts_outcome", "Array<Types.Near_ExecutionOutcomeWithId>", "writing property");
  writer.writeString("receipts_outcome");
  writer.writeArray(type.receipts_outcome, (writer: Write, item: Types.Near_ExecutionOutcomeWithId): void => {
    Types.Near_ExecutionOutcomeWithId.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("receipts", "Array<Types.Near_ReceiptWithId>", "writing property");
  writer.writeString("receipts");
  writer.writeArray(type.receipts, (writer: Write, item: Types.Near_ReceiptWithId): void => {
    Types.Near_ReceiptWithId.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeNear_FinalExecutionOutcomeWithReceipts(buffer: ArrayBuffer): Near_FinalExecutionOutcomeWithReceipts {
  const context: Context = new Context("Deserializing imported object-type Near_FinalExecutionOutcomeWithReceipts");
  const reader = new ReadDecoder(buffer, context);
  return readNear_FinalExecutionOutcomeWithReceipts(reader);
}

export function readNear_FinalExecutionOutcomeWithReceipts(reader: Read): Near_FinalExecutionOutcomeWithReceipts {
  let numFields = reader.readMapLength();

  let _status: Types.Near_ExecutionStatus | null = null;
  let _statusSet: bool = false;
  let _transaction: Types.Near_Transaction | null = null;
  let _transactionSet: bool = false;
  let _transaction_outcome: Types.Near_ExecutionOutcomeWithId | null = null;
  let _transaction_outcomeSet: bool = false;
  let _receipts_outcome: Array<Types.Near_ExecutionOutcomeWithId> = [];
  let _receipts_outcomeSet: bool = false;
  let _receipts: Array<Types.Near_ReceiptWithId> = [];
  let _receiptsSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "status") {
      reader.context().push(field, "Types.Near_ExecutionStatus", "type found, reading property");
      const object = Types.Near_ExecutionStatus.read(reader);
      _status = object;
      _statusSet = true;
      reader.context().pop();
    }
    else if (field == "transaction") {
      reader.context().push(field, "Types.Near_Transaction", "type found, reading property");
      const object = Types.Near_Transaction.read(reader);
      _transaction = object;
      _transactionSet = true;
      reader.context().pop();
    }
    else if (field == "transaction_outcome") {
      reader.context().push(field, "Types.Near_ExecutionOutcomeWithId", "type found, reading property");
      const object = Types.Near_ExecutionOutcomeWithId.read(reader);
      _transaction_outcome = object;
      _transaction_outcomeSet = true;
      reader.context().pop();
    }
    else if (field == "receipts_outcome") {
      reader.context().push(field, "Array<Types.Near_ExecutionOutcomeWithId>", "type found, reading property");
      _receipts_outcome = reader.readArray((reader: Read): Types.Near_ExecutionOutcomeWithId => {
        const object = Types.Near_ExecutionOutcomeWithId.read(reader);
        return object;
      });
      _receipts_outcomeSet = true;
      reader.context().pop();
    }
    else if (field == "receipts") {
      reader.context().push(field, "Array<Types.Near_ReceiptWithId>", "type found, reading property");
      _receipts = reader.readArray((reader: Read): Types.Near_ReceiptWithId => {
        const object = Types.Near_ReceiptWithId.read(reader);
        return object;
      });
      _receiptsSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_status || !_statusSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'status: Near_ExecutionStatus'"));
  }
  if (!_transaction || !_transactionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'transaction: Near_Transaction'"));
  }
  if (!_transaction_outcome || !_transaction_outcomeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'transaction_outcome: Near_ExecutionOutcomeWithId'"));
  }
  if (!_receipts_outcomeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receipts_outcome: [Near_ExecutionOutcomeWithId]'"));
  }
  if (!_receiptsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receipts: [Near_ReceiptWithId]'"));
  }

  return {
    status: _status,
    transaction: _transaction,
    transaction_outcome: _transaction_outcome,
    receipts_outcome: _receipts_outcome,
    receipts: _receipts
  };
}
