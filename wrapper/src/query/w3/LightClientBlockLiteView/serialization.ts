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
import { LightClientBlockLiteView } from "./";
import * as Types from "..";

export function serializeLightClientBlockLiteView(type: LightClientBlockLiteView): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: LightClientBlockLiteView");
  const sizer = new WriteSizer(sizerContext);
  writeLightClientBlockLiteView(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: LightClientBlockLiteView");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeLightClientBlockLiteView(encoder, type);
  return buffer;
}

export function writeLightClientBlockLiteView(writer: Write, type: LightClientBlockLiteView): void {
  writer.writeMapLength(3);
  writer.context().push("prev_block_hash", "string", "writing property");
  writer.writeString("prev_block_hash");
  writer.writeString(type.prev_block_hash);
  writer.context().pop();
  writer.context().push("inner_rest_hash", "string", "writing property");
  writer.writeString("inner_rest_hash");
  writer.writeString(type.inner_rest_hash);
  writer.context().pop();
  writer.context().push("inner_lite", "Types.BlockHeaderInnerLiteView", "writing property");
  writer.writeString("inner_lite");
  Types.BlockHeaderInnerLiteView.write(writer, type.inner_lite);
  writer.context().pop();
}

export function deserializeLightClientBlockLiteView(buffer: ArrayBuffer): LightClientBlockLiteView {
  const context: Context = new Context("Deserializing object-type LightClientBlockLiteView");
  const reader = new ReadDecoder(buffer, context);
  return readLightClientBlockLiteView(reader);
}

export function readLightClientBlockLiteView(reader: Read): LightClientBlockLiteView {
  let numFields = reader.readMapLength();

  let _prev_block_hash: string = "";
  let _prev_block_hashSet: bool = false;
  let _inner_rest_hash: string = "";
  let _inner_rest_hashSet: bool = false;
  let _inner_lite: Types.BlockHeaderInnerLiteView | null = null;
  let _inner_liteSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "prev_block_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _prev_block_hash = reader.readString();
      _prev_block_hashSet = true;
      reader.context().pop();
    }
    else if (field == "inner_rest_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _inner_rest_hash = reader.readString();
      _inner_rest_hashSet = true;
      reader.context().pop();
    }
    else if (field == "inner_lite") {
      reader.context().push(field, "Types.BlockHeaderInnerLiteView", "type found, reading property");
      const object = Types.BlockHeaderInnerLiteView.read(reader);
      _inner_lite = object;
      _inner_liteSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_prev_block_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'prev_block_hash: String'"));
  }
  if (!_inner_rest_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'inner_rest_hash: String'"));
  }
  if (!_inner_lite || !_inner_liteSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'inner_lite: BlockHeaderInnerLiteView'"));
  }

  return {
    prev_block_hash: _prev_block_hash,
    inner_rest_hash: _inner_rest_hash,
    inner_lite: _inner_lite
  };
}
