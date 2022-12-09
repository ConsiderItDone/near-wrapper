import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_GasProfile,
  deserializeNear_GasProfile,
  writeNear_GasProfile,
  readNear_GasProfile
} from "./serialization";
import * as Types from "../..";

export class Near_GasProfile {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  cost: string;
  cost_category: string;
  gas_used: string;

  static toBuffer(type: Near_GasProfile): ArrayBuffer {
    return serializeNear_GasProfile(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_GasProfile {
    return deserializeNear_GasProfile(buffer);
  }

  static write(writer: Write, type: Near_GasProfile): void {
    writeNear_GasProfile(writer, type);
  }

  static read(reader: Read): Near_GasProfile {
    return readNear_GasProfile(reader);
  }
}
