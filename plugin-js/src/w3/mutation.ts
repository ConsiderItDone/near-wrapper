// @ts-noCheck
import {
  UInt,
  UInt8,
  UInt16,
  UInt32,
  Int,
  Int8,
  Int16,
  Int32,
  Bytes,
  BigInt,
  Json,
  String,
  Boolean
} from "./types";
import * as Types from "./types";

import {
  Client,
  PluginModule,
  MaybeAsync
} from "@web3api/core-js";

export interface Input_sendJsonRpc extends Record<string, unknown> {
  method: String;
  params: Json;
}

export interface Input_requestSignTransactions extends Record<string, unknown> {
  transactions: Array<Types.Transaction>;
  callbackUrl?: String | null;
  meta?: String | null;
}

export interface Input_createKey extends Record<string, unknown> {
  accountId: String;
  networkId: String;
}

export interface Input_sendTransaction extends Record<string, unknown> {
  signedTx: Types.SignedTransaction;
}

export interface Input_sendTransactionAsync extends Record<string, unknown> {
  signedTx: Types.SignedTransaction;
}

export interface Module extends PluginModule {
  sendJsonRpc(
    input: Input_sendJsonRpc,
    client: Client
  ): MaybeAsync<Json>;

  requestSignTransactions(
    input: Input_requestSignTransactions,
    client: Client
  ): MaybeAsync<Boolean>;

  createKey(
    input: Input_createKey,
    client: Client
  ): MaybeAsync<Types.PublicKey>;

  sendTransaction(
    input: Input_sendTransaction,
    client: Client
  ): MaybeAsync<Types.FinalExecutionOutcome>;

  sendTransactionAsync(
    input: Input_sendTransactionAsync,
    client: Client
  ): MaybeAsync<String>;
}
