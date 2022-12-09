import {
  w3_invoke_args,
  w3_invoke,
  w3_load_env,
  w3_sanitize_env,
  w3_abort,
  InvokeArgs
} from "@web3api/wasm-as";

import {
  sendJsonRpcWrapped,
  requestSignTransactionsWrapped,
  sendTransactionWrapped,
  sendTransactionAsyncWrapped,
  signAndSendTransactionWrapped,
  signAndSendTransactionAsyncWrapped,
  createAccountWrapped,
  deleteAccountWrapped,
  deployContractWrapped,
  sendMoneyWrapped,
  functionCallWrapped,
  addKeyWrapped,
  deleteKeyWrapped,
  createAndDeployContractWrapped
} from "./Mutation/wrapped";

export function _w3_invoke(method_size: u32, args_size: u32): bool {
  const args: InvokeArgs = w3_invoke_args(
    method_size,
    args_size
  );

  if (args.method == "sendJsonRpc") {
    return w3_invoke(args, sendJsonRpcWrapped);
  }
  else if (args.method == "requestSignTransactions") {
    return w3_invoke(args, requestSignTransactionsWrapped);
  }
  else if (args.method == "sendTransaction") {
    return w3_invoke(args, sendTransactionWrapped);
  }
  else if (args.method == "sendTransactionAsync") {
    return w3_invoke(args, sendTransactionAsyncWrapped);
  }
  else if (args.method == "signAndSendTransaction") {
    return w3_invoke(args, signAndSendTransactionWrapped);
  }
  else if (args.method == "signAndSendTransactionAsync") {
    return w3_invoke(args, signAndSendTransactionAsyncWrapped);
  }
  else if (args.method == "createAccount") {
    return w3_invoke(args, createAccountWrapped);
  }
  else if (args.method == "deleteAccount") {
    return w3_invoke(args, deleteAccountWrapped);
  }
  else if (args.method == "deployContract") {
    return w3_invoke(args, deployContractWrapped);
  }
  else if (args.method == "sendMoney") {
    return w3_invoke(args, sendMoneyWrapped);
  }
  else if (args.method == "functionCall") {
    return w3_invoke(args, functionCallWrapped);
  }
  else if (args.method == "addKey") {
    return w3_invoke(args, addKeyWrapped);
  }
  else if (args.method == "deleteKey") {
    return w3_invoke(args, deleteKeyWrapped);
  }
  else if (args.method == "createAndDeployContract") {
    return w3_invoke(args, createAndDeployContractWrapped);
  }
  else {
    return w3_invoke(args, null);
  }
}

export function w3Abort(
  msg: string | null,
  file: string | null,
  line: u32,
  column: u32
): void {
  w3_abort(
    msg ? msg : "",
    file ? file : "",
    line,
    column
  );
}
