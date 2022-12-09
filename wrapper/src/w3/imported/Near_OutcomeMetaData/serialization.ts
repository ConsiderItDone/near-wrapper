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
import { Near_OutcomeMetaData } from "./";
import * as Types from "../..";

export function serializeNear_OutcomeMetaData(type: Near_OutcomeMetaData): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing)  imported object-type: Near_OutcomeMetaData");
  const sizer = new WriteSizer(sizerContext);
  writeNear_OutcomeMetaData(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) import object-type: Near_OutcomeMetaData");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNear_OutcomeMetaData(encoder, type);
  return buffer;
}

export function writeNear_OutcomeMetaData(writer: Write, type: Near_OutcomeMetaData): void {
  writer.writeMapLength(2);
  writer.context().push("gas_profile", "Array<Types.Near_GasProfile | null>", "writing property");
  writer.writeString("gas_profile");
  writer.writeArray(type.gas_profile, (writer: Write, item: Types.Near_GasProfile | null): void => {
    if (item) {
      Types.Near_GasProfile.write(writer, item as Types.Near_GasProfile);
    } else {
      writer.writeNil();
    }
  });
  writer.context().pop();
  writer.context().push("version", "u32", "writing property");
  writer.writeString("version");
  writer.writeUInt32(type.version);
  writer.context().pop();
}

export function deserializeNear_OutcomeMetaData(buffer: ArrayBuffer): Near_OutcomeMetaData {
  const context: Context = new Context("Deserializing imported object-type Near_OutcomeMetaData");
  const reader = new ReadDecoder(buffer, context);
  return readNear_OutcomeMetaData(reader);
}

export function readNear_OutcomeMetaData(reader: Read): Near_OutcomeMetaData {
  let numFields = reader.readMapLength();

  let _gas_profile: Array<Types.Near_GasProfile | null> = [];
  let _gas_profileSet: bool = false;
  let _version: u32 = 0;
  let _versionSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "gas_profile") {
      reader.context().push(field, "Array<Types.Near_GasProfile | null>", "type found, reading property");
      _gas_profile = reader.readArray((reader: Read): Types.Near_GasProfile | null => {
        let object: Types.Near_GasProfile | null = null;
        if (!reader.isNextNil()) {
          object = Types.Near_GasProfile.read(reader);
        }
        return object;
      });
      _gas_profileSet = true;
      reader.context().pop();
    }
    else if (field == "version") {
      reader.context().push(field, "u32", "type found, reading property");
      _version = reader.readUInt32();
      _versionSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_gas_profileSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'gas_profile: [Near_GasProfile]'"));
  }
  if (!_versionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'version: UInt'"));
  }

  return {
    gas_profile: _gas_profile,
    version: _version
  };
}
