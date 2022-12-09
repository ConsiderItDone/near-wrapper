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
import { Version } from "./";
import * as Types from "..";

export function serializeVersion(type: Version): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: Version");
  const sizer = new WriteSizer(sizerContext);
  writeVersion(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: Version");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeVersion(encoder, type);
  return buffer;
}

export function writeVersion(writer: Write, type: Version): void {
  writer.writeMapLength(2);
  writer.context().push("version", "string", "writing property");
  writer.writeString("version");
  writer.writeString(type.version);
  writer.context().pop();
  writer.context().push("build", "string", "writing property");
  writer.writeString("build");
  writer.writeString(type.build);
  writer.context().pop();
}

export function deserializeVersion(buffer: ArrayBuffer): Version {
  const context: Context = new Context("Deserializing object-type Version");
  const reader = new ReadDecoder(buffer, context);
  return readVersion(reader);
}

export function readVersion(reader: Read): Version {
  let numFields = reader.readMapLength();

  let _version: string = "";
  let _versionSet: bool = false;
  let _build: string = "";
  let _buildSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "version") {
      reader.context().push(field, "string", "type found, reading property");
      _version = reader.readString();
      _versionSet = true;
      reader.context().pop();
    }
    else if (field == "build") {
      reader.context().push(field, "string", "type found, reading property");
      _build = reader.readString();
      _buildSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_versionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'version: String'"));
  }
  if (!_buildSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'build: String'"));
  }

  return {
    version: _version,
    build: _build
  };
}
