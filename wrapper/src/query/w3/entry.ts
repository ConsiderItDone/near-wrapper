import {
  w3_invoke_args,
  w3_invoke,
  w3_load_env,
  w3_sanitize_env,
  w3_abort,
  InvokeArgs
} from "@web3api/wasm-as";

import {
  requestSignInWrapped,
  signOutWrapped,
  isSignedInWrapped,
  getAccountIdWrapped,
  getAccountStateWrapped,
  viewContractCodeWrapped,
  findAccessKeyWrapped,
  getPublicKeyWrapped,
  getAccountBalanceWrapped,
  getAccountDetailsWrapped,
  getAccessKeysWrapped,
  viewFunctionWrapped,
  viewContractStateWrapped,
  createTransactionWrapped,
  signTransactionWrapped,
  parseNearAmountWrapped,
  formatNearAmountWrapped,
  getBlockWrapped,
  statusWrapped,
  txStatusWrapped,
  txStatusReceiptsWrapped,
  blockChangesWrapped,
  chunkWrapped,
  validatorsWrapped,
  experimental_protocolConfigWrapped,
  lightClientProofWrapped,
  accessKeyChangesWrapped,
  singleAccessKeyChangesWrapped,
  accountChangesWrapped,
  contractStateChangesWrapped,
  contractCodeChangesWrapped,
  gasPriceWrapped
} from "./Query/wrapped";

export function _w3_invoke(method_size: u32, args_size: u32): bool {
  const args: InvokeArgs = w3_invoke_args(
    method_size,
    args_size
  );

  if (args.method == "requestSignIn") {
    return w3_invoke(args, requestSignInWrapped);
  }
  else if (args.method == "signOut") {
    return w3_invoke(args, signOutWrapped);
  }
  else if (args.method == "isSignedIn") {
    return w3_invoke(args, isSignedInWrapped);
  }
  else if (args.method == "getAccountId") {
    return w3_invoke(args, getAccountIdWrapped);
  }
  else if (args.method == "getAccountState") {
    return w3_invoke(args, getAccountStateWrapped);
  }
  else if (args.method == "viewContractCode") {
    return w3_invoke(args, viewContractCodeWrapped);
  }
  else if (args.method == "findAccessKey") {
    return w3_invoke(args, findAccessKeyWrapped);
  }
  else if (args.method == "getPublicKey") {
    return w3_invoke(args, getPublicKeyWrapped);
  }
  else if (args.method == "getAccountBalance") {
    return w3_invoke(args, getAccountBalanceWrapped);
  }
  else if (args.method == "getAccountDetails") {
    return w3_invoke(args, getAccountDetailsWrapped);
  }
  else if (args.method == "getAccessKeys") {
    return w3_invoke(args, getAccessKeysWrapped);
  }
  else if (args.method == "viewFunction") {
    return w3_invoke(args, viewFunctionWrapped);
  }
  else if (args.method == "viewContractState") {
    return w3_invoke(args, viewContractStateWrapped);
  }
  else if (args.method == "createTransaction") {
    return w3_invoke(args, createTransactionWrapped);
  }
  else if (args.method == "signTransaction") {
    return w3_invoke(args, signTransactionWrapped);
  }
  else if (args.method == "parseNearAmount") {
    return w3_invoke(args, parseNearAmountWrapped);
  }
  else if (args.method == "formatNearAmount") {
    return w3_invoke(args, formatNearAmountWrapped);
  }
  else if (args.method == "getBlock") {
    return w3_invoke(args, getBlockWrapped);
  }
  else if (args.method == "status") {
    return w3_invoke(args, statusWrapped);
  }
  else if (args.method == "txStatus") {
    return w3_invoke(args, txStatusWrapped);
  }
  else if (args.method == "txStatusReceipts") {
    return w3_invoke(args, txStatusReceiptsWrapped);
  }
  else if (args.method == "blockChanges") {
    return w3_invoke(args, blockChangesWrapped);
  }
  else if (args.method == "chunk") {
    return w3_invoke(args, chunkWrapped);
  }
  else if (args.method == "validators") {
    return w3_invoke(args, validatorsWrapped);
  }
  else if (args.method == "experimental_protocolConfig") {
    return w3_invoke(args, experimental_protocolConfigWrapped);
  }
  else if (args.method == "lightClientProof") {
    return w3_invoke(args, lightClientProofWrapped);
  }
  else if (args.method == "accessKeyChanges") {
    return w3_invoke(args, accessKeyChangesWrapped);
  }
  else if (args.method == "singleAccessKeyChanges") {
    return w3_invoke(args, singleAccessKeyChangesWrapped);
  }
  else if (args.method == "accountChanges") {
    return w3_invoke(args, accountChangesWrapped);
  }
  else if (args.method == "contractStateChanges") {
    return w3_invoke(args, contractStateChangesWrapped);
  }
  else if (args.method == "contractCodeChanges") {
    return w3_invoke(args, contractCodeChangesWrapped);
  }
  else if (args.method == "gasPrice") {
    return w3_invoke(args, gasPriceWrapped);
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
