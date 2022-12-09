import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNearProtocolConfig,
  deserializeNearProtocolConfig,
  writeNearProtocolConfig,
  readNearProtocolConfig
} from "./serialization";
import * as Types from "..";

export class NearProtocolConfig {
  runtime_config: Types.NearProtocolRuntimeConfig;

  static toBuffer(type: NearProtocolConfig): ArrayBuffer {
    return serializeNearProtocolConfig(type);
  }

  static fromBuffer(buffer: ArrayBuffer): NearProtocolConfig {
    return deserializeNearProtocolConfig(buffer);
  }

  static write(writer: Write, type: NearProtocolConfig): void {
    writeNearProtocolConfig(writer, type);
  }

  static read(reader: Read): NearProtocolConfig {
    return readNearProtocolConfig(reader);
  }
}
