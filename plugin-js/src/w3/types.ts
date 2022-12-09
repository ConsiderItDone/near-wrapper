// @ts-noCheck
import * as Types from "./";

import {
  Client,
  InvokeApiResult
} from "@web3api/core-js";

export type UInt = number;
export type UInt8 = number;
export type UInt16 = number;
export type UInt32 = number;
export type Int = number;
export type Int8 = number;
export type Int16 = number;
export type Int32 = number;
export type Bytes = Uint8Array;
export type BigInt = string;
export type Json = string;
export type String = string;
export type Boolean = boolean;

export interface PublicKey {
  keyType: Types.KeyType;
  data: Bytes;
}

export interface AccessKeyPermission {
  _?: String | null;
  receiverId?: String | null;
  methodNames?: Array<String> | null;
  allowance?: BigInt | null;
}

export interface FullAccessPermission {
  _: String;
}

export interface FunctionCallPermission {
  receiverId: String;
  methodNames: Array<String>;
  allowance?: BigInt | null;
}

export interface AccessKey {
  nonce: BigInt;
  permission: Types.AccessKeyPermission;
}

export interface AccessKeyInfo {
  publicKey: Types.PublicKey;
  accessKey: Types.AccessKey;
}

export interface Action {
  code?: Bytes | null;
  methodName?: String | null;
  args?: Bytes | null;
  gas?: BigInt | null;
  deposit?: BigInt | null;
  stake?: BigInt | null;
  publicKey?: Types.PublicKey | null;
  accessKey?: Types.AccessKey | null;
  beneficiaryId?: String | null;
}

export interface FunctionCall {
  code?: Bytes | null;
  methodName?: String | null;
  args?: Bytes | null;
  gas?: BigInt | null;
  deposit?: BigInt | null;
  stake?: BigInt | null;
  publicKey?: Types.PublicKey | null;
  accessKey?: Types.AccessKey | null;
  beneficiaryId?: String | null;
}

export interface Stake {
  code?: Bytes | null;
  methodName?: String | null;
  args?: Bytes | null;
  gas?: BigInt | null;
  deposit?: BigInt | null;
  stake?: BigInt | null;
  publicKey?: Types.PublicKey | null;
  accessKey?: Types.AccessKey | null;
  beneficiaryId?: String | null;
}

export interface DeleteKey {
  code?: Bytes | null;
  methodName?: String | null;
  args?: Bytes | null;
  gas?: BigInt | null;
  deposit?: BigInt | null;
  stake?: BigInt | null;
  publicKey?: Types.PublicKey | null;
  accessKey?: Types.AccessKey | null;
  beneficiaryId?: String | null;
}

export interface DeleteAccount {
  code?: Bytes | null;
  methodName?: String | null;
  args?: Bytes | null;
  gas?: BigInt | null;
  deposit?: BigInt | null;
  stake?: BigInt | null;
  publicKey?: Types.PublicKey | null;
  accessKey?: Types.AccessKey | null;
  beneficiaryId?: String | null;
}

export interface CreateAccount {
}

export interface AddKey {
  publicKey: Types.PublicKey;
  accessKey: Types.AccessKey;
}

export interface DeployContract {
  code: Bytes;
}

export interface Transfer {
  deposit: BigInt;
}

export interface Transaction {
  signerId: String;
  publicKey: Types.PublicKey;
  nonce: BigInt;
  receiverId: String;
  actions: Array<Types.Action>;
  blockHash?: Bytes | null;
  hash?: String | null;
}

export interface Signature {
  keyType: Types.KeyType;
  data: Bytes;
}

export interface SignedTransaction {
  transaction: Types.Transaction;
  signature: Types.Signature;
}

export interface SignTransactionResult {
  hash: Bytes;
  signedTx: Types.SignedTransaction;
}

export interface ExecutionStatus {
  SuccessValue?: String | null;
  SuccessReceiptId?: String | null;
  failure?: Json | null;
}

export interface ExecutionOutcomeWithId {
  block_hash?: String | null;
  id: String;
  outcome: Types.ExecutionOutcome;
  proof?: Array<Types.ExecutionProof> | null;
}

export interface ExecutionProof {
  direction: String;
  hash: String;
}

export interface ExecutionOutcome {
  executor_id?: String | null;
  gas_burnt: BigInt;
  logs?: Array<String> | null;
  metadata?: Types.OutcomeMetaData | null;
  receipt_ids: Array<String>;
  status: Types.ExecutionStatus;
  tokens_burnt?: String | null;
}

export interface OutcomeMetaData {
  gas_profile: Array<Types.GasProfile | null>;
  version: UInt;
}

export interface GasProfile {
  cost: String;
  cost_category: String;
  gas_used: String;
}

export interface FinalExecutionOutcome {
  status: Types.ExecutionStatus;
  transaction: Types.Transaction;
  transaction_outcome: Types.ExecutionOutcomeWithId;
  receipts_outcome: Array<Types.ExecutionOutcomeWithId>;
}

export interface FinalExecutionOutcomeWithReceipts {
  status: Types.ExecutionStatus;
  transaction: Types.Transaction;
  transaction_outcome: Types.ExecutionOutcomeWithId;
  receipts_outcome: Array<Types.ExecutionOutcomeWithId>;
  receipts: Array<Types.ReceiptWithId>;
}

export interface ReceiptWithId {
  predecessor_id: String;
  receipt: Types.Receipt;
  receipt_id: String;
  receiver_id: String;
}

export interface Receipt {
  Action: Types.ActionContainer;
}

export interface ActionContainer {
  actions: Array<Types.Action>;
}

export enum KeyTypeEnum {
  ED25519,
}

export type KeyTypeString =
  | "ED25519"

export type KeyType = KeyTypeEnum | KeyTypeString;

