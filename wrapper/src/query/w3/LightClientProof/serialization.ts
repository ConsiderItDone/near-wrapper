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
import { LightClientProof } from "./";
import * as Types from "..";

export function serializeLightClientProof(type: LightClientProof): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: LightClientProof");
  const sizer = new WriteSizer(sizerContext);
  writeLightClientProof(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: LightClientProof");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeLightClientProof(encoder, type);
  return buffer;
}

export function writeLightClientProof(writer: Write, type: LightClientProof): void {
  writer.writeMapLength(4);
  writer.context().push("outcome_proof", "Types.Near_ExecutionOutcomeWithId", "writing property");
  writer.writeString("outcome_proof");
  Types.Near_ExecutionOutcomeWithId.write(writer, type.outcome_proof);
  writer.context().pop();
  writer.context().push("outcome_root_proof", "Array<Types.Near_ExecutionProof>", "writing property");
  writer.writeString("outcome_root_proof");
  writer.writeArray(type.outcome_root_proof, (writer: Write, item: Types.Near_ExecutionProof): void => {
    Types.Near_ExecutionProof.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("block_header_lite", "Types.LightClientBlockLiteView", "writing property");
  writer.writeString("block_header_lite");
  Types.LightClientBlockLiteView.write(writer, type.block_header_lite);
  writer.context().pop();
  writer.context().push("block_proof", "Array<Types.Near_ExecutionProof>", "writing property");
  writer.writeString("block_proof");
  writer.writeArray(type.block_proof, (writer: Write, item: Types.Near_ExecutionProof): void => {
    Types.Near_ExecutionProof.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeLightClientProof(buffer: ArrayBuffer): LightClientProof {
  const context: Context = new Context("Deserializing object-type LightClientProof");
  const reader = new ReadDecoder(buffer, context);
  return readLightClientProof(reader);
}

export function readLightClientProof(reader: Read): LightClientProof {
  let numFields = reader.readMapLength();

  let _outcome_proof: Types.Near_ExecutionOutcomeWithId | null = null;
  let _outcome_proofSet: bool = false;
  let _outcome_root_proof: Array<Types.Near_ExecutionProof> = [];
  let _outcome_root_proofSet: bool = false;
  let _block_header_lite: Types.LightClientBlockLiteView | null = null;
  let _block_header_liteSet: bool = false;
  let _block_proof: Array<Types.Near_ExecutionProof> = [];
  let _block_proofSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "outcome_proof") {
      reader.context().push(field, "Types.Near_ExecutionOutcomeWithId", "type found, reading property");
      const object = Types.Near_ExecutionOutcomeWithId.read(reader);
      _outcome_proof = object;
      _outcome_proofSet = true;
      reader.context().pop();
    }
    else if (field == "outcome_root_proof") {
      reader.context().push(field, "Array<Types.Near_ExecutionProof>", "type found, reading property");
      _outcome_root_proof = reader.readArray((reader: Read): Types.Near_ExecutionProof => {
        const object = Types.Near_ExecutionProof.read(reader);
        return object;
      });
      _outcome_root_proofSet = true;
      reader.context().pop();
    }
    else if (field == "block_header_lite") {
      reader.context().push(field, "Types.LightClientBlockLiteView", "type found, reading property");
      const object = Types.LightClientBlockLiteView.read(reader);
      _block_header_lite = object;
      _block_header_liteSet = true;
      reader.context().pop();
    }
    else if (field == "block_proof") {
      reader.context().push(field, "Array<Types.Near_ExecutionProof>", "type found, reading property");
      _block_proof = reader.readArray((reader: Read): Types.Near_ExecutionProof => {
        const object = Types.Near_ExecutionProof.read(reader);
        return object;
      });
      _block_proofSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_outcome_proof || !_outcome_proofSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'outcome_proof: Near_ExecutionOutcomeWithId'"));
  }
  if (!_outcome_root_proofSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'outcome_root_proof: [Near_ExecutionProof]'"));
  }
  if (!_block_header_lite || !_block_header_liteSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'block_header_lite: LightClientBlockLiteView'"));
  }
  if (!_block_proofSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'block_proof: [Near_ExecutionProof]'"));
  }

  return {
    outcome_proof: _outcome_proof,
    outcome_root_proof: _outcome_root_proof,
    block_header_lite: _block_header_lite,
    block_proof: _block_proof
  };
}
