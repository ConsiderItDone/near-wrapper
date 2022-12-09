import {
  sendJsonRpc,
  requestSignTransactions,
  sendTransaction,
  sendTransactionAsync,
  signAndSendTransaction,
  signAndSendTransactionAsync,
  createAccount,
  deleteAccount,
  deployContract,
  sendMoney,
  functionCall,
  addKey,
  deleteKey,
  createAndDeployContract
} from "../../index";
import {
  deserializesendJsonRpcArgs,
  serializesendJsonRpcResult,
  deserializerequestSignTransactionsArgs,
  serializerequestSignTransactionsResult,
  deserializesendTransactionArgs,
  serializesendTransactionResult,
  deserializesendTransactionAsyncArgs,
  serializesendTransactionAsyncResult,
  deserializesignAndSendTransactionArgs,
  serializesignAndSendTransactionResult,
  deserializesignAndSendTransactionAsyncArgs,
  serializesignAndSendTransactionAsyncResult,
  deserializecreateAccountArgs,
  serializecreateAccountResult,
  deserializedeleteAccountArgs,
  serializedeleteAccountResult,
  deserializedeployContractArgs,
  serializedeployContractResult,
  deserializesendMoneyArgs,
  serializesendMoneyResult,
  deserializefunctionCallArgs,
  serializefunctionCallResult,
  deserializeaddKeyArgs,
  serializeaddKeyResult,
  deserializedeleteKeyArgs,
  serializedeleteKeyResult,
  deserializecreateAndDeployContractArgs,
  serializecreateAndDeployContractResult
} from "./serialization";

export function sendJsonRpcWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesendJsonRpcArgs(argsBuf);
  const result = sendJsonRpc({
    method: args.method,
    params: args.params
  });
  return serializesendJsonRpcResult(result);
}

export function requestSignTransactionsWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializerequestSignTransactionsArgs(argsBuf);
  const result = requestSignTransactions({
    transactions: args.transactions,
    callbackUrl: args.callbackUrl,
    meta: args.meta
  });
  return serializerequestSignTransactionsResult(result);
}

export function sendTransactionWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesendTransactionArgs(argsBuf);
  const result = sendTransaction({
    signedTx: args.signedTx
  });
  return serializesendTransactionResult(result);
}

export function sendTransactionAsyncWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesendTransactionAsyncArgs(argsBuf);
  const result = sendTransactionAsync({
    signedTx: args.signedTx
  });
  return serializesendTransactionAsyncResult(result);
}

export function signAndSendTransactionWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesignAndSendTransactionArgs(argsBuf);
  const result = signAndSendTransaction({
    receiverId: args.receiverId,
    actions: args.actions,
    signerId: args.signerId
  });
  return serializesignAndSendTransactionResult(result);
}

export function signAndSendTransactionAsyncWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesignAndSendTransactionAsyncArgs(argsBuf);
  const result = signAndSendTransactionAsync({
    receiverId: args.receiverId,
    actions: args.actions,
    signerId: args.signerId
  });
  return serializesignAndSendTransactionAsyncResult(result);
}

export function createAccountWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializecreateAccountArgs(argsBuf);
  const result = createAccount({
    newAccountId: args.newAccountId,
    publicKey: args.publicKey,
    amount: args.amount,
    signerId: args.signerId
  });
  return serializecreateAccountResult(result);
}

export function deleteAccountWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializedeleteAccountArgs(argsBuf);
  const result = deleteAccount({
    accountId: args.accountId,
    beneficiaryId: args.beneficiaryId,
    signerId: args.signerId
  });
  return serializedeleteAccountResult(result);
}

export function deployContractWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializedeployContractArgs(argsBuf);
  const result = deployContract({
    data: args.data,
    contractId: args.contractId,
    signerId: args.signerId
  });
  return serializedeployContractResult(result);
}

export function sendMoneyWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesendMoneyArgs(argsBuf);
  const result = sendMoney({
    amount: args.amount,
    receiverId: args.receiverId,
    signerId: args.signerId
  });
  return serializesendMoneyResult(result);
}

export function functionCallWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializefunctionCallArgs(argsBuf);
  const result = functionCall({
    contractId: args.contractId,
    methodName: args.methodName,
    args: args.args,
    gas: args.gas,
    deposit: args.deposit,
    walletMeta: args.walletMeta,
    walletCallbackUrl: args.walletCallbackUrl,
    signerId: args.signerId
  });
  return serializefunctionCallResult(result);
}

export function addKeyWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeaddKeyArgs(argsBuf);
  const result = addKey({
    publicKey: args.publicKey,
    contractId: args.contractId,
    methodNames: args.methodNames,
    amount: args.amount,
    signerId: args.signerId
  });
  return serializeaddKeyResult(result);
}

export function deleteKeyWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializedeleteKeyArgs(argsBuf);
  const result = deleteKey({
    publicKey: args.publicKey,
    signerId: args.signerId
  });
  return serializedeleteKeyResult(result);
}

export function createAndDeployContractWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializecreateAndDeployContractArgs(argsBuf);
  const result = createAndDeployContract({
    contractId: args.contractId,
    publicKey: args.publicKey,
    data: args.data,
    amount: args.amount,
    signerId: args.signerId
  });
  return serializecreateAndDeployContractResult(result);
}
