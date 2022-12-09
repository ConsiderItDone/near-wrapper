import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeVersion,
  deserializeVersion,
  writeVersion,
  readVersion
} from "./serialization";
import * as Types from "..";

export class Version {
  version: string;
  build: string;

  static toBuffer(type: Version): ArrayBuffer {
    return serializeVersion(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Version {
    return deserializeVersion(buffer);
  }

  static write(writer: Write, type: Version): void {
    writeVersion(writer, type);
  }

  static read(reader: Read): Version {
    return readVersion(reader);
  }
}
