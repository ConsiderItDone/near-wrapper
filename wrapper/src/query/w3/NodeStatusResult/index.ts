import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNodeStatusResult,
  deserializeNodeStatusResult,
  writeNodeStatusResult,
  readNodeStatusResult
} from "./serialization";
import * as Types from "..";

export class NodeStatusResult {
  chain_id: string;
  rpc_addr: string;
  sync_info: Types.SyncInfo;
  validators: Array<string>;
  version: Types.Version;

  static toBuffer(type: NodeStatusResult): ArrayBuffer {
    return serializeNodeStatusResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): NodeStatusResult {
    return deserializeNodeStatusResult(buffer);
  }

  static write(writer: Write, type: NodeStatusResult): void {
    writeNodeStatusResult(writer, type);
  }

  static read(reader: Read): NodeStatusResult {
    return readNodeStatusResult(reader);
  }
}
