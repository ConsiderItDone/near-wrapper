import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeContractStateResult,
  deserializeContractStateResult,
  writeContractStateResult,
  readContractStateResult
} from "./serialization";
import * as Types from "..";

export class ContractStateResult {
  values: Array<Types.KeyValuePair>;

  static toBuffer(type: ContractStateResult): ArrayBuffer {
    return serializeContractStateResult(type);
  }

  static fromBuffer(buffer: ArrayBuffer): ContractStateResult {
    return deserializeContractStateResult(buffer);
  }

  static write(writer: Write, type: ContractStateResult): void {
    writeContractStateResult(writer, type);
  }

  static read(reader: Read): ContractStateResult {
    return readContractStateResult(reader);
  }
}
