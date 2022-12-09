import {
  Read,
  Write,
  Nullable,
  BigInt,
  JSON
} from "@web3api/wasm-as";
import {
  serializeNear_ReceiptWithId,
  deserializeNear_ReceiptWithId,
  writeNear_ReceiptWithId,
  readNear_ReceiptWithId
} from "./serialization";
import * as Types from "../..";

export class Near_ReceiptWithId {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  predecessor_id: string;
  receipt: Types.Near_Receipt;
  receipt_id: string;
  receiver_id: string;

  static toBuffer(type: Near_ReceiptWithId): ArrayBuffer {
    return serializeNear_ReceiptWithId(type);
  }

  static fromBuffer(buffer: ArrayBuffer): Near_ReceiptWithId {
    return deserializeNear_ReceiptWithId(buffer);
  }

  static write(writer: Write, type: Near_ReceiptWithId): void {
    writeNear_ReceiptWithId(writer, type);
  }

  static read(reader: Read): Near_ReceiptWithId {
    return readNear_ReceiptWithId(reader);
  }
}
