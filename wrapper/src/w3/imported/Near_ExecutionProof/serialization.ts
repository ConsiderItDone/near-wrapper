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
import { Near_ExecutionProof } from "./";
import * as Types from "../..";

export function serializeNear_ExecutionProof(type: Near_ExecutionProof): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_ExecutionProof");
  const sizer = new WriteSizer(sizerContext);
  writeNear_ExecutionProof(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_ExecutionProof");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_ExecutionProof(encoder, type);
  return buffer;
}

export function writeNear_ExecutionProof(writer: Write, type: Near_ExecutionProof): void {
  writer.writeMapLength(2);
  writer.context().push("direction", "string", "writing property");
  writer.writeString("direction");
  writer.writeString(type.direction);
  writer.context().pop();
  writer.context().push("hash", "string", "writing property");
  writer.writeString("hash");
  writer.writeString(type.hash);
  writer.context().pop();
}

export function deserializeNear_ExecutionProof(buffer: ArrayBuffer): Near_ExecutionProof {
  const context: Context = new Context("Deserializing imported object-type Near_ExecutionProof");
  const reader = new ReadDecoder(buffer, context);
  return readNear_ExecutionProof(reader);
}

export function readNear_ExecutionProof(reader: Read): Near_ExecutionProof {
  let numFields = reader.readMapLength();

  let _direction: string = "";
  let _directionSet: bool = false;
  let _hash: string = "";
  let _hashSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "direction") {
      reader.context().push(field, "string", "type found, reading property");
      _direction = reader.readString();
      _directionSet = true;
      reader.context().pop();
    }
    else if (field == "hash") {
      reader.context().push(field, "string", "type found, reading property");
      _hash = reader.readString();
      _hashSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_directionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'direction: String'"));
  }
  if (!_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'hash: String'"));
  }

  return {
    direction: _direction,
    hash: _hash
  };
}
