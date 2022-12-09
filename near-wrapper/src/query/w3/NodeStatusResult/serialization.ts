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
import { NodeStatusResult } from "./";
import * as Types from "..";

export function serializeNodeStatusResult(type: NodeStatusResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: NodeStatusResult");
  const sizer = new WriteSizer(sizerContext);
  writeNodeStatusResult(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: NodeStatusResult");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeNodeStatusResult(encoder, type);
  return buffer;
}

export function writeNodeStatusResult(writer: Write, type: NodeStatusResult): void {
  writer.writeMapLength(5);
  writer.context().push("chain_id", "string", "writing property");
  writer.writeString("chain_id");
  writer.writeString(type.chain_id);
  writer.context().pop();
  writer.context().push("rpc_addr", "string", "writing property");
  writer.writeString("rpc_addr");
  writer.writeString(type.rpc_addr);
  writer.context().pop();
  writer.context().push("sync_info", "Types.SyncInfo", "writing property");
  writer.writeString("sync_info");
  Types.SyncInfo.write(writer, type.sync_info);
  writer.context().pop();
  writer.context().push("validators", "Array<string>", "writing property");
  writer.writeString("validators");
  writer.writeArray(type.validators, (writer: Write, item: string): void => {
    writer.writeString(item);
  });
  writer.context().pop();
  writer.context().push("version", "Types.Version", "writing property");
  writer.writeString("version");
  Types.Version.write(writer, type.version);
  writer.context().pop();
}

export function deserializeNodeStatusResult(buffer: ArrayBuffer): NodeStatusResult {
  const context: Context = new Context("Deserializing object-type NodeStatusResult");
  const reader = new ReadDecoder(buffer, context);
  return readNodeStatusResult(reader);
}

export function readNodeStatusResult(reader: Read): NodeStatusResult {
  let numFields = reader.readMapLength();

  let _chain_id: string = "";
  let _chain_idSet: bool = false;
  let _rpc_addr: string = "";
  let _rpc_addrSet: bool = false;
  let _sync_info: Types.SyncInfo | null = null;
  let _sync_infoSet: bool = false;
  let _validators: Array<string> = [];
  let _validatorsSet: bool = false;
  let _version: Types.Version | null = null;
  let _versionSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "chain_id") {
      reader.context().push(field, "string", "type found, reading property");
      _chain_id = reader.readString();
      _chain_idSet = true;
      reader.context().pop();
    }
    else if (field == "rpc_addr") {
      reader.context().push(field, "string", "type found, reading property");
      _rpc_addr = reader.readString();
      _rpc_addrSet = true;
      reader.context().pop();
    }
    else if (field == "sync_info") {
      reader.context().push(field, "Types.SyncInfo", "type found, reading property");
      const object = Types.SyncInfo.read(reader);
      _sync_info = object;
      _sync_infoSet = true;
      reader.context().pop();
    }
    else if (field == "validators") {
      reader.context().push(field, "Array<string>", "type found, reading property");
      _validators = reader.readArray((reader: Read): string => {
        return reader.readString();
      });
      _validatorsSet = true;
      reader.context().pop();
    }
    else if (field == "version") {
      reader.context().push(field, "Types.Version", "type found, reading property");
      const object = Types.Version.read(reader);
      _version = object;
      _versionSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_chain_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chain_id: String'"));
  }
  if (!_rpc_addrSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'rpc_addr: String'"));
  }
  if (!_sync_info || !_sync_infoSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'sync_info: SyncInfo'"));
  }
  if (!_validatorsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'validators: [String]'"));
  }
  if (!_version || !_versionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'version: Version'"));
  }

  return {
    chain_id: _chain_id,
    rpc_addr: _rpc_addr,
    sync_info: _sync_info,
    validators: _validators,
    version: _version
  };
}
