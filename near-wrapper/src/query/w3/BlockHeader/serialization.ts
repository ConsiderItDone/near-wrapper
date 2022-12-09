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
import { BlockHeader } from "./";
import * as Types from "..";

export function serializeBlockHeader(type: BlockHeader): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) object-type: BlockHeader");
  const sizer = new WriteSizer(sizerContext);
  writeBlockHeader(sizer, type);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) object-type: BlockHeader");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeBlockHeader(encoder, type);
  return buffer;
}

export function writeBlockHeader(writer: Write, type: BlockHeader): void {
  writer.writeMapLength(29);
  writer.context().push("height", "BigInt", "writing property");
  writer.writeString("height");
  writer.writeBigInt(type.height);
  writer.context().pop();
  writer.context().push("epoch_id", "string", "writing property");
  writer.writeString("epoch_id");
  writer.writeString(type.epoch_id);
  writer.context().pop();
  writer.context().push("next_epoch_id", "string", "writing property");
  writer.writeString("next_epoch_id");
  writer.writeString(type.next_epoch_id);
  writer.context().pop();
  writer.context().push("hash", "string", "writing property");
  writer.writeString("hash");
  writer.writeString(type.hash);
  writer.context().pop();
  writer.context().push("prev_hash", "string", "writing property");
  writer.writeString("prev_hash");
  writer.writeString(type.prev_hash);
  writer.context().pop();
  writer.context().push("prev_state_root", "string", "writing property");
  writer.writeString("prev_state_root");
  writer.writeString(type.prev_state_root);
  writer.context().pop();
  writer.context().push("chunk_receipts_root", "string", "writing property");
  writer.writeString("chunk_receipts_root");
  writer.writeString(type.chunk_receipts_root);
  writer.context().pop();
  writer.context().push("chunk_headers_root", "string", "writing property");
  writer.writeString("chunk_headers_root");
  writer.writeString(type.chunk_headers_root);
  writer.context().pop();
  writer.context().push("chunk_tx_root", "string", "writing property");
  writer.writeString("chunk_tx_root");
  writer.writeString(type.chunk_tx_root);
  writer.context().pop();
  writer.context().push("outcome_root", "string", "writing property");
  writer.writeString("outcome_root");
  writer.writeString(type.outcome_root);
  writer.context().pop();
  writer.context().push("chunks_included", "BigInt", "writing property");
  writer.writeString("chunks_included");
  writer.writeBigInt(type.chunks_included);
  writer.context().pop();
  writer.context().push("challenges_root", "string", "writing property");
  writer.writeString("challenges_root");
  writer.writeString(type.challenges_root);
  writer.context().pop();
  writer.context().push("timestamp", "BigInt", "writing property");
  writer.writeString("timestamp");
  writer.writeBigInt(type.timestamp);
  writer.context().pop();
  writer.context().push("timestamp_nanosec", "string", "writing property");
  writer.writeString("timestamp_nanosec");
  writer.writeString(type.timestamp_nanosec);
  writer.context().pop();
  writer.context().push("random_value", "string", "writing property");
  writer.writeString("random_value");
  writer.writeString(type.random_value);
  writer.context().pop();
  writer.context().push("validator_proposals", "Array<JSON.Value>", "writing property");
  writer.writeString("validator_proposals");
  writer.writeArray(type.validator_proposals, (writer: Write, item: JSON.Value): void => {
    writer.writeJSON(item);
  });
  writer.context().pop();
  writer.context().push("chunk_mask", "Array<bool>", "writing property");
  writer.writeString("chunk_mask");
  writer.writeArray(type.chunk_mask, (writer: Write, item: bool): void => {
    writer.writeBool(item);
  });
  writer.context().pop();
  writer.context().push("gas_price", "string", "writing property");
  writer.writeString("gas_price");
  writer.writeString(type.gas_price);
  writer.context().pop();
  writer.context().push("rent_paid", "string", "writing property");
  writer.writeString("rent_paid");
  writer.writeString(type.rent_paid);
  writer.context().pop();
  writer.context().push("validator_reward", "string", "writing property");
  writer.writeString("validator_reward");
  writer.writeString(type.validator_reward);
  writer.context().pop();
  writer.context().push("total_supply", "string", "writing property");
  writer.writeString("total_supply");
  writer.writeString(type.total_supply);
  writer.context().pop();
  writer.context().push("challenges_result", "Array<JSON.Value>", "writing property");
  writer.writeString("challenges_result");
  writer.writeArray(type.challenges_result, (writer: Write, item: JSON.Value): void => {
    writer.writeJSON(item);
  });
  writer.context().pop();
  writer.context().push("last_final_block", "string", "writing property");
  writer.writeString("last_final_block");
  writer.writeString(type.last_final_block);
  writer.context().pop();
  writer.context().push("last_ds_final_block", "string", "writing property");
  writer.writeString("last_ds_final_block");
  writer.writeString(type.last_ds_final_block);
  writer.context().pop();
  writer.context().push("next_bp_hash", "string", "writing property");
  writer.writeString("next_bp_hash");
  writer.writeString(type.next_bp_hash);
  writer.context().pop();
  writer.context().push("block_merkle_root", "string", "writing property");
  writer.writeString("block_merkle_root");
  writer.writeString(type.block_merkle_root);
  writer.context().pop();
  writer.context().push("approvals", "Array<string | null>", "writing property");
  writer.writeString("approvals");
  writer.writeArray(type.approvals, (writer: Write, item: string | null): void => {
    writer.writeNullableString(item);
  });
  writer.context().pop();
  writer.context().push("signature", "string", "writing property");
  writer.writeString("signature");
  writer.writeString(type.signature);
  writer.context().pop();
  writer.context().push("latest_protocol_version", "BigInt", "writing property");
  writer.writeString("latest_protocol_version");
  writer.writeBigInt(type.latest_protocol_version);
  writer.context().pop();
}

export function deserializeBlockHeader(buffer: ArrayBuffer): BlockHeader {
  const context: Context = new Context("Deserializing object-type BlockHeader");
  const reader = new ReadDecoder(buffer, context);
  return readBlockHeader(reader);
}

export function readBlockHeader(reader: Read): BlockHeader {
  let numFields = reader.readMapLength();

  let _height: BigInt = BigInt.fromUInt16(0);
  let _heightSet: bool = false;
  let _epoch_id: string = "";
  let _epoch_idSet: bool = false;
  let _next_epoch_id: string = "";
  let _next_epoch_idSet: bool = false;
  let _hash: string = "";
  let _hashSet: bool = false;
  let _prev_hash: string = "";
  let _prev_hashSet: bool = false;
  let _prev_state_root: string = "";
  let _prev_state_rootSet: bool = false;
  let _chunk_receipts_root: string = "";
  let _chunk_receipts_rootSet: bool = false;
  let _chunk_headers_root: string = "";
  let _chunk_headers_rootSet: bool = false;
  let _chunk_tx_root: string = "";
  let _chunk_tx_rootSet: bool = false;
  let _outcome_root: string = "";
  let _outcome_rootSet: bool = false;
  let _chunks_included: BigInt = BigInt.fromUInt16(0);
  let _chunks_includedSet: bool = false;
  let _challenges_root: string = "";
  let _challenges_rootSet: bool = false;
  let _timestamp: BigInt = BigInt.fromUInt16(0);
  let _timestampSet: bool = false;
  let _timestamp_nanosec: string = "";
  let _timestamp_nanosecSet: bool = false;
  let _random_value: string = "";
  let _random_valueSet: bool = false;
  let _validator_proposals: Array<JSON.Value> = [];
  let _validator_proposalsSet: bool = false;
  let _chunk_mask: Array<bool> = [];
  let _chunk_maskSet: bool = false;
  let _gas_price: string = "";
  let _gas_priceSet: bool = false;
  let _rent_paid: string = "";
  let _rent_paidSet: bool = false;
  let _validator_reward: string = "";
  let _validator_rewardSet: bool = false;
  let _total_supply: string = "";
  let _total_supplySet: bool = false;
  let _challenges_result: Array<JSON.Value> = [];
  let _challenges_resultSet: bool = false;
  let _last_final_block: string = "";
  let _last_final_blockSet: bool = false;
  let _last_ds_final_block: string = "";
  let _last_ds_final_blockSet: bool = false;
  let _next_bp_hash: string = "";
  let _next_bp_hashSet: bool = false;
  let _block_merkle_root: string = "";
  let _block_merkle_rootSet: bool = false;
  let _approvals: Array<string | null> = [];
  let _approvalsSet: bool = false;
  let _signature: string = "";
  let _signatureSet: bool = false;
  let _latest_protocol_version: BigInt = BigInt.fromUInt16(0);
  let _latest_protocol_versionSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "height") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _height = reader.readBigInt();
      _heightSet = true;
      reader.context().pop();
    }
    else if (field == "epoch_id") {
      reader.context().push(field, "string", "type found, reading property");
      _epoch_id = reader.readString();
      _epoch_idSet = true;
      reader.context().pop();
    }
    else if (field == "next_epoch_id") {
      reader.context().push(field, "string", "type found, reading property");
      _next_epoch_id = reader.readString();
      _next_epoch_idSet = true;
      reader.context().pop();
    }
    else if (field == "hash") {
      reader.context().push(field, "string", "type found, reading property");
      _hash = reader.readString();
      _hashSet = true;
      reader.context().pop();
    }
    else if (field == "prev_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _prev_hash = reader.readString();
      _prev_hashSet = true;
      reader.context().pop();
    }
    else if (field == "prev_state_root") {
      reader.context().push(field, "string", "type found, reading property");
      _prev_state_root = reader.readString();
      _prev_state_rootSet = true;
      reader.context().pop();
    }
    else if (field == "chunk_receipts_root") {
      reader.context().push(field, "string", "type found, reading property");
      _chunk_receipts_root = reader.readString();
      _chunk_receipts_rootSet = true;
      reader.context().pop();
    }
    else if (field == "chunk_headers_root") {
      reader.context().push(field, "string", "type found, reading property");
      _chunk_headers_root = reader.readString();
      _chunk_headers_rootSet = true;
      reader.context().pop();
    }
    else if (field == "chunk_tx_root") {
      reader.context().push(field, "string", "type found, reading property");
      _chunk_tx_root = reader.readString();
      _chunk_tx_rootSet = true;
      reader.context().pop();
    }
    else if (field == "outcome_root") {
      reader.context().push(field, "string", "type found, reading property");
      _outcome_root = reader.readString();
      _outcome_rootSet = true;
      reader.context().pop();
    }
    else if (field == "chunks_included") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _chunks_included = reader.readBigInt();
      _chunks_includedSet = true;
      reader.context().pop();
    }
    else if (field == "challenges_root") {
      reader.context().push(field, "string", "type found, reading property");
      _challenges_root = reader.readString();
      _challenges_rootSet = true;
      reader.context().pop();
    }
    else if (field == "timestamp") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _timestamp = reader.readBigInt();
      _timestampSet = true;
      reader.context().pop();
    }
    else if (field == "timestamp_nanosec") {
      reader.context().push(field, "string", "type found, reading property");
      _timestamp_nanosec = reader.readString();
      _timestamp_nanosecSet = true;
      reader.context().pop();
    }
    else if (field == "random_value") {
      reader.context().push(field, "string", "type found, reading property");
      _random_value = reader.readString();
      _random_valueSet = true;
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
    else if (field == "chunk_mask") {
      reader.context().push(field, "Array<bool>", "type found, reading property");
      _chunk_mask = reader.readArray((reader: Read): bool => {
        return reader.readBool();
      });
      _chunk_maskSet = true;
      reader.context().pop();
    }
    else if (field == "gas_price") {
      reader.context().push(field, "string", "type found, reading property");
      _gas_price = reader.readString();
      _gas_priceSet = true;
      reader.context().pop();
    }
    else if (field == "rent_paid") {
      reader.context().push(field, "string", "type found, reading property");
      _rent_paid = reader.readString();
      _rent_paidSet = true;
      reader.context().pop();
    }
    else if (field == "validator_reward") {
      reader.context().push(field, "string", "type found, reading property");
      _validator_reward = reader.readString();
      _validator_rewardSet = true;
      reader.context().pop();
    }
    else if (field == "total_supply") {
      reader.context().push(field, "string", "type found, reading property");
      _total_supply = reader.readString();
      _total_supplySet = true;
      reader.context().pop();
    }
    else if (field == "challenges_result") {
      reader.context().push(field, "Array<JSON.Value>", "type found, reading property");
      _challenges_result = reader.readArray((reader: Read): JSON.Value => {
        return reader.readJSON();
      });
      _challenges_resultSet = true;
      reader.context().pop();
    }
    else if (field == "last_final_block") {
      reader.context().push(field, "string", "type found, reading property");
      _last_final_block = reader.readString();
      _last_final_blockSet = true;
      reader.context().pop();
    }
    else if (field == "last_ds_final_block") {
      reader.context().push(field, "string", "type found, reading property");
      _last_ds_final_block = reader.readString();
      _last_ds_final_blockSet = true;
      reader.context().pop();
    }
    else if (field == "next_bp_hash") {
      reader.context().push(field, "string", "type found, reading property");
      _next_bp_hash = reader.readString();
      _next_bp_hashSet = true;
      reader.context().pop();
    }
    else if (field == "block_merkle_root") {
      reader.context().push(field, "string", "type found, reading property");
      _block_merkle_root = reader.readString();
      _block_merkle_rootSet = true;
      reader.context().pop();
    }
    else if (field == "approvals") {
      reader.context().push(field, "Array<string | null>", "type found, reading property");
      _approvals = reader.readArray((reader: Read): string | null => {
        return reader.readNullableString();
      });
      _approvalsSet = true;
      reader.context().pop();
    }
    else if (field == "signature") {
      reader.context().push(field, "string", "type found, reading property");
      _signature = reader.readString();
      _signatureSet = true;
      reader.context().pop();
    }
    else if (field == "latest_protocol_version") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _latest_protocol_version = reader.readBigInt();
      _latest_protocol_versionSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_heightSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'height: BigInt'"));
  }
  if (!_epoch_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'epoch_id: String'"));
  }
  if (!_next_epoch_idSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'next_epoch_id: String'"));
  }
  if (!_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'hash: String'"));
  }
  if (!_prev_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'prev_hash: String'"));
  }
  if (!_prev_state_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'prev_state_root: String'"));
  }
  if (!_chunk_receipts_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chunk_receipts_root: String'"));
  }
  if (!_chunk_headers_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chunk_headers_root: String'"));
  }
  if (!_chunk_tx_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chunk_tx_root: String'"));
  }
  if (!_outcome_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'outcome_root: String'"));
  }
  if (!_chunks_includedSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chunks_included: BigInt'"));
  }
  if (!_challenges_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'challenges_root: String'"));
  }
  if (!_timestampSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'timestamp: BigInt'"));
  }
  if (!_timestamp_nanosecSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'timestamp_nanosec: String'"));
  }
  if (!_random_valueSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'random_value: String'"));
  }
  if (!_validator_proposalsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'validator_proposals: [JSON]'"));
  }
  if (!_chunk_maskSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'chunk_mask: [Boolean]'"));
  }
  if (!_gas_priceSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'gas_price: String'"));
  }
  if (!_rent_paidSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'rent_paid: String'"));
  }
  if (!_validator_rewardSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'validator_reward: String'"));
  }
  if (!_total_supplySet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'total_supply: String'"));
  }
  if (!_challenges_resultSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'challenges_result: [JSON]'"));
  }
  if (!_last_final_blockSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'last_final_block: String'"));
  }
  if (!_last_ds_final_blockSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'last_ds_final_block: String'"));
  }
  if (!_next_bp_hashSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'next_bp_hash: String'"));
  }
  if (!_block_merkle_rootSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'block_merkle_root: String'"));
  }
  if (!_approvalsSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'approvals: [String]'"));
  }
  if (!_signatureSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'signature: String'"));
  }
  if (!_latest_protocol_versionSet) {
    throw new Error(reader.context().printWithContext("Missing required property: 'latest_protocol_version: BigInt'"));
  }

  return {
    height: _height,
    epoch_id: _epoch_id,
    next_epoch_id: _next_epoch_id,
    hash: _hash,
    prev_hash: _prev_hash,
    prev_state_root: _prev_state_root,
    chunk_receipts_root: _chunk_receipts_root,
    chunk_headers_root: _chunk_headers_root,
    chunk_tx_root: _chunk_tx_root,
    outcome_root: _outcome_root,
    chunks_included: _chunks_included,
    challenges_root: _challenges_root,
    timestamp: _timestamp,
    timestamp_nanosec: _timestamp_nanosec,
    random_value: _random_value,
    validator_proposals: _validator_proposals,
    chunk_mask: _chunk_mask,
    gas_price: _gas_price,
    rent_paid: _rent_paid,
    validator_reward: _validator_reward,
    total_supply: _total_supply,
    challenges_result: _challenges_result,
    last_final_block: _last_final_block,
    last_ds_final_block: _last_ds_final_block,
    next_bp_hash: _next_bp_hash,
    block_merkle_root: _block_merkle_root,
    approvals: _approvals,
    signature: _signature,
    latest_protocol_version: _latest_protocol_version
  };
}
