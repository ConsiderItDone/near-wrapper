import {
  w3_subinvoke,
  w3_subinvokeImplementation,
  Nullable,
  BigInt,
  JSON,
  Result
} from "@web3api/wasm-as";
import {
  serializesendJsonRpcArgs,
  deserializesendJsonRpcResult,
  Input_sendJsonRpc,
  serializerequestSignTransactionsArgs,
  deserializerequestSignTransactionsResult,
  Input_requestSignTransactions,
  serializecreateKeyArgs,
  deserializecreateKeyResult,
  Input_createKey,
  serializesendTransactionArgs,
  deserializesendTransactionResult,
  Input_sendTransaction,
  serializesendTransactionAsyncArgs,
  deserializesendTransactionAsyncResult,
  Input_sendTransactionAsync
} from "./serialization";
import * as Types from "../..";

export class Near_Mutation {

  public static uri: string = "w3://ens/nearPlugin.web3api.eth";

  public static sendJsonRpc(
    input: Input_sendJsonRpc
  ): Result<JSON.Value, string> {
    const args = serializesendJsonRpcArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "mutation",
      "sendJsonRpc",
      args
    );

    if (result.isErr) {
      return Result.Err<JSON.Value, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<JSON.Value, string>(
      deserializesendJsonRpcResult(result.unwrap())
    );
  }

  public static requestSignTransactions(
    input: Input_requestSignTransactions
  ): Result<bool, string> {
    const args = serializerequestSignTransactionsArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "mutation",
      "requestSignTransactions",
      args
    );

    if (result.isErr) {
      return Result.Err<bool, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<bool, string>(
      deserializerequestSignTransactionsResult(result.unwrap())
    );
  }

  public static createKey(
    input: Input_createKey
  ): Result<Types.Near_PublicKey, string> {
    const args = serializecreateKeyArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "mutation",
      "createKey",
      args
    );

    if (result.isErr) {
      return Result.Err<Types.Near_PublicKey, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<Types.Near_PublicKey, string>(
      deserializecreateKeyResult(result.unwrap())
    );
  }

  public static sendTransaction(
    input: Input_sendTransaction
  ): Result<Types.Near_FinalExecutionOutcome, string> {
    const args = serializesendTransactionArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "mutation",
      "sendTransaction",
      args
    );

    if (result.isErr) {
      return Result.Err<Types.Near_FinalExecutionOutcome, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<Types.Near_FinalExecutionOutcome, string>(
      deserializesendTransactionResult(result.unwrap())
    );
  }

  public static sendTransactionAsync(
    input: Input_sendTransactionAsync
  ): Result<string, string> {
    const args = serializesendTransactionAsyncArgs(input);
    const result = w3_subinvoke(
      "w3://ens/nearPlugin.web3api.eth",
      "mutation",
      "sendTransactionAsync",
      args
    );

    if (result.isErr) {
      return Result.Err<string, string>(
        result.unwrapErr()
      );
    }

    return Result.Ok<string, string>(
      deserializesendTransactionAsyncResult(result.unwrap())
    );
  }
}
