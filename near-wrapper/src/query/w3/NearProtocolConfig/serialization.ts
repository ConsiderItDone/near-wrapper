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
import { NearProtocolConfig } from "./";
import * as Types from "..";

export function serializeNearProtocolConfig(type: NearProtocolConfig): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: NearProtocolConfig");
  const sizer = new WriteSizer(sizerContext);
  writeNearProtocolConfig(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: NearProtocolConfig");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNearProtocolConfig(encoder, type);
  return buffer;
}

export function writeNearProtocolConfig(writer: Write, type: NearProtocolConfig): void {
  writer.writeMapLength(1);
  writer.context().push("runtime_config", "Types.NearProtocolRuntimeConfig", "writing property");
  writer.writeString("runtime_config");
  Types.NearProtocolRuntimeConfig.write(writer, type.runtime_config);
  writer.context().pop();
}

export function deserializeNearProtocolConfig(buffer: ArrayBuffer): NearProtocolConfig {
  const context: Context = new Context("Deserializing object-type NearProtocolConfig");
  const reader = new ReadDecoder(buffer, context);
  return readNearProtocolConfig(reader);
}

export function readNearProtocolConfig(reader: Read): NearProtocolConfig {
  let numFields = reader.readMapLength();

  let _runtime_config: Types.NearProtocolRuntimeConfig | null = null;
  let _runtime_configSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "runtime_config") {
      reader.context().push(field, "Types.NearProtocolRuntimeConfig", "type found, reading property");
      const object = Types.NearProtocolRuntimeConfig.read(reader);
      _runtime_config = object;
      _runtime_configSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_runtime_config || !_runtime_configSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'runtime_config: NearProtocolRuntimeConfig'"));
  }

  return {
    runtime_config: _runtime_config
  };
}
