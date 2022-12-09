import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_Action,
  deserializeNear_Action,
  writeNear_Action,
  readNear_Action
} from "./serialization";
import * as Types from "../..";

export class Near_Action {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  code: ArrayBuffer | null;
  methodName: string | null;
  args: ArrayBuffer | null;
  gas: BigInt | null;
  deposit: BigInt | null;
  stake: BigInt | null;
  publicKey: Types.Near_PublicKey | null;
  accessKey: Types.Near_AccessKey | null;
  beneficiaryId: string | null;

  static toBuffer(type: Near_Action): ArrayBuffer {
    return serializeNear_Action(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_Action {
    return deserializeNear_Action(buffer);
  }

  static write(writer: Write, type: Near_Action): void {
    writeNear_Action(writer, type);
  }

  static read(reader: Read): Near_Action {
    return readNear_Action(reader);
  }
}