import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_Receipt,
  deserializeNear_Receipt,
  writeNear_Receipt,
  readNear_Receipt
} from "./serialization";
import * as Types from "../..";

export class Near_Receipt {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  Action: Types.Near_ActionContainer;

  static toBuffer(type: Near_Receipt): ArrayBuffer {
    return serializeNear_Receipt(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_Receipt {
    return deserializeNear_Receipt(buffer);
  }

  static write(writer: Write, type: Near_Receipt): void {
    writeNear_Receipt(writer, type);
  }

  static read(reader: Read): Near_Receipt {
    return readNear_Receipt(reader);
  }
}
