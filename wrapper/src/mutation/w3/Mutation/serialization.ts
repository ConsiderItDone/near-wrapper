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
import * as Types from "..";

export class Input_sendJsonRpc {
  method: string;
  params: JSON.Value;
}

export function deserializesendJsonRpcArgs(argsBuf: ArrayBuffer): Input_sendJsonRpc {
  const context: Context =  new Context("Deserializing module-type: sendJsonRpc");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _method: string = "";
  let _methodSet: bool = false;
  let _params: JSON.Value = JSON.Value.Null();
  let _paramsSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "method") {
      reader.context().push(field, "string", "type found, reading property");
      _method = reader.readString();
      _methodSet = true;
      reader.context().pop();
    }
    else if (field == "params") {
      reader.context().push(field, "JSON.Value", "type found, reading property");
      _params = reader.readJSON();
      _paramsSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_methodSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'method: String'"));
  }
  if (!_paramsSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'params: JSON'"));
  }

  return {
    method: _method,
    params: _params
  };
}

export function serializesendJsonRpcResult(result: JSON.Value): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: sendJsonRpc");
  const sizer = new WriteSizer(sizerContext);
  writesendJsonRpcResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: sendJsonRpc");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesendJsonRpcResult(encoder, result);
  return buffer;
}

export function writesendJsonRpcResult(writer: Write, result: JSON.Value): void {
  writer.context().push("sendJsonRpc", "JSON.Value", "writing property");
  writer.writeJSON(result);
  writer.context().pop();
}

export class Input_requestSignTransactions {
  transactions: Array<Types.Near_Transaction>;
  callbackUrl: string | null;
  meta: string | null;
}

export function deserializerequestSignTransactionsArgs(argsBuf: ArrayBuffer): Input_requestSignTransactions {
  const context: Context =  new Context("Deserializing module-type: requestSignTransactions");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _transactions: Array<Types.Near_Transaction> = [];
  let _transactionsSet: bool = false;
  let _callbackUrl: string | null = null;
  let _meta: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "transactions") {
      reader.context().push(field, "Array<Types.Near_Transaction>", "type found, reading property");
      _transactions = reader.readArray((reader: Read): Types.Near_Transaction => {
        const object = Types.Near_Transaction.read(reader);
        return object;
      });
      _transactionsSet = true;
      reader.context().pop();
    }
    else if (field == "callbackUrl") {
      reader.context().push(field, "string | null", "type found, reading property");
      _callbackUrl = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "meta") {
      reader.context().push(field, "string | null", "type found, reading property");
      _meta = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_transactionsSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'transactions: [Near_Transaction]'"));
  }

  return {
    transactions: _transactions,
    callbackUrl: _callbackUrl,
    meta: _meta
  };
}

export function serializerequestSignTransactionsResult(result: bool): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: requestSignTransactions");
  const sizer = new WriteSizer(sizerContext);
  writerequestSignTransactionsResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: requestSignTransactions");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writerequestSignTransactionsResult(encoder, result);
  return buffer;
}

export function writerequestSignTransactionsResult(writer: Write, result: bool): void {
  writer.context().push("requestSignTransactions", "bool", "writing property");
  writer.writeBool(result);
  writer.context().pop();
}

export class Input_sendTransaction {
  signedTx: Types.Near_SignedTransaction;
}

export function deserializesendTransactionArgs(argsBuf: ArrayBuffer): Input_sendTransaction {
  const context: Context =  new Context("Deserializing module-type: sendTransaction");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _signedTx: Types.Near_SignedTransaction | null = null;
  let _signedTxSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "signedTx") {
      reader.context().push(field, "Types.Near_SignedTransaction", "type found, reading property");
      const object = Types.Near_SignedTransaction.read(reader);
      _signedTx = object;
      _signedTxSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_signedTx || !_signedTxSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signedTx: Near_SignedTransaction'"));
  }

  return {
    signedTx: _signedTx
  };
}

export function serializesendTransactionResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: sendTransaction");
  const sizer = new WriteSizer(sizerContext);
  writesendTransactionResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: sendTransaction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesendTransactionResult(encoder, result);
  return buffer;
}

export function writesendTransactionResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("sendTransaction", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_sendTransactionAsync {
  signedTx: Types.Near_SignedTransaction;
}

export function deserializesendTransactionAsyncArgs(argsBuf: ArrayBuffer): Input_sendTransactionAsync {
  const context: Context =  new Context("Deserializing module-type: sendTransactionAsync");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _signedTx: Types.Near_SignedTransaction | null = null;
  let _signedTxSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "signedTx") {
      reader.context().push(field, "Types.Near_SignedTransaction", "type found, reading property");
      const object = Types.Near_SignedTransaction.read(reader);
      _signedTx = object;
      _signedTxSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_signedTx || !_signedTxSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signedTx: Near_SignedTransaction'"));
  }

  return {
    signedTx: _signedTx
  };
}

export function serializesendTransactionAsyncResult(result: string): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: sendTransactionAsync");
  const sizer = new WriteSizer(sizerContext);
  writesendTransactionAsyncResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: sendTransactionAsync");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesendTransactionAsyncResult(encoder, result);
  return buffer;
}

export function writesendTransactionAsyncResult(writer: Write, result: string): void {
  writer.context().push("sendTransactionAsync", "string", "writing property");
  writer.writeString(result);
  writer.context().pop();
}

export class Input_signAndSendTransaction {
  receiverId: string;
  actions: Array<Types.Near_Action>;
  signerId: string;
}

export function deserializesignAndSendTransactionArgs(argsBuf: ArrayBuffer): Input_signAndSendTransaction {
  const context: Context =  new Context("Deserializing module-type: signAndSendTransaction");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _receiverId: string = "";
  let _receiverIdSet: bool = false;
  let _actions: Array<Types.Near_Action> = [];
  let _actionsSet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "receiverId") {
      reader.context().push(field, "string", "type found, reading property");
      _receiverId = reader.readString();
      _receiverIdSet = true;
      reader.context().pop();
    }
    else if (field == "actions") {
      reader.context().push(field, "Array<Types.Near_Action>", "type found, reading property");
      _actions = reader.readArray((reader: Read): Types.Near_Action => {
        const object = Types.Near_Action.read(reader);
        return object;
      });
      _actionsSet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_receiverIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'receiverId: String'"));
  }
  if (!_actionsSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'actions: [Near_Action]'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    receiverId: _receiverId,
    actions: _actions,
    signerId: _signerId
  };
}

export function serializesignAndSendTransactionResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: signAndSendTransaction");
  const sizer = new WriteSizer(sizerContext);
  writesignAndSendTransactionResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: signAndSendTransaction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesignAndSendTransactionResult(encoder, result);
  return buffer;
}

export function writesignAndSendTransactionResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("signAndSendTransaction", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_signAndSendTransactionAsync {
  receiverId: string;
  actions: Array<Types.Near_Action>;
  signerId: string;
}

export function deserializesignAndSendTransactionAsyncArgs(argsBuf: ArrayBuffer): Input_signAndSendTransactionAsync {
  const context: Context =  new Context("Deserializing module-type: signAndSendTransactionAsync");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _receiverId: string = "";
  let _receiverIdSet: bool = false;
  let _actions: Array<Types.Near_Action> = [];
  let _actionsSet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "receiverId") {
      reader.context().push(field, "string", "type found, reading property");
      _receiverId = reader.readString();
      _receiverIdSet = true;
      reader.context().pop();
    }
    else if (field == "actions") {
      reader.context().push(field, "Array<Types.Near_Action>", "type found, reading property");
      _actions = reader.readArray((reader: Read): Types.Near_Action => {
        const object = Types.Near_Action.read(reader);
        return object;
      });
      _actionsSet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_receiverIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'receiverId: String'"));
  }
  if (!_actionsSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'actions: [Near_Action]'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    receiverId: _receiverId,
    actions: _actions,
    signerId: _signerId
  };
}

export function serializesignAndSendTransactionAsyncResult(result: string): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: signAndSendTransactionAsync");
  const sizer = new WriteSizer(sizerContext);
  writesignAndSendTransactionAsyncResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: signAndSendTransactionAsync");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesignAndSendTransactionAsyncResult(encoder, result);
  return buffer;
}

export function writesignAndSendTransactionAsyncResult(writer: Write, result: string): void {
  writer.context().push("signAndSendTransactionAsync", "string", "writing property");
  writer.writeString(result);
  writer.context().pop();
}

export class Input_createAccount {
  newAccountId: string;
  publicKey: Types.Near_PublicKey;
  amount: BigInt;
  signerId: string;
}

export function deserializecreateAccountArgs(argsBuf: ArrayBuffer): Input_createAccount {
  const context: Context =  new Context("Deserializing module-type: createAccount");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _newAccountId: string = "";
  let _newAccountIdSet: bool = false;
  let _publicKey: Types.Near_PublicKey | null = null;
  let _publicKeySet: bool = false;
  let _amount: BigInt = BigInt.fromUInt16(0);
  let _amountSet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "newAccountId") {
      reader.context().push(field, "string", "type found, reading property");
      _newAccountId = reader.readString();
      _newAccountIdSet = true;
      reader.context().pop();
    }
    else if (field == "publicKey") {
      reader.context().push(field, "Types.Near_PublicKey", "type found, reading property");
      const object = Types.Near_PublicKey.read(reader);
      _publicKey = object;
      _publicKeySet = true;
      reader.context().pop();
    }
    else if (field == "amount") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _amount = reader.readBigInt();
      _amountSet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_newAccountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'newAccountId: String'"));
  }
  if (!_publicKey || !_publicKeySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'publicKey: Near_PublicKey'"));
  }
  if (!_amountSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'amount: BigInt'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    newAccountId: _newAccountId,
    publicKey: _publicKey,
    amount: _amount,
    signerId: _signerId
  };
}

export function serializecreateAccountResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: createAccount");
  const sizer = new WriteSizer(sizerContext);
  writecreateAccountResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: createAccount");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writecreateAccountResult(encoder, result);
  return buffer;
}

export function writecreateAccountResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("createAccount", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_deleteAccount {
  accountId: string;
  beneficiaryId: string;
  signerId: string;
}

export function deserializedeleteAccountArgs(argsBuf: ArrayBuffer): Input_deleteAccount {
  const context: Context =  new Context("Deserializing module-type: deleteAccount");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;
  let _beneficiaryId: string = "";
  let _beneficiaryIdSet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "accountId") {
      reader.context().push(field, "string", "type found, reading property");
      _accountId = reader.readString();
      _accountIdSet = true;
      reader.context().pop();
    }
    else if (field == "beneficiaryId") {
      reader.context().push(field, "string", "type found, reading property");
      _beneficiaryId = reader.readString();
      _beneficiaryIdSet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }
  if (!_beneficiaryIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'beneficiaryId: String'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    accountId: _accountId,
    beneficiaryId: _beneficiaryId,
    signerId: _signerId
  };
}

export function serializedeleteAccountResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: deleteAccount");
  const sizer = new WriteSizer(sizerContext);
  writedeleteAccountResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: deleteAccount");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writedeleteAccountResult(encoder, result);
  return buffer;
}

export function writedeleteAccountResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("deleteAccount", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_deployContract {
  data: ArrayBuffer;
  contractId: string;
  signerId: string;
}

export function deserializedeployContractArgs(argsBuf: ArrayBuffer): Input_deployContract {
  const context: Context =  new Context("Deserializing module-type: deployContract");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _data: ArrayBuffer = new ArrayBuffer(0);
  let _dataSet: bool = false;
  let _contractId: string = "";
  let _contractIdSet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "data") {
      reader.context().push(field, "ArrayBuffer", "type found, reading property");
      _data = reader.readBytes();
      _dataSet = true;
      reader.context().pop();
    }
    else if (field == "contractId") {
      reader.context().push(field, "string", "type found, reading property");
      _contractId = reader.readString();
      _contractIdSet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_dataSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'data: Bytes'"));
  }
  if (!_contractIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'contractId: String'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    data: _data,
    contractId: _contractId,
    signerId: _signerId
  };
}

export function serializedeployContractResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: deployContract");
  const sizer = new WriteSizer(sizerContext);
  writedeployContractResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: deployContract");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writedeployContractResult(encoder, result);
  return buffer;
}

export function writedeployContractResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("deployContract", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_sendMoney {
  amount: BigInt;
  receiverId: string;
  signerId: string;
}

export function deserializesendMoneyArgs(argsBuf: ArrayBuffer): Input_sendMoney {
  const context: Context =  new Context("Deserializing module-type: sendMoney");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _amount: BigInt = BigInt.fromUInt16(0);
  let _amountSet: bool = false;
  let _receiverId: string = "";
  let _receiverIdSet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "amount") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _amount = reader.readBigInt();
      _amountSet = true;
      reader.context().pop();
    }
    else if (field == "receiverId") {
      reader.context().push(field, "string", "type found, reading property");
      _receiverId = reader.readString();
      _receiverIdSet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_amountSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'amount: BigInt'"));
  }
  if (!_receiverIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'receiverId: String'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    amount: _amount,
    receiverId: _receiverId,
    signerId: _signerId
  };
}

export function serializesendMoneyResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: sendMoney");
  const sizer = new WriteSizer(sizerContext);
  writesendMoneyResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: sendMoney");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesendMoneyResult(encoder, result);
  return buffer;
}

export function writesendMoneyResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("sendMoney", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_functionCall {
  contractId: string;
  methodName: string;
  args: JSON.Value;
  gas: BigInt;
  deposit: BigInt;
  walletMeta: string | null;
  walletCallbackUrl: string | null;
  signerId: string | null;
}

export function deserializefunctionCallArgs(argsBuf: ArrayBuffer): Input_functionCall {
  const context: Context =  new Context("Deserializing module-type: functionCall");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _contractId: string = "";
  let _contractIdSet: bool = false;
  let _methodName: string = "";
  let _methodNameSet: bool = false;
  let _args: JSON.Value = JSON.Value.Null();
  let _argsSet: bool = false;
  let _gas: BigInt = BigInt.fromUInt16(0);
  let _gasSet: bool = false;
  let _deposit: BigInt = BigInt.fromUInt16(0);
  let _depositSet: bool = false;
  let _walletMeta: string | null = null;
  let _walletCallbackUrl: string | null = null;
  let _signerId: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "contractId") {
      reader.context().push(field, "string", "type found, reading property");
      _contractId = reader.readString();
      _contractIdSet = true;
      reader.context().pop();
    }
    else if (field == "methodName") {
      reader.context().push(field, "string", "type found, reading property");
      _methodName = reader.readString();
      _methodNameSet = true;
      reader.context().pop();
    }
    else if (field == "args") {
      reader.context().push(field, "JSON.Value", "type found, reading property");
      _args = reader.readJSON();
      _argsSet = true;
      reader.context().pop();
    }
    else if (field == "gas") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _gas = reader.readBigInt();
      _gasSet = true;
      reader.context().pop();
    }
    else if (field == "deposit") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _deposit = reader.readBigInt();
      _depositSet = true;
      reader.context().pop();
    }
    else if (field == "walletMeta") {
      reader.context().push(field, "string | null", "type found, reading property");
      _walletMeta = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "walletCallbackUrl") {
      reader.context().push(field, "string | null", "type found, reading property");
      _walletCallbackUrl = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string | null", "type found, reading property");
      _signerId = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_contractIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'contractId: String'"));
  }
  if (!_methodNameSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'methodName: String'"));
  }
  if (!_argsSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'args: JSON'"));
  }
  if (!_gasSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'gas: BigInt'"));
  }
  if (!_depositSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'deposit: BigInt'"));
  }

  return {
    contractId: _contractId,
    methodName: _methodName,
    args: _args,
    gas: _gas,
    deposit: _deposit,
    walletMeta: _walletMeta,
    walletCallbackUrl: _walletCallbackUrl,
    signerId: _signerId
  };
}

export function serializefunctionCallResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: functionCall");
  const sizer = new WriteSizer(sizerContext);
  writefunctionCallResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: functionCall");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writefunctionCallResult(encoder, result);
  return buffer;
}

export function writefunctionCallResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("functionCall", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_addKey {
  publicKey: Types.Near_PublicKey;
  contractId: string | null;
  methodNames: Array<string> | null;
  amount: BigInt | null;
  signerId: string;
}

export function deserializeaddKeyArgs(argsBuf: ArrayBuffer): Input_addKey {
  const context: Context =  new Context("Deserializing module-type: addKey");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _publicKey: Types.Near_PublicKey | null = null;
  let _publicKeySet: bool = false;
  let _contractId: string | null = null;
  let _methodNames: Array<string> | null = null;
  let _amount: BigInt | null = null;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "publicKey") {
      reader.context().push(field, "Types.Near_PublicKey", "type found, reading property");
      const object = Types.Near_PublicKey.read(reader);
      _publicKey = object;
      _publicKeySet = true;
      reader.context().pop();
    }
    else if (field == "contractId") {
      reader.context().push(field, "string | null", "type found, reading property");
      _contractId = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "methodNames") {
      reader.context().push(field, "Array<string> | null", "type found, reading property");
      _methodNames = reader.readNullableArray((reader: Read): string => {
        return reader.readString();
      });
      reader.context().pop();
    }
    else if (field == "amount") {
      reader.context().push(field, "BigInt | null", "type found, reading property");
      _amount = reader.readNullableBigInt();
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_publicKey || !_publicKeySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'publicKey: Near_PublicKey'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    publicKey: _publicKey,
    contractId: _contractId,
    methodNames: _methodNames,
    amount: _amount,
    signerId: _signerId
  };
}

export function serializeaddKeyResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: addKey");
  const sizer = new WriteSizer(sizerContext);
  writeaddKeyResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: addKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeaddKeyResult(encoder, result);
  return buffer;
}

export function writeaddKeyResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("addKey", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_deleteKey {
  publicKey: Types.Near_PublicKey;
  signerId: string;
}

export function deserializedeleteKeyArgs(argsBuf: ArrayBuffer): Input_deleteKey {
  const context: Context =  new Context("Deserializing module-type: deleteKey");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _publicKey: Types.Near_PublicKey | null = null;
  let _publicKeySet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "publicKey") {
      reader.context().push(field, "Types.Near_PublicKey", "type found, reading property");
      const object = Types.Near_PublicKey.read(reader);
      _publicKey = object;
      _publicKeySet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_publicKey || !_publicKeySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'publicKey: Near_PublicKey'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    publicKey: _publicKey,
    signerId: _signerId
  };
}

export function serializedeleteKeyResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: deleteKey");
  const sizer = new WriteSizer(sizerContext);
  writedeleteKeyResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: deleteKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writedeleteKeyResult(encoder, result);
  return buffer;
}

export function writedeleteKeyResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("deleteKey", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_createAndDeployContract {
  contractId: string;
  publicKey: Types.Near_PublicKey;
  data: ArrayBuffer;
  amount: BigInt;
  signerId: string;
}

export function deserializecreateAndDeployContractArgs(argsBuf: ArrayBuffer): Input_createAndDeployContract {
  const context: Context =  new Context("Deserializing module-type: createAndDeployContract");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _contractId: string = "";
  let _contractIdSet: bool = false;
  let _publicKey: Types.Near_PublicKey | null = null;
  let _publicKeySet: bool = false;
  let _data: ArrayBuffer = new ArrayBuffer(0);
  let _dataSet: bool = false;
  let _amount: BigInt = BigInt.fromUInt16(0);
  let _amountSet: bool = false;
  let _signerId: string = "";
  let _signerIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "contractId") {
      reader.context().push(field, "string", "type found, reading property");
      _contractId = reader.readString();
      _contractIdSet = true;
      reader.context().pop();
    }
    else if (field == "publicKey") {
      reader.context().push(field, "Types.Near_PublicKey", "type found, reading property");
      const object = Types.Near_PublicKey.read(reader);
      _publicKey = object;
      _publicKeySet = true;
      reader.context().pop();
    }
    else if (field == "data") {
      reader.context().push(field, "ArrayBuffer", "type found, reading property");
      _data = reader.readBytes();
      _dataSet = true;
      reader.context().pop();
    }
    else if (field == "amount") {
      reader.context().push(field, "BigInt", "type found, reading property");
      _amount = reader.readBigInt();
      _amountSet = true;
      reader.context().pop();
    }
    else if (field == "signerId") {
      reader.context().push(field, "string", "type found, reading property");
      _signerId = reader.readString();
      _signerIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_contractIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'contractId: String'"));
  }
  if (!_publicKey || !_publicKeySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'publicKey: Near_PublicKey'"));
  }
  if (!_dataSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'data: Bytes'"));
  }
  if (!_amountSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'amount: BigInt'"));
  }
  if (!_signerIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'signerId: String'"));
  }

  return {
    contractId: _contractId,
    publicKey: _publicKey,
    data: _data,
    amount: _amount,
    signerId: _signerId
  };
}

export function serializecreateAndDeployContractResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: createAndDeployContract");
  const sizer = new WriteSizer(sizerContext);
  writecreateAndDeployContractResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: createAndDeployContract");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writecreateAndDeployContractResult(encoder, result);
  return buffer;
}

export function writecreateAndDeployContractResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("createAndDeployContract", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}
