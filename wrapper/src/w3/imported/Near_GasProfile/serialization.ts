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
import { Near_GasProfile } from "./";
import * as Types from "../..";

export function serializeNear_GasProfile(type: Near_GasProfile): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_GasProfile");
  const sizer = new WriteSizer(sizerContext);
  writeNear_GasProfile(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_GasProfile");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_GasProfile(encoder, type);
  return buffer;
}

export function writeNear_GasProfile(writer: Write, type: Near_GasProfile): void {
  writer.writeMapLength(3);
  writer.context().push("cost", "string", "writing property");
  writer.writeString("cost");
  writer.writeString(type.cost);
  writer.context().pop();
  writer.context().push("cost_category", "string", "writing property");
  writer.writeString("cost_category");
  writer.writeString(type.cost_category);
  writer.context().pop();
  writer.context().push("gas_used", "string", "writing property");
  writer.writeString("gas_used");
  writer.writeString(type.gas_used);
  writer.context().pop();
}

export function deserializeNear_GasProfile(buffer: ArrayBuffer): Near_GasProfile {
  const context: Context = new Context("Deserializing imported object-type Near_GasProfile");
  const reader = new ReadDecoder(buffer, context);
  return readNear_GasProfile(reader);
}

export function readNear_GasProfile(reader: Read): Near_GasProfile {
  let numFields = reader.readMapLength();

  let _cost: string = "";
  let _costSet: bool = false;
  let _cost_category: string = "";
  let _cost_categorySet: bool = false;
  let _gas_used: string = "";
  let _gas_usedSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "cost") {
      reader.context().push(field, "string", "type found, reading property");
      _cost = reader.readString();
      _costSet = true;
      reader.context().pop();
    }
    else if (field == "cost_category") {
      reader.context().push(field, "string", "type found, reading property");
      _cost_category = reader.readString();
      _cost_categorySet = true;
      reader.context().pop();
    }
    else if (field == "gas_used") {
      reader.context().push(field, "string", "type found, reading property");
      _gas_used = reader.readString();
      _gas_usedSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_costSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'cost: String'"));
  }
  if (!_cost_categorySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'cost_category: String'"));
  }
  if (!_gas_usedSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'gas_used: String'"));
  }

  return {
    cost: _cost,
    cost_category: _cost_category,
    gas_used: _gas_used
  };
}
