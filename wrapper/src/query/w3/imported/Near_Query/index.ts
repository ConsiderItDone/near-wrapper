import {
  w3_subinvoke,
  w3_subinvokeImplementation,
  Nullable,
  BigInt,
  JSON,
  Result
} from "@web3api/wasm-as";
import {
  serializerequestSignInArgs,
  deserializerequestSignInResult,
  Input_requestSignIn,
  serializesignOutArgs,
  deserializesignOutResult,
  Input_signOut,
  serializeisSignedInArgs,
  deserializeisSignedInResult,
  Input_isSignedIn,
  serializegetAccountIdArgs,
  deserializegetAccountIdResult,
  Input_getAccountId,
  serializegetPublicKeyArgs,
  deserializegetPublicKeyResult,
  Input_getPublicKey,
  serializesignMessageArgs,
  deserializesignMessageResult,
  Input_signMessage,
  serializecreateTransactionWithWalletArgs,
  deserializecreateTransactionWithWalletResult,
  Input_createTransactionWithWallet,
  serializesignTransactionArgs,
  deserializesignTransactionResult,
  Input_signTransaction
} from "./serialization";
import * as Types from "../..";

export class Near_Query {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  public static requestSignIn(
    input: Input_requestSignIn
  ): Result<bool, string> {
    const args = serializerequestSignInArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "requestSignIn",
      args
    );

    if (result.isErr) {
      return Result.Err<bool, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<bool, string>(
      deserializerequestSignInResult(result.unwrap())
    );
  }

  public static signOut(
    input: Input_signOut
  ): Result<bool, string> {
    const args = serializesignOutArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "signOut",
      args
    );

    if (result.isErr) {
      return Result.Err<bool, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<bool, string>(
      deserializesignOutResult(result.unwrap())
    );
  }

  public static isSignedIn(
    input: Input_isSignedIn
  ): Result<bool, string> {
    const args = serializeisSignedInArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "isSignedIn",
      args
    );

    if (result.isErr) {
      return Result.Err<bool, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<bool, string>(
      deserializeisSignedInResult(result.unwrap())
    );
  }

  public static getAccountId(
    input: Input_getAccountId
  ): Result<string | null, string> {
    const args = serializegetAccountIdArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "getAccountId",
      args
    );

    if (result.isErr) {
      return Result.Err<string | null, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<string | null, string>(
      deserializegetAccountIdResult(result.unwrap())
    );
  }

  public static getPublicKey(
    input: Input_getPublicKey
  ): Result<Types.Near_PublicKey | null, string> {
    const args = serializegetPublicKeyArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "getPublicKey",
      args
    );

    if (result.isErr) {
      return Result.Err<Types.Near_PublicKey | null, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<Types.Near_PublicKey | null, string>(
      deserializegetPublicKeyResult(result.unwrap())
    );
  }

  public static signMessage(
    input: Input_signMessage
  ): Result<Types.Near_Signature, string> {
    const args = serializesignMessageArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "signMessage",
      args
    );

    if (result.isErr) {
      return Result.Err<Types.Near_Signature, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<Types.Near_Signature, string>(
      deserializesignMessageResult(result.unwrap())
    );
  }

  public static createTransactionWithWallet(
    input: Input_createTransactionWithWallet
  ): Result<Types.Near_Transaction, string> {
    const args = serializecreateTransactionWithWalletArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "createTransactionWithWallet",
      args
    );

    if (result.isErr) {
      return Result.Err<Types.Near_Transaction, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<Types.Near_Transaction, string>(
      deserializecreateTransactionWithWalletResult(result.unwrap())
    );
  }

  public static signTransaction(
    input: Input_signTransaction
  ): Result<Types.Near_SignTransactionResult, string> {
    const args = serializesignTransactionArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "query",
      "signTransaction",
      args
    );

    if (result.isErr) {
      return Result.Err<Types.Near_SignTransactionResult, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<Types.Near_SignTransactionResult, string>(
      deserializesignTransactionResult(result.unwrap())
    );
  }
}
