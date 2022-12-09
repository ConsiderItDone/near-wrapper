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
import { SyncInfo } from "./";
import * as Types from "..";

export function serializeSyncInfo(type: SyncInfo): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: SyncInfo");
  const sizer = new WriteSizer(sizerContext);
  writeSyncInfo(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: SyncInfo");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeSyncInfo(encoder, type);
  return buffer;
}

export function writeSyncInfo(writer: Write, type: SyncInfo): void {
  writer.writeMapLength(5);
  writer.context().push("latest_block_hash", "string", "writing property");
  writer.writeString("latest_block_hash");
  writer.writeString(type.latest_block_hash);
  writer.context().pop();
  writer.context().push("latest_block_height", "BigInt", "writing property");
  writer.writeString("latest_block_height");
  writer.writeBigInt(type.latest_block_height);
  writer.context().pop();
  writer.context().push("latest_block_time", "string", "writing property");
  writer.writeString("latest_block_time");
  writer.writeString(type.latest_block_time);
  writer.context().pop();
  writer.context().push("latest_state_root", "string", "writing property");
  writer.writeString("latest_state_root");
  writer.writeString(type.latest_state_root);
  writer.context().pop();
  writer.context().push("syncing", "bool", "writing property");
  writer.writeString("syncing");
  writer.writeBool(type.syncing);
  writer.context().pop();
}

export function deserializeSyncInfo(buffer: ArrayBuffer): SyncInfo {
  const context: Context = new Context("Deserializing object-type SyncInfo");
  const reader = new ReadDecoder(buffer, context);
  return readSyncInfo(reader);
}

export function readSyncInfo(reader: Read): SyncInfo {
  let numFields = reader.readMapLength();

  let _latest_block_hash: string = "";
  let _latest_block_hashSet: bool = false;
  let _latest_block_height: BigInt = BigInt.fromUInt16(0);
  let _latest_block_heightSet: bool = false;
  let _latest_block_time: string = "";
  let _latest_block_timeSet: bool = false;
  let _latest_state_root: string = "";
  let _latest_state_rootSet: bool = false;
  let _syncing: bool = false;
  let _syncingSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "latest_block_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _latest_block_hash = reader.readString();
      _latest_block_hashSet = true;
      reader.context().pop();
    }
    else if (field == "latest_block_height") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _latest_block_height = reader.readBigInt();
      _latest_block_heightSet = true;
      reader.context().pop();
    }
    else if (field == "latest_block_time") {
      reader.context().push(field, "string", "type found, reading property");
      _latest_block_time = reader.readString();
      _latest_block_timeSet = true;
      reader.context().pop();
    }
    else if (field == "latest_state_root") {
      reader.context().push(field, "string", "type found, reading property");
      _latest_state_root = reader.readString();
      _latest_state_rootSet = true;
      reader.context().pop();
    }
    else if (field == "syncing") {
      reader.context().push(field, "bool", "type found, reading property");
      _syncing = reader.readBool();
      _syncingSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_latest_block_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'latest_block_hash: String'"));
  }
  if (!_latest_block_heightSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'latest_block_height: BigInt'"));
  }
  if (!_latest_block_timeSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'latest_block_time: String'"));
  }
  if (!_latest_state_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'latest_state_root: String'"));
  }
  if (!_syncingSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'syncing: Boolean'"));
  }

  return {
    latest_block_hash: _latest_block_hash,
    latest_block_height: _latest_block_height,
    latest_block_time: _latest_block_time,
    latest_state_root: _latest_state_root,
    syncing: _syncing
  };
}
