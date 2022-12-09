import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_OutcomeMetaData,
  deserializeNear_OutcomeMetaData,
  writeNear_OutcomeMetaData,
  readNear_OutcomeMetaData
} from "./serialization";
import * as Types from "../..";

export class Near_OutcomeMetaData {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  gas_profile: Array<Types.Near_GasProfile | null>;
  version: u32;

  static toBuffer(type: Near_OutcomeMetaData): ArrayBuffer {
    return serializeNear_OutcomeMetaData(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_OutcomeMetaData {
    return deserializeNear_OutcomeMetaData(buffer);
  }

  static write(writer: Write, type: Near_OutcomeMetaData): void {
    writeNear_OutcomeMetaData(writer, type);
  }

  static read(reader: Read): Near_OutcomeMetaData {
    return readNear_OutcomeMetaData(reader);
  }
}
