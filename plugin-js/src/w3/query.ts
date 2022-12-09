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

export interface Input_requestSignIn extends Record<string, unknown> {
  contractId?: String | null;
  methodNames?: Array<String> | null;
  successUrl?: String | null;
  failureUrl?: String | null;
}

export interface Input_signOut extends Record<string, unknown> {
}

export interface Input_isSignedIn extends Record<string, unknown> {
}

export interface Input_getAccountId extends Record<string, unknown> {
}

export interface Input_getPublicKey extends Record<string, unknown> {
  accountId: String;
}

export interface Input_signMessage extends Record<string, unknown> {
  message: Bytes;
  signerId: String;
}

export interface Input_createTransactionWithWallet extends Record<string, unknown> {
  receiverId: String;
  actions: Array<Types.Action>;
}

export interface Input_signTransaction extends Record<string, unknown> {
  transaction: Types.Transaction;
}

export interface Module extends PluginModule {
  requestSignIn(
    input: Input_requestSignIn,
    client: Client
  ): MaybeAsync<Boolean>;

  signOut(
    input: Input_signOut,
    client: Client
  ): MaybeAsync<Boolean>;

  isSignedIn(
    input: Input_isSignedIn,
    client: Client
  ): MaybeAsync<Boolean>;

  getAccountId(
    input: Input_getAccountId,
    client: Client
  ): MaybeAsync<String | null>;

  getPublicKey(
    input: Input_getPublicKey,
    client: Client
  ): MaybeAsync<Types.PublicKey | null>;

  signMessage(
    input: Input_signMessage,
    client: Client
  ): MaybeAsync<Types.Signature>;

  createTransactionWithWallet(
    input: Input_createTransactionWithWallet,
    client: Client
  ): MaybeAsync<Types.Transaction>;

  signTransaction(
    input: Input_signTransaction,
    client: Client
  ): MaybeAsync<Types.SignTransactionResult>;
}
