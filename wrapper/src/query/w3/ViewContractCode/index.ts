import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeViewContractCode,
  deserializeViewContractCode,
  writeViewContractCode,
  readViewContractCode
} from "./serialization";
import * as Types from "..";

export class ViewContractCode {
  code_base64: string;
  hash: string;
  block_height: BigInt;
  block_hash: string;

  static toBuffer(type: ViewContractCode): ArrayBuffer {
    return serializeViewContractCode(type);
  }

  static fromBuffer(buffer: ArrayBuffer): ViewContractCode {
    return deserializeViewContractCode(buffer);
  }

  static write(writer: Write, type: ViewContractCode): void {
    writeViewContractCode(writer, type);
  }

  static read(reader: Read): ViewContractCode {
    return readViewContractCode(reader);
  }
}
