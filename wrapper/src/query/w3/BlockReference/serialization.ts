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
import { BlockReference } from "./";
import * as Types from "..";

export function serializeBlockReference(type: BlockReference): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: BlockReference");
  const sizer = new WriteSizer(sizerContext);
  writeBlockReference(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: BlockReference");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeBlockReference(encoder, type);
  return buffer;
}

export function writeBlockReference(writer: Write, type: BlockReference): void {
  writer.writeMapLength(3);
  writer.context().push("block_id", "string | null", "writing property");
  writer.writeString("block_id");
  writer.writeNullableString(type.block_id);
  writer.context().pop();
  writer.context().push("finality", "string | null", "writing property");
  writer.writeString("finality");
  writer.writeNullableString(type.finality);
  writer.context().pop();
  writer.context().push("syncCheckpoint", "string | null", "writing property");
  writer.writeString("syncCheckpoint");
  writer.writeNullableString(type.syncCheckpoint);
  writer.context().pop();
}

export function deserializeBlockReference(buffer: ArrayBuffer): BlockReference {
  const context: Context = new Context("Deserializing object-type BlockReference");
  const reader = new ReadDecoder(buffer, context);
  return readBlockReference(reader);
}

export function readBlockReference(reader: Read): BlockReference {
  let numFields = reader.readMapLength();

  let _block_id: string | null = null;
  let _finality: string | null = null;
  let _syncCheckpoint: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "block_id") {
      reader.context().push(field, "string | null", "type found, reading property");
      _block_id = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "finality") {
      reader.context().push(field, "string | null", "type found, reading property");
      _finality = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "syncCheckpoint") {
      reader.context().push(field, "string | null", "type found, reading property");
      _syncCheckpoint = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }


  return {
    block_id: _block_id,
    finality: _finality,
    syncCheckpoint: _syncCheckpoint
  };
}
