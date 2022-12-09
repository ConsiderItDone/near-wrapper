import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_AccessKey,
  deserializeNear_AccessKey,
  writeNear_AccessKey,
  readNear_AccessKey
} from "./serialization";
import * as Types from "../..";

export class Near_AccessKey {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  nonce: BigInt;
  permission: Types.Near_AccessKeyPermission;

  static toBuffer(type: Near_AccessKey): ArrayBuffer {
    return serializeNear_AccessKey(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_AccessKey {
    return deserializeNear_AccessKey(buffer);
  }

  static write(writer: Write, type: Near_AccessKey): void {
    writeNear_AccessKey(writer, type);
  }

  static read(reader: Read): Near_AccessKey {
    return readNear_AccessKey(reader);
  }
}
