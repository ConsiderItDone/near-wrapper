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
import { Near_ExecutionOutcomeWithId } from "./";
import * as Types from "../..";

export function serializeNear_ExecutionOutcomeWithId(type: Near_ExecutionOutcomeWithId): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_ExecutionOutcomeWithId");
  const sizer = new WriteSizer(sizerContext);
  writeNear_ExecutionOutcomeWithId(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_ExecutionOutcomeWithId");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_ExecutionOutcomeWithId(encoder, type);
  return buffer;
}

export function writeNear_ExecutionOutcomeWithId(writer: Write, type: Near_ExecutionOutcomeWithId): void {
  writer.writeMapLength(4);
  writer.context().push("block_hash", "string | null", "writing property");
  writer.writeString("block_hash");
  writer.writeNullableString(type.block_hash);
  writer.context().pop();
  writer.context().push("id", "string", "writing property");
  writer.writeString("id");
  writer.writeString(type.id);
  writer.context().pop();
  writer.context().push("outcome", "Types.Near_ExecutionOutcome", "writing property");
  writer.writeString("outcome");
  Types.Near_ExecutionOutcome.write(writer, type.outcome);
  writer.context().pop();
  writer.context().push("proof", "Array<Types.Near_ExecutionProof> | null", "writing property");
  writer.writeString("proof");
  writer.writeNullableArray(type.proof, (writer: Write, item: Types.Near_ExecutionProof): void => {
    Types.Near_ExecutionProof.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeNear_ExecutionOutcomeWithId(buffer: ArrayBuffer): Near_ExecutionOutcomeWithId {
  const context: Context = new Context("Deserializing imported object-type Near_ExecutionOutcomeWithId");
  const reader = new ReadDecoder(buffer, context);
  return readNear_ExecutionOutcomeWithId(reader);
}

export function readNear_ExecutionOutcomeWithId(reader: Read): Near_ExecutionOutcomeWithId {
  let numFields = reader.readMapLength();

  let _block_hash: string | null = null;
  let _id: string = "";
  let _idSet: bool = false;
  let _outcome: Types.Near_ExecutionOutcome | null = null;
  let _outcomeSet: bool = false;
  let _proof: Array<Types.Near_ExecutionProof> | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "block_hash") {
      reader.context().push(field, "string | null", "type found, reading property");
      _block_hash = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "id") {
      reader.context().push(field, "string", "type found, reading property");
      _id = reader.readString();
      _idSet = true;
      reader.context().pop();
    }
    else if (field == "outcome") {
      reader.context().push(field, "Types.Near_ExecutionOutcome", "type found, reading property");
      const object = Types.Near_ExecutionOutcome.read(reader);
      _outcome = object;
      _outcomeSet = true;
      reader.context().pop();
    }
    else if (field == "proof") {
      reader.context().push(field, "Array<Types.Near_ExecutionProof> | null", "type found, reading property");
      _proof = reader.readNullableArray((reader: Read): Types.Near_ExecutionProof => {
        const object = Types.Near_ExecutionProof.read(reader);
        return object;
      });
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'id: String'"));
  }
  if (!_outcome || !_outcomeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'outcome: Near_ExecutionOutcome'"));
  }

  return {
    block_hash: _block_hash,
    id: _id,
    outcome: _outcome,
    proof: _proof
  };
}
