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
import { Near_ActionContainer } from "./";
import * as Types from "../..";

export function serializeNear_ActionContainer(type: Near_ActionContainer): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_ActionContainer");
  const sizer = new WriteSizer(sizerContext);
  writeNear_ActionContainer(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_ActionContainer");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_ActionContainer(encoder, type);
  return buffer;
}

export function writeNear_ActionContainer(writer: Write, type: Near_ActionContainer): void {
  writer.writeMapLength(1);
  writer.context().push("actions", "Array<Types.Near_Action>", "writing property");
  writer.writeString("actions");
  writer.writeArray(type.actions, (writer: Write, item: Types.Near_Action): void => {
    Types.Near_Action.write(writer, item);
  });
  writer.context().pop();
}

export function deserializeNear_ActionContainer(buffer: ArrayBuffer): Near_ActionContainer {
  const context: Context = new Context("Deserializing imported object-type Near_ActionContainer");
  const reader = new ReadDecoder(buffer, context);
  return readNear_ActionContainer(reader);
}

export function readNear_ActionContainer(reader: Read): Near_ActionContainer {
  let numFields = reader.readMapLength();

  let _actions: Array<Types.Near_Action> = [];
  let _actionsSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "actions") {
      reader.context().push(field, "Array<Types.Near_Action>", "type found, reading property");
      _actions = reader.readArray((reader: Read): Types.Near_Action => {
        const object = Types.Near_Action.read(reader);
        return object;
      });
      _actionsSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_actionsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'actions: [Near_Action]'"));
  }

  return {
    actions: _actions
  };
}
