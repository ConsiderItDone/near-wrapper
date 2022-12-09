import {
  Read,
  ReadDecoder,
  Write,
  WriteSizer,
  WriteEncoder,
  Nullable,
  BigInt,
  JSON,
  Context
} from "@web3api/wasm-as";
import { Near_Receipt } from "./";
import * as Types from "../..";

export function serializeNear_Receipt(type: Near_Receipt): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_Receipt");
  const sizer = new WriteSizer(sizerContext);
  writeNear_Receipt(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_Receipt");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_Receipt(encoder, type);
  return buffer;
}

export function writeNear_Receipt(writer: Write, type: Near_Receipt): void {
  writer.writeMapLength(1);
  writer.context().push("Action", "Types.Near_ActionContainer", "writing property");
  writer.writeString("Action");
  Types.Near_ActionContainer.write(writer, type.Action);
  writer.context().pop();
}

export function deserializeNear_Receipt(buffer: ArrayBuffer): Near_Receipt {
  const context: Context = new Context("Deserializing imported object-type Near_Receipt");
  const reader = new ReadDecoder(buffer, context);
  return readNear_Receipt(reader);
}

export function readNear_Receipt(reader: Read): Near_Receipt {
  let numFields = reader.readMapLength();

  let _Action: Types.Near_ActionContainer | null = null;
  let _ActionSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "Action") {
      reader.context().push(field, "Types.Near_ActionContainer", "type found, reading property");
      const object = Types.Near_ActionContainer.read(reader);
      _Action = object;
      _ActionSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_Action || !_ActionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'Action: Near_ActionContainer'"));
  }

  return {
    Action: _Action
  };
}
