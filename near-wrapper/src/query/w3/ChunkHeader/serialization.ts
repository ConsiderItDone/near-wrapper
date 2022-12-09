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
import { ChunkHeader } from "./";
import * as Types from "..";

export function serializeChunkHeader(type: ChunkHeader): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: ChunkHeader");
  const sizer = new WriteSizer(sizerContext);
  writeChunkHeader(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: ChunkHeader");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeChunkHeader(encoder, type);
  return buffer;
}

export function writeChunkHeader(writer: Write, type: ChunkHeader): void {
  writer.writeMapLength(17);
  writer.context().push("balance_burnt", "string", "writing property");
  writer.writeString("balance_burnt");
  writer.writeString(type.balance_burnt);
  writer.context().pop();
  writer.context().push("chunk_hash", "string", "writing property");
  writer.writeString("chunk_hash");
  writer.writeString(type.chunk_hash);
  writer.context().pop();
  writer.context().push("encoded_length", "BigInt", "writing property");
  writer.writeString("encoded_length");
  writer.writeBigInt(type.encoded_length);
  writer.context().pop();
  writer.context().push("encoded_merkle_root", "string", "writing property");
  writer.writeString("encoded_merkle_root");
  writer.writeString(type.encoded_merkle_root);
  writer.context().pop();
  writer.context().push("gas_limit", "BigInt", "writing property");
  writer.writeString("gas_limit");
  writer.writeBigInt(type.gas_limit);
  writer.context().pop();
  writer.context().push("gas_used", "string", "writing property");
  writer.writeString("gas_used");
  writer.writeString(type.gas_used);
  writer.context().pop();
  writer.context().push("height_created", "BigInt", "writing property");
  writer.writeString("height_created");
  writer.writeBigInt(type.height_created);
  writer.context().pop();
  writer.context().push("height_included", "BigInt", "writing property");
  writer.writeString("height_included");
  writer.writeBigInt(type.height_included);
  writer.context().pop();
  writer.context().push("outgoing_receipts_root", "string", "writing property");
  writer.writeString("outgoing_receipts_root");
  writer.writeString(type.outgoing_receipts_root);
  writer.context().pop();
  writer.context().push("prev_block_hash", "string", "writing property");
  writer.writeString("prev_block_hash");
  writer.writeString(type.prev_block_hash);
  writer.context().pop();
  writer.context().push("prev_state_root", "string", "writing property");
  writer.writeString("prev_state_root");
  writer.writeString(type.prev_state_root);
  writer.context().pop();
  writer.context().push("rent_paid", "string", "writing property");
  writer.writeString("rent_paid");
  writer.writeString(type.rent_paid);
  writer.context().pop();
  writer.context().push("shard_id", "BigInt", "writing property");
  writer.writeString("shard_id");
  writer.writeBigInt(type.shard_id);
  writer.context().pop();
  writer.context().push("signature", "string", "writing property");
  writer.writeString("signature");
  writer.writeString(type.signature);
  writer.context().pop();
  writer.context().push("tx_root", "string", "writing property");
  writer.writeString("tx_root");
  writer.writeString(type.tx_root);
  writer.context().pop();
  writer.context().push("validator_proposals", "Array<JSON.Value>", "writing property");
  writer.writeString("validator_proposals");
  writer.writeArray(type.validator_proposals, (writer: Write, item: JSON.Value): void => {
    writer.writeJSON(item);
  });
  writer.context().pop();
  writer.context().push("validator_reward", "string", "writing property");
  writer.writeString("validator_reward");
  writer.writeString(type.validator_reward);
  writer.context().pop();
}

export function deserializeChunkHeader(buffer: ArrayBuffer): ChunkHeader {
  const context: Context = new Context("Deserializing object-type ChunkHeader");
  const reader = new ReadDecoder(buffer, context);
  return readChunkHeader(reader);
}

export function readChunkHeader(reader: Read): ChunkHeader {
  let numFields = reader.readMapLength();

  let _balance_burnt: string = "";
  let _balance_burntSet: bool = false;
  let _chunk_hash: string = "";
  let _chunk_hashSet: bool = false;
  let _encoded_length: BigInt = BigInt.fromUInt16(0);
  let _encoded_lengthSet: bool = false;
  let _encoded_merkle_root: string = "";
  let _encoded_merkle_rootSet: bool = false;
  let _gas_limit: BigInt = BigInt.fromUInt16(0);
  let _gas_limitSet: bool = false;
  let _gas_used: string = "";
  let _gas_usedSet: bool = false;
  let _height_created: BigInt = BigInt.fromUInt16(0);
  let _height_createdSet: bool = false;
  let _height_included: BigInt = BigInt.fromUInt16(0);
  let _height_includedSet: bool = false;
  let _outgoing_receipts_root: string = "";
  let _outgoing_receipts_rootSet: bool = false;
  let _prev_block_hash: string = "";
  let _prev_block_hashSet: bool = false;
  let _prev_state_root: string = "";
  let _prev_state_rootSet: bool = false;
  let _rent_paid: string = "";
  let _rent_paidSet: bool = false;
  let _shard_id: BigInt = BigInt.fromUInt16(0);
  let _shard_idSet: bool = false;
  let _signature: string = "";
  let _signatureSet: bool = false;
  let _tx_root: string = "";
  let _tx_rootSet: bool = false;
  let _validator_proposals: Array<JSON.Value> = [];
  let _validator_proposalsSet: bool = false;
  let _validator_reward: string = "";
  let _validator_rewardSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "balance_burnt") {
      reader.context().push(field, "string", "type found, reading property");
      _balance_burnt = reader.readString();
      _balance_burntSet = true;
      reader.context().pop();
    }
    else if (field == "chunk_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _chunk_hash = reader.readString();
      _chunk_hashSet = true;
      reader.context().pop();
    }
    else if (field == "encoded_length") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _encoded_length = reader.readBigInt();
      _encoded_lengthSet = true;
      reader.context().pop();
    }
    else if (field == "encoded_merkle_root") {
      reader.context().push(field, "string", "type found, reading property");
      _encoded_merkle_root = reader.readString();
      _encoded_merkle_rootSet = true;
      reader.context().pop();
    }
    else if (field == "gas_limit") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _gas_limit = reader.readBigInt();
      _gas_limitSet = true;
      reader.context().pop();
    }
    else if (field == "gas_used") {
      reader.context().push(field, "string", "type found, reading property");
      _gas_used = reader.readString();
      _gas_usedSet = true;
      reader.context().pop();
    }
    else if (field == "height_created") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _height_created = reader.readBigInt();
      _height_createdSet = true;
      reader.context().pop();
    }
    else if (field == "height_included") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _height_included = reader.readBigInt();
      _height_includedSet = true;
      reader.context().pop();
    }
    else if (field == "outgoing_receipts_root") {
      reader.context().push(field, "string", "type found, reading property");
      _outgoing_receipts_root = reader.readString();
      _outgoing_receipts_rootSet = true;
      reader.context().pop();
    }
    else if (field == "prev_block_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _prev_block_hash = reader.readString();
      _prev_block_hashSet = true;
      reader.context().pop();
    }
    else if (field == "prev_state_root") {
      reader.context().push(field, "string", "type found, reading property");
      _prev_state_root = reader.readString();
      _prev_state_rootSet = true;
      reader.context().pop();
    }
    else if (field == "rent_paid") {
      reader.context().push(field, "string", "type found, reading property");
      _rent_paid = reader.readString();
      _rent_paidSet = true;
      reader.context().pop();
    }
    else if (field == "shard_id") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _shard_id = reader.readBigInt();
      _shard_idSet = true;
      reader.context().pop();
    }
    else if (field == "signature") {
      reader.context().push(field, "string", "type found, reading property");
      _signature = reader.readString();
      _signatureSet = true;
      reader.context().pop();
    }
    else if (field == "tx_root") {
      reader.context().push(field, "string", "type found, reading property");
      _tx_root = reader.readString();
      _tx_rootSet = true;
      reader.context().pop();
    }
    else if (field == "validator_proposals") {
      reader.context().push(field, "Array<JSON.Value>", "type found, reading property");
      _validator_proposals = reader.readArray((reader: Read): JSON.Value => {
        return reader.readJSON();
      });
      _validator_proposalsSet = true;
      reader.context().pop();
    }
    else if (field == "validator_reward") {
      reader.context().push(field, "string", "type found, reading property");
      _validator_reward = reader.readString();
      _validator_rewardSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_balance_burntSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'balance_burnt: String'"));
  }
  if (!_chunk_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chunk_hash: String'"));
  }
  if (!_encoded_lengthSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'encoded_length: BigInt'"));
  }
  if (!_encoded_merkle_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'encoded_merkle_root: String'"));
  }
  if (!_gas_limitSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'gas_limit: BigInt'"));
  }
  if (!_gas_usedSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'gas_used: String'"));
  }
  if (!_height_createdSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'height_created: BigInt'"));
  }
  if (!_height_includedSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'height_included: BigInt'"));
  }
  if (!_outgoing_receipts_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'outgoing_receipts_root: String'"));
  }
  if (!_prev_block_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'prev_block_hash: String'"));
  }
  if (!_prev_state_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'prev_state_root: String'"));
  }
  if (!_rent_paidSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'rent_paid: String'"));
  }
  if (!_shard_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'shard_id: BigInt'"));
  }
  if (!_signatureSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'signature: String'"));
  }
  if (!_tx_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'tx_root: String'"));
  }
  if (!_validator_proposalsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'validator_proposals: [JSON]'"));
  }
  if (!_validator_rewardSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'validator_reward: String'"));
  }

  return {
    balance_burnt: _balance_burnt,
    chunk_hash: _chunk_hash,
    encoded_length: _encoded_length,
    encoded_merkle_root: _encoded_merkle_root,
    gas_limit: _gas_limit,
    gas_used: _gas_used,
    height_created: _height_created,
    height_included: _height_included,
    outgoing_receipts_root: _outgoing_receipts_root,
    prev_block_hash: _prev_block_hash,
    prev_state_root: _prev_state_root,
    rent_paid: _rent_paid,
    shard_id: _shard_id,
    signature: _signature,
    tx_root: _tx_root,
    validator_proposals: _validator_proposals,
    validator_reward: _validator_reward
  };
}
