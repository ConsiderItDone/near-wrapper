import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeSyncInfo,
  deserializeSyncInfo,
  writeSyncInfo,
  readSyncInfo
} from "./serialization";
import * as Types from "..";

export class SyncInfo {
  latest_block_hash: string;
  latest_block_height: BigInt;
  latest_block_time: string;
  latest_state_root: string;
  syncing: bool;

  static toBuffer(type: SyncInfo): ArrayBuffer {
    return serializeSyncInfo(type);
  }

  static fromBuffer(buffer: ArrayBuffer): SyncInfo {
    return deserializeSyncInfo(buffer);
  }

  static write(writer: Write, type: SyncInfo): void {
    writeSyncInfo(writer, type);
  }

  static read(reader: Read): SyncInfo {
    return readSyncInfo(reader);
  }
}
