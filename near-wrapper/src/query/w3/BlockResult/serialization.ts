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
import { BlockResult } from "./";
import * as Types from "..";

export function serializeBlockResult(type: BlockResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: BlockResult");
  const sizer = new WriteSizer(sizerContext);
  writeBlockResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: BlockResult");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeBlockResult(encoder, type);
  return buffer;
}

export function writeBlockResult(writer: Write, type: BlockResult): void {
  writer.writeMapLength(3);
  writer.context().push("author", "string", "writing property");
  writer.writeString("author");
  writer.writeString(type.author);
  writer.context().pop();
  writer.context().push("header", "Types.BlockHeader", "writing property");
  writer.writeString("header");
  Types.BlockHeader.write(writer, type.header);
  writer.context().pop();
  writer.context().push("chunks", "Array<Types.Chunk>", "writing property");
  writer.writeString("chunks");
  writer.writeArray(type.chunks, (writer: Write, item: Types.Chunk): void => {
    Types.Chunk.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeBlockResult(buffer: ArrayBuffer): BlockResult {
  const context: Context = new Context("Deserializing object-type BlockResult");
  const reader = new ReadDecoder(buffer, context);
  return readBlockResult(reader);
}

export function readBlockResult(reader: Read): BlockResult {
  let numFields = reader.readMapLength();

  let _author: string = "";
  let _authorSet: bool = false;
  let _header: Types.BlockHeader | null = null;
  let _headerSet: bool = false;
  let _chunks: Array<Types.Chunk> = [];
  let _chunksSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "author") {
      reader.context().push(field, "string", "type found, reading property");
      _author = reader.readString();
      _authorSet = true;
      reader.context().pop();
    }
    else if (field == "header") {
      reader.context().push(field, "Types.BlockHeader", "type found, reading property");
      const object = Types.BlockHeader.read(reader);
      _header = object;
      _headerSet = true;
      reader.context().pop();
    }
    else if (field == "chunks") {
      reader.context().push(field, "Array<Types.Chunk>", "type found, reading property");
      _chunks = reader.readArray((reader: Read): Types.Chunk => {
        const object = Types.Chunk.read(reader);
        return object;
      });
      _chunksSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_authorSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'author: String'"));
  }
  if (!_header || !_headerSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'header: BlockHeader'"));
  }
  if (!_chunksSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chunks: [Chunk]'"));
  }

  return {
    author: _author,
    header: _header,
    chunks: _chunks
  };
}
