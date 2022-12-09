import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeLightClientBlockLiteView,
  deserializeLightClientBlockLiteView,
  writeLightClientBlockLiteView,
  readLightClientBlockLiteView
} from "./serialization";
import * as Types from "..";

export class LightClientBlockLiteView {
  prev_block_hash: string;
  inner_rest_hash: string;
  inner_lite: Types.BlockHeaderInnerLiteView;

  static toBuffer(type: LightClientBlockLiteView): ArrayBuffer {
    return serializeLightClientBlockLiteView(type);
  }

  static fromBuffer(buffer: ArrayBuffer): LightClientBlockLiteView {
    return deserializeLightClientBlockLiteView(buffer);
  }

  static write(writer: Write, type: LightClientBlockLiteView): void {
    writeLightClientBlockLiteView(writer, type);
  }

  static read(reader: Read): LightClientBlockLiteView {
    return readLightClientBlockLiteView(reader);
  }
}
