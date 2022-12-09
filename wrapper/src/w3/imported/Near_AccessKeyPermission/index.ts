import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_AccessKeyPermission,
  deserializeNear_AccessKeyPermission,
  writeNear_AccessKeyPermission,
  readNear_AccessKeyPermission
} from "./serialization";
import * as Types from "../..";

export class Near_AccessKeyPermission {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  _: string | null;
  receiverId: string | null;
  methodNames: Array<string> | null;
  allowance: BigInt | null;

  static toBuffer(type: Near_AccessKeyPermission): ArrayBuffer {
    return serializeNear_AccessKeyPermission(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_AccessKeyPermission {
    return deserializeNear_AccessKeyPermission(buffer);
  }

  static write(writer: Write, type: Near_AccessKeyPermission): void {
    writeNear_AccessKeyPermission(writer, type);
  }

  static read(reader: Read): Near_AccessKeyPermission {
    return readNear_AccessKeyPermission(reader);
  }
}
