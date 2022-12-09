import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_ActionContainer,
  deserializeNear_ActionContainer,
  writeNear_ActionContainer,
  readNear_ActionContainer
} from "./serialization";
import * as Types from "../..";

export class Near_ActionContainer {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  actions: Array<Types.Near_Action>;

  static toBuffer(type: Near_ActionContainer): ArrayBuffer {
    return serializeNear_ActionContainer(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_ActionContainer {
    return deserializeNear_ActionContainer(buffer);
  }

  static write(writer: Write, type: Near_ActionContainer): void {
    writeNear_ActionContainer(writer, type);
  }

  static read(reader: Read): Near_ActionContainer {
    return readNear_ActionContainer(reader);
  }
}
