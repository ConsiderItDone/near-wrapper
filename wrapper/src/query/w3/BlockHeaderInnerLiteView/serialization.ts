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
import { BlockHeaderInnerLiteView } from "./";
import * as Types from "..";

export function serializeBlockHeaderInnerLiteView(type: BlockHeaderInnerLiteView): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: BlockHeaderInnerLiteView");
  const sizer = new WriteSizer(sizerContext);
  writeBlockHeaderInnerLiteView(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: BlockHeaderInnerLiteView");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeBlockHeaderInnerLiteView(encoder, type);
  return buffer;
}

export function writeBlockHeaderInnerLiteView(writer: Write, type: BlockHeaderInnerLiteView): void {
  writer.writeMapLength(8);
  writer.context().push("height", "BigInt", "writing property");
  writer.writeString("height");
  writer.writeBigInt(type.height);
  writer.context().pop();
  writer.context().push("epoch_id", "string", "writing property");
  writer.writeString("epoch_id");
  writer.writeString(type.epoch_id);
  writer.context().pop();
  writer.context().push("next_epoch_id", "string", "writing property");
  writer.writeString("next_epoch_id");
  writer.writeString(type.next_epoch_id);
  writer.context().pop();
  writer.context().push("prev_state_root", "string", "writing property");
  writer.writeString("prev_state_root");
  writer.writeString(type.prev_state_root);
  writer.context().pop();
  writer.context().push("outcome_root", "string", "writing property");
  writer.writeString("outcome_root");
  writer.writeString(type.outcome_root);
  writer.context().pop();
  writer.context().push("timestamp", "BigInt", "writing property");
  writer.writeString("timestamp");
  writer.writeBigInt(type.timestamp);
  writer.context().pop();
  writer.context().push("next_bp_hash", "string", "writing property");
  writer.writeString("next_bp_hash");
  writer.writeString(type.next_bp_hash);
  writer.context().pop();
  writer.context().push("block_merkle_root", "string", "writing property");
  writer.writeString("block_merkle_root");
  writer.writeString(type.block_merkle_root);
  writer.context().pop();
}

export function deserializeBlockHeaderInnerLiteView(buffer: ArrayBuffer): BlockHeaderInnerLiteView {
  const context: Context = new Context("Deserializing object-type BlockHeaderInnerLiteView");
  const reader = new ReadDecoder(buffer, context);
  return readBlockHeaderInnerLiteView(reader);
}

export function readBlockHeaderInnerLiteView(reader: Read): BlockHeaderInnerLiteView {
  let numFields = reader.readMapLength();

  let _height: BigInt = BigInt.fromUInt16(0);
  let _heightSet: bool = false;
  let _epoch_id: string = "";
  let _epoch_idSet: bool = false;
  let _next_epoch_id: string = "";
  let _next_epoch_idSet: bool = false;
  let _prev_state_root: string = "";
  let _prev_state_rootSet: bool = false;
  let _outcome_root: string = "";
  let _outcome_rootSet: bool = false;
  let _timestamp: BigInt = BigInt.fromUInt16(0);
  let _timestampSet: bool = false;
  let _next_bp_hash: string = "";
  let _next_bp_hashSet: bool = false;
  let _block_merkle_root: string = "";
  let _block_merkle_rootSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "height") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _height = reader.readBigInt();
      _heightSet = true;
      reader.context().pop();
    }
    else if (field == "epoch_id") {
      reader.context().push(field, "string", "type found, reading property");
      _epoch_id = reader.readString();
      _epoch_idSet = true;
      reader.context().pop();
    }
    else if (field == "next_epoch_id") {
      reader.context().push(field, "string", "type found, reading property");
      _next_epoch_id = reader.readString();
      _next_epoch_idSet = true;
      reader.context().pop();
    }
    else if (field == "prev_state_root") {
      reader.context().push(field, "string", "type found, reading property");
      _prev_state_root = reader.readString();
      _prev_state_rootSet = true;
      reader.context().pop();
    }
    else if (field == "outcome_root") {
      reader.context().push(field, "string", "type found, reading property");
      _outcome_root = reader.readString();
      _outcome_rootSet = true;
      reader.context().pop();
    }
    else if (field == "timestamp") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _timestamp = reader.readBigInt();
      _timestampSet = true;
      reader.context().pop();
    }
    else if (field == "next_bp_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _next_bp_hash = reader.readString();
      _next_bp_hashSet = true;
      reader.context().pop();
    }
    else if (field == "block_merkle_root") {
      reader.context().push(field, "string", "type found, reading property");
      _block_merkle_root = reader.readString();
      _block_merkle_rootSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_heightSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'height: BigInt'"));
  }
  if (!_epoch_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'epoch_id: String'"));
  }
  if (!_next_epoch_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'next_epoch_id: String'"));
  }
  if (!_prev_state_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'prev_state_root: String'"));
  }
  if (!_outcome_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'outcome_root: String'"));
  }
  if (!_timestampSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'timestamp: BigInt'"));
  }
  if (!_next_bp_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'next_bp_hash: String'"));
  }
  if (!_block_merkle_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'block_merkle_root: String'"));
  }

  return {
    height: _height,
    epoch_id: _epoch_id,
    next_epoch_id: _next_epoch_id,
    prev_state_root: _prev_state_root,
    outcome_root: _outcome_root,
    timestamp: _timestamp,
    next_bp_hash: _next_bp_hash,
    block_merkle_root: _block_merkle_root
  };
}
