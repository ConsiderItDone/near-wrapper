import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNearProtocolRuntimeConfig,
  deserializeNearProtocolRuntimeConfig,
  writeNearProtocolRuntimeConfig,
  readNearProtocolRuntimeConfig
} from "./serialization";
import * as Types from "..";

export class NearProtocolRuntimeConfig {
  storage_amount_per_byte: string;

  static toBuffer(type: NearProtocolRuntimeConfig): ArrayBuffer {
    return serializeNearProtocolRuntimeConfig(type);
  }

  static fromBuffer(buffer: ArrayBuffer): NearProtocolRuntimeConfig {
    return deserializeNearProtocolRuntimeConfig(buffer);
  }

  static write(writer: Write, type: NearProtocolRuntimeConfig): void {
    writeNearProtocolRuntimeConfig(writer, type);
  }

  static read(reader: Read): NearProtocolRuntimeConfig {
    return readNearProtocolRuntimeConfig(reader);
  }
}
