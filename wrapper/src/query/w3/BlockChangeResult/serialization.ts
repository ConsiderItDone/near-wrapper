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
import { BlockChangeResult } from "./";
import * as Types from "..";

export function serializeBlockChangeResult(type: BlockChangeResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: BlockChangeResult");
  const sizer = new WriteSizer(sizerContext);
  writeBlockChangeResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: BlockChangeResult");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeBlockChangeResult(encoder, type);
  return buffer;
}

export function writeBlockChangeResult(writer: Write, type: BlockChangeResult): void {
  writer.writeMapLength(2);
  writer.context().push("block_hash", "string", "writing property");
  writer.writeString("block_hash");
  writer.writeString(type.block_hash);
  writer.context().pop();
  writer.context().push("changes", "Array<Types.BlockChange>", "writing property");
  writer.writeString("changes");
  writer.writeArray(type.changes, (writer: Write, item: Types.BlockChange): void => {
    Types.BlockChange.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeBlockChangeResult(buffer: ArrayBuffer): BlockChangeResult {
  const context: Context = new Context("Deserializing object-type BlockChangeResult");
  const reader = new ReadDecoder(buffer, context);
  return readBlockChangeResult(reader);
}

export function readBlockChangeResult(reader: Read): BlockChangeResult {
  let numFields = reader.readMapLength();

  let _block_hash: string = "";
  let _block_hashSet: bool = false;
  let _changes: Array<Types.BlockChange> = [];
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
      reader.context().push(field, "Array<Types.BlockChange>", "type found, reading property");
      _changes = reader.readArray((reader: Read): Types.BlockChange => {
        const object = Types.BlockChange.read(reader);
        return object;
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
    throw new Error(reader.context().printWithContext("Missing required property: 'changes: [BlockChange]'"));
  }

  return {
    block_hash: _block_hash,
    changes: _changes
  };
}
