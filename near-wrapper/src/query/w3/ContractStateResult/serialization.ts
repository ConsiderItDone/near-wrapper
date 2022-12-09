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
import { ContractStateResult } from "./";
import * as Types from "..";

export function serializeContractStateResult(type: ContractStateResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: ContractStateResult");
  const sizer = new WriteSizer(sizerContext);
  writeContractStateResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: ContractStateResult");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeContractStateResult(encoder, type);
  return buffer;
}

export function writeContractStateResult(writer: Write, type: ContractStateResult): void {
  writer.writeMapLength(1);
  writer.context().push("values", "Array<Types.KeyValuePair>", "writing property");
  writer.writeString("values");
  writer.writeArray(type.values, (writer: Write, item: Types.KeyValuePair): void => {
    Types.KeyValuePair.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeContractStateResult(buffer: ArrayBuffer): ContractStateResult {
  const context: Context = new Context("Deserializing object-type ContractStateResult");
  const reader = new ReadDecoder(buffer, context);
  return readContractStateResult(reader);
}

export function readContractStateResult(reader: Read): ContractStateResult {
  let numFields = reader.readMapLength();

  let _values: Array<Types.KeyValuePair> = [];
  let _valuesSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "values") {
      reader.context().push(field, "Array<Types.KeyValuePair>", "type found, reading property");
      _values = reader.readArray((reader: Read): Types.KeyValuePair => {
        const object = Types.KeyValuePair.read(reader);
        return object;
      });
      _valuesSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_valuesSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'values: [KeyValuePair]'"));
  }

  return {
    values: _values
  };
}
