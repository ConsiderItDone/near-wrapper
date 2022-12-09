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
import { Near_ExecutionOutcome } from "./";
import * as Types from "../..";

export function serializeNear_ExecutionOutcome(type: Near_ExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_ExecutionOutcome");
  const sizer = new WriteSizer(sizerContext);
  writeNear_ExecutionOutcome(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_ExecutionOutcome");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_ExecutionOutcome(encoder, type);
  return buffer;
}

export function writeNear_ExecutionOutcome(writer: Write, type: Near_ExecutionOutcome): void {
  writer.writeMapLength(7);
  writer.context().push("executor_id", "string | null", "writing property");
  writer.writeString("executor_id");
  writer.writeNullableString(type.executor_id);
  writer.context().pop();
  writer.context().push("gas_burnt", "BigInt", "writing property");
  writer.writeString("gas_burnt");
  writer.writeBigInt(type.gas_burnt);
  writer.context().pop();
  writer.context().push("logs", "Array<string> | null", "writing property");
  writer.writeString("logs");
  writer.writeNullableArray(type.logs, (writer: Write, item: string): void => {
    writer.writeString(item);
  });
  writer.context().pop();
  writer.context().push("metadata", "Types.Near_OutcomeMetaData | null", "writing property");
  writer.writeString("metadata");
  if (type.metadata) {
    Types.Near_OutcomeMetaData.write(writer, type.metadata as Types.Near_OutcomeMetaData);
  } else {
    writer.writeNil();
  }
  writer.context().pop();
  writer.context().push("receipt_ids", "Array<string>", "writing property");
  writer.writeString("receipt_ids");
  writer.writeArray(type.receipt_ids, (writer: Write, item: string): void => {
    writer.writeString(item);
  });
  writer.context().pop();
  writer.context().push("status", "Types.Near_ExecutionStatus", "writing property");
  writer.writeString("status");
  Types.Near_ExecutionStatus.write(writer, type.status);
  writer.context().pop();
  writer.context().push("tokens_burnt", "string | null", "writing property");
  writer.writeString("tokens_burnt");
  writer.writeNullableString(type.tokens_burnt);
  writer.context().pop();
}

export function deserializeNear_ExecutionOutcome(buffer: ArrayBuffer): Near_ExecutionOutcome {
  const context: Context = new Context("Deserializing imported object-type Near_ExecutionOutcome");
  const reader = new ReadDecoder(buffer, context);
  return readNear_ExecutionOutcome(reader);
}

export function readNear_ExecutionOutcome(reader: Read): Near_ExecutionOutcome {
  let numFields = reader.readMapLength();

  let _executor_id: string | null = null;
  let _gas_burnt: BigInt = BigInt.fromUInt16(0);
  let _gas_burntSet: bool = false;
  let _logs: Array<string> | null = null;
  let _metadata: Types.Near_OutcomeMetaData | null = null;
  let _receipt_ids: Array<string> = [];
  let _receipt_idsSet: bool = false;
  let _status: Types.Near_ExecutionStatus | null = null;
  let _statusSet: bool = false;
  let _tokens_burnt: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "executor_id") {
      reader.context().push(field, "string | null", "type found, reading property");
      _executor_id = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "gas_burnt") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _gas_burnt = reader.readBigInt();
      _gas_burntSet = true;
      reader.context().pop();
    }
    else if (field == "logs") {
      reader.context().push(field, "Array<string> | null", "type found, reading property");
      _logs = reader.readNullableArray((reader: Read): string => {
        return reader.readString();
      });
      reader.context().pop();
    }
    else if (field == "metadata") {
      reader.context().push(field, "Types.Near_OutcomeMetaData | null", "type found, reading property");
      let object: Types.Near_OutcomeMetaData | null = null;
      if (!reader.isNextNil()) {
        object = Types.Near_OutcomeMetaData.read(reader);
      }
      _metadata = object;
      reader.context().pop();
    }
    else if (field == "receipt_ids") {
      reader.context().push(field, "Array<string>", "type found, reading property");
      _receipt_ids = reader.readArray((reader: Read): string => {
        return reader.readString();
      });
      _receipt_idsSet = true;
      reader.context().pop();
    }
    else if (field == "status") {
      reader.context().push(field, "Types.Near_ExecutionStatus", "type found, reading property");
      const object = Types.Near_ExecutionStatus.read(reader);
      _status = object;
      _statusSet = true;
      reader.context().pop();
    }
    else if (field == "tokens_burnt") {
      reader.context().push(field, "string | null", "type found, reading property");
      _tokens_burnt = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_gas_burntSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'gas_burnt: BigInt'"));
  }
  if (!_receipt_idsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'receipt_ids: [String]'"));
  }
  if (!_status || !_statusSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'status: Near_ExecutionStatus'"));
  }

  return {
    executor_id: _executor_id,
    gas_burnt: _gas_burnt,
    logs: _logs,
    metadata: _metadata,
    receipt_ids: _receipt_ids,
    status: _status,
    tokens_burnt: _tokens_burnt
  };
}
