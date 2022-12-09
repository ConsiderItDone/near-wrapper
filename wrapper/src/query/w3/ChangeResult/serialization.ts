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
import { ChangeResult } from "./";
import * as Types from "..";

export function serializeChangeResult(type: ChangeResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: ChangeResult");
  const sizer = new WriteSizer(sizerContext);
  writeChangeResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: ChangeResult");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeChangeResult(encoder, type);
  return buffer;
}

export function writeChangeResult(writer: Write, type: ChangeResult): void {
  writer.writeMapLength(2);
  writer.context().push("block_hash", "string", "writing property");
  writer.writeString("block_hash");
  writer.writeString(type.block_hash);
  writer.context().pop();
  writer.context().push("changes", "Array<JSON.Value>", "writing property");
  writer.writeString("changes");
  writer.writeArray(type.changes, (writer: Write, item: JSON.Value): void => {
    writer.writeJSON(item);
  });
  writer.context().pop();
}

export function deserializeChangeResult(buffer: ArrayBuffer): ChangeResult {
  const context: Context = new Context("Deserializing object-type ChangeResult");
  const reader = new ReadDecoder(buffer, context);
  return readChangeResult(reader);
}

export function readChangeResult(reader: Read): ChangeResult {
  let numFields = reader.readMapLength();

  let _block_hash: string = "";
  let _block_hashSet: bool = false;
  let _changes: Array<JSON.Value> = [];
  let _changesSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "block_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _block_hash = reader.readString();
      _block_hashSet = true;
      reader.context().pop();
    }
    else if (field == "changes") {
      reader.context().push(field, "Array<JSON.Value>", "type found, reading property");
      _changes = reader.readArray((reader: Read): JSON.Value => {
        return reader.readJSON();
      });
      _changesSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_block_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'block_hash: String'"));
  }
  if (!_changesSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'changes: [JSON]'"));
  }

  return {
    block_hash: _block_hash,
    changes: _changes
  };
}
