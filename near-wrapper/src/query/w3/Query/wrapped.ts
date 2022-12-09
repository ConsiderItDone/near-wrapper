import {
  requestSignIn,
  signOut,
  isSignedIn,
  getAccountId,
  getAccountState,
  viewContractCode,
  findAccessKey,
  getPublicKey,
  getAccountBalance,
  getAccountDetails,
  getAccessKeys,
  viewFunction,
  viewContractState,
  createTransaction,
  signTransaction,
  parseNearAmount,
  formatNearAmount,
  getBlock,
  status,
  txStatus,
  txStatusReceipts,
  blockChanges,
  chunk,
  validators,
  experimental_protocolConfig,
  lightClientProof,
  accessKeyChanges,
  singleAccessKeyChanges,
  accountChanges,
  contractStateChanges,
  contractCodeChanges,
  gasPrice
} from "../../index";
import {
  deserializerequestSignInArgs,
  serializerequestSignInResult,
  deserializesignOutArgs,
  serializesignOutResult,
  deserializeisSignedInArgs,
  serializeisSignedInResult,
  deserializegetAccountIdArgs,
  serializegetAccountIdResult,
  deserializegetAccountStateArgs,
  serializegetAccountStateResult,
  deserializeviewContractCodeArgs,
  serializeviewContractCodeResult,
  deserializefindAccessKeyArgs,
  serializefindAccessKeyResult,
  deserializegetPublicKeyArgs,
  serializegetPublicKeyResult,
  deserializegetAccountBalanceArgs,
  serializegetAccountBalanceResult,
  deserializegetAccountDetailsArgs,
  serializegetAccountDetailsResult,
  deserializegetAccessKeysArgs,
  serializegetAccessKeysResult,
  deserializeviewFunctionArgs,
  serializeviewFunctionResult,
  deserializeviewContractStateArgs,
  serializeviewContractStateResult,
  deserializecreateTransactionArgs,
  serializecreateTransactionResult,
  deserializesignTransactionArgs,
  serializesignTransactionResult,
  deserializeparseNearAmountArgs,
  serializeparseNearAmountResult,
  deserializeformatNearAmountArgs,
  serializeformatNearAmountResult,
  deserializegetBlockArgs,
  serializegetBlockResult,
  deserializestatusArgs,
  serializestatusResult,
  deserializetxStatusArgs,
  serializetxStatusResult,
  deserializetxStatusReceiptsArgs,
  serializetxStatusReceiptsResult,
  deserializeblockChangesArgs,
  serializeblockChangesResult,
  deserializechunkArgs,
  serializechunkResult,
  deserializevalidatorsArgs,
  serializevalidatorsResult,
  deserializeexperimental_protocolConfigArgs,
  serializeexperimental_protocolConfigResult,
  deserializelightClientProofArgs,
  serializelightClientProofResult,
  deserializeaccessKeyChangesArgs,
  serializeaccessKeyChangesResult,
  deserializesingleAccessKeyChangesArgs,
  serializesingleAccessKeyChangesResult,
  deserializeaccountChangesArgs,
  serializeaccountChangesResult,
  deserializecontractStateChangesArgs,
  serializecontractStateChangesResult,
  deserializecontractCodeChangesArgs,
  serializecontractCodeChangesResult,
  deserializegasPriceArgs,
  serializegasPriceResult
} from "./serialization";

export function requestSignInWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializerequestSignInArgs(argsBuf);
  const result = requestSignIn({
    contractId: args.contractId,
    methodNames: args.methodNames,
    successUrl: args.successUrl,
    failureUrl: args.failureUrl
  });
  return serializerequestSignInResult(result);
}

export function signOutWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const result = signOut();
  return serializesignOutResult(result);
}

export function isSignedInWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const result = isSignedIn();
  return serializeisSignedInResult(result);
}

export function getAccountIdWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const result = getAccountId();
  return serializegetAccountIdResult(result);
}

export function getAccountStateWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetAccountStateArgs(argsBuf);
  const result = getAccountState({
    accountId: args.accountId
  });
  return serializegetAccountStateResult(result);
}

export function viewContractCodeWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeviewContractCodeArgs(argsBuf);
  const result = viewContractCode({
    accountId: args.accountId
  });
  return serializeviewContractCodeResult(result);
}

export function findAccessKeyWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializefindAccessKeyArgs(argsBuf);
  const result = findAccessKey({
    accountId: args.accountId
  });
  return serializefindAccessKeyResult(result);
}

export function getPublicKeyWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetPublicKeyArgs(argsBuf);
  const result = getPublicKey({
    accountId: args.accountId
  });
  return serializegetPublicKeyResult(result);
}

export function getAccountBalanceWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetAccountBalanceArgs(argsBuf);
  const result = getAccountBalance({
    accountId: args.accountId
  });
  return serializegetAccountBalanceResult(result);
}

export function getAccountDetailsWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetAccountDetailsArgs(argsBuf);
  const result = getAccountDetails({
    accountId: args.accountId
  });
  return serializegetAccountDetailsResult(result);
}

export function getAccessKeysWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetAccessKeysArgs(argsBuf);
  const result = getAccessKeys({
    accountId: args.accountId
  });
  return serializegetAccessKeysResult(result);
}

export function viewFunctionWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeviewFunctionArgs(argsBuf);
  const result = viewFunction({
    contractId: args.contractId,
    methodName: args.methodName,
    args: args.args
  });
  return serializeviewFunctionResult(result);
}

export function viewContractStateWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeviewContractStateArgs(argsBuf);
  const result = viewContractState({
    prefix: args.prefix,
    blockQuery: args.blockQuery,
    accountId: args.accountId
  });
  return serializeviewContractStateResult(result);
}

export function createTransactionWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializecreateTransactionArgs(argsBuf);
  const result = createTransaction({
    receiverId: args.receiverId,
    actions: args.actions,
    signerId: args.signerId
  });
  return serializecreateTransactionResult(result);
}

export function signTransactionWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesignTransactionArgs(argsBuf);
  const result = signTransaction({
    transaction: args.transaction
  });
  return serializesignTransactionResult(result);
}

export function parseNearAmountWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeparseNearAmountArgs(argsBuf);
  const result = parseNearAmount({
    amount: args.amount
  });
  return serializeparseNearAmountResult(result);
}

export function formatNearAmountWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeformatNearAmountArgs(argsBuf);
  const result = formatNearAmount({
    amount: args.amount
  });
  return serializeformatNearAmountResult(result);
}

export function getBlockWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegetBlockArgs(argsBuf);
  const result = getBlock({
    blockQuery: args.blockQuery
  });
  return serializegetBlockResult(result);
}

export function statusWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const result = status();
  return serializestatusResult(result);
}

export function txStatusWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializetxStatusArgs(argsBuf);
  const result = txStatus({
    txHash: args.txHash,
    accountId: args.accountId
  });
  return serializetxStatusResult(result);
}

export function txStatusReceiptsWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializetxStatusReceiptsArgs(argsBuf);
  const result = txStatusReceipts({
    txHash: args.txHash,
    accountId: args.accountId
  });
  return serializetxStatusReceiptsResult(result);
}

export function blockChangesWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeblockChangesArgs(argsBuf);
  const result = blockChanges({
    blockQuery: args.blockQuery
  });
  return serializeblockChangesResult(result);
}

export function chunkWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializechunkArgs(argsBuf);
  const result = chunk({
    chunkId: args.chunkId
  });
  return serializechunkResult(result);
}

export function validatorsWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializevalidatorsArgs(argsBuf);
  const result = validators({
    blockId: args.blockId
  });
  return serializevalidatorsResult(result);
}

export function experimental_protocolConfigWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeexperimental_protocolConfigArgs(argsBuf);
  const result = experimental_protocolConfig({
    blockReference: args.blockReference
  });
  return serializeexperimental_protocolConfigResult(result);
}

export function lightClientProofWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializelightClientProofArgs(argsBuf);
  const result = lightClientProof({
    request: args.request
  });
  return serializelightClientProofResult(result);
}

export function accessKeyChangesWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeaccessKeyChangesArgs(argsBuf);
  const result = accessKeyChanges({
    accountIdArray: args.accountIdArray,
    blockQuery: args.blockQuery
  });
  return serializeaccessKeyChangesResult(result);
}

export function singleAccessKeyChangesWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializesingleAccessKeyChangesArgs(argsBuf);
  const result = singleAccessKeyChanges({
    accessKeyArray: args.accessKeyArray,
    blockQuery: args.blockQuery
  });
  return serializesingleAccessKeyChangesResult(result);
}

export function accountChangesWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializeaccountChangesArgs(argsBuf);
  const result = accountChanges({
    accountIdArray: args.accountIdArray,
    blockQuery: args.blockQuery
  });
  return serializeaccountChangesResult(result);
}

export function contractStateChangesWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializecontractStateChangesArgs(argsBuf);
  const result = contractStateChanges({
    accountIdArray: args.accountIdArray,
    blockQuery: args.blockQuery,
    keyPrefix: args.keyPrefix
  });
  return serializecontractStateChangesResult(result);
}

export function contractCodeChangesWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializecontractCodeChangesArgs(argsBuf);
  const result = contractCodeChanges({
    accountIdArray: args.accountIdArray,
    blockQuery: args.blockQuery
  });
  return serializecontractCodeChangesResult(result);
}

export function gasPriceWrapped(argsBuf: ArrayBuffer): ArrayBuffer {
  const args = deserializegasPriceArgs(argsBuf);
  const result = gasPrice({
    blockId: args.blockId
  });
  return serializegasPriceResult(result);
}
