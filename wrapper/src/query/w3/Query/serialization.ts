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

export class Input_requestSignIn {
  contractId: string | null;
  methodNames: Array<string> | null;
  successUrl: string | null;
  failureUrl: string | null;
}

export function deserializerequestSignInArgs(argsBuf: ArrayBuffer): Input_requestSignIn {
  const context: Context =  new Context("Deserializing module-type: requestSignIn");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _contractId: string | null = null;
  let _methodNames: Array<string> | null = null;
  let _successUrl: string | null = null;
  let _failureUrl: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "contractId") {
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
    else if (field == "successUrl") {
      reader.context().push(field, "string | null", "type found, reading property");
      _successUrl = reader.readNullableString();
      reader.context().pop();
    }
    else if (field == "failureUrl") {
      reader.context().push(field, "string | null", "type found, reading property");
      _failureUrl = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }


  return {
    contractId: _contractId,
    methodNames: _methodNames,
    successUrl: _successUrl,
    failureUrl: _failureUrl
  };
}

export function serializerequestSignInResult(result: bool): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: requestSignIn");
  const sizer = new WriteSizer(sizerContext);
  writerequestSignInResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: requestSignIn");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writerequestSignInResult(encoder, result);
  return buffer;
}

export function writerequestSignInResult(writer: Write, result: bool): void {
  writer.context().push("requestSignIn", "bool", "writing property");
  writer.writeBool(result);
  writer.context().pop();
}

export class Input_signOut {
}

export function deserializesignOutArgs(argsBuf: ArrayBuffer): Input_signOut {
  const context: Context =  new Context("Deserializing module-type: signOut");

  return {
  };
}

export function serializesignOutResult(result: bool): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: signOut");
  const sizer = new WriteSizer(sizerContext);
  writesignOutResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: signOut");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesignOutResult(encoder, result);
  return buffer;
}

export function writesignOutResult(writer: Write, result: bool): void {
  writer.context().push("signOut", "bool", "writing property");
  writer.writeBool(result);
  writer.context().pop();
}

export class Input_isSignedIn {
}

export function deserializeisSignedInArgs(argsBuf: ArrayBuffer): Input_isSignedIn {
  const context: Context =  new Context("Deserializing module-type: isSignedIn");

  return {
  };
}

export function serializeisSignedInResult(result: bool): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: isSignedIn");
  const sizer = new WriteSizer(sizerContext);
  writeisSignedInResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: isSignedIn");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeisSignedInResult(encoder, result);
  return buffer;
}

export function writeisSignedInResult(writer: Write, result: bool): void {
  writer.context().push("isSignedIn", "bool", "writing property");
  writer.writeBool(result);
  writer.context().pop();
}

export class Input_getAccountId {
}

export function deserializegetAccountIdArgs(argsBuf: ArrayBuffer): Input_getAccountId {
  const context: Context =  new Context("Deserializing module-type: getAccountId");

  return {
  };
}

export function serializegetAccountIdResult(result: string | null): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: getAccountId");
  const sizer = new WriteSizer(sizerContext);
  writegetAccountIdResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: getAccountId");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetAccountIdResult(encoder, result);
  return buffer;
}

export function writegetAccountIdResult(writer: Write, result: string | null): void {
  writer.context().push("getAccountId", "string | null", "writing property");
  writer.writeNullableString(result);
  writer.context().pop();
}

export class Input_getAccountState {
  accountId: string;
}

export function deserializegetAccountStateArgs(argsBuf: ArrayBuffer): Input_getAccountState {
  const context: Context =  new Context("Deserializing module-type: getAccountState");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;

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
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    accountId: _accountId
  };
}

export function serializegetAccountStateResult(result: Types.AccountView): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: getAccountState");
  const sizer = new WriteSizer(sizerContext);
  writegetAccountStateResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: getAccountState");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetAccountStateResult(encoder, result);
  return buffer;
}

export function writegetAccountStateResult(writer: Write, result: Types.AccountView): void {
  writer.context().push("getAccountState", "Types.AccountView", "writing property");
  Types.AccountView.write(writer, result);
  writer.context().pop();
}

export class Input_viewContractCode {
  accountId: string;
}

export function deserializeviewContractCodeArgs(argsBuf: ArrayBuffer): Input_viewContractCode {
  const context: Context =  new Context("Deserializing module-type: viewContractCode");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;

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
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    accountId: _accountId
  };
}

export function serializeviewContractCodeResult(result: Types.ViewContractCode): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: viewContractCode");
  const sizer = new WriteSizer(sizerContext);
  writeviewContractCodeResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: viewContractCode");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeviewContractCodeResult(encoder, result);
  return buffer;
}

export function writeviewContractCodeResult(writer: Write, result: Types.ViewContractCode): void {
  writer.context().push("viewContractCode", "Types.ViewContractCode", "writing property");
  Types.ViewContractCode.write(writer, result);
  writer.context().pop();
}

export class Input_findAccessKey {
  accountId: string;
}

export function deserializefindAccessKeyArgs(argsBuf: ArrayBuffer): Input_findAccessKey {
  const context: Context =  new Context("Deserializing module-type: findAccessKey");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;

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
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    accountId: _accountId
  };
}

export function serializefindAccessKeyResult(result: Types.AccessKeyInfo | null): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: findAccessKey");
  const sizer = new WriteSizer(sizerContext);
  writefindAccessKeyResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: findAccessKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writefindAccessKeyResult(encoder, result);
  return buffer;
}

export function writefindAccessKeyResult(writer: Write, result: Types.AccessKeyInfo | null): void {
  writer.context().push("findAccessKey", "Types.AccessKeyInfo | null", "writing property");
  if (result) {
    Types.AccessKeyInfo.write(writer, result as Types.AccessKeyInfo);
  } else {
    writer.writeNil();
  }
  writer.context().pop();
}

export class Input_getPublicKey {
  accountId: string;
}

export function deserializegetPublicKeyArgs(argsBuf: ArrayBuffer): Input_getPublicKey {
  const context: Context =  new Context("Deserializing module-type: getPublicKey");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;

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
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    accountId: _accountId
  };
}

export function serializegetPublicKeyResult(result: Types.Near_PublicKey | null): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: getPublicKey");
  const sizer = new WriteSizer(sizerContext);
  writegetPublicKeyResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: getPublicKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetPublicKeyResult(encoder, result);
  return buffer;
}

export function writegetPublicKeyResult(writer: Write, result: Types.Near_PublicKey | null): void {
  writer.context().push("getPublicKey", "Types.Near_PublicKey | null", "writing property");
  if (result) {
    Types.Near_PublicKey.write(writer, result as Types.Near_PublicKey);
  } else {
    writer.writeNil();
  }
  writer.context().pop();
}

export class Input_getAccountBalance {
  accountId: string;
}

export function deserializegetAccountBalanceArgs(argsBuf: ArrayBuffer): Input_getAccountBalance {
  const context: Context =  new Context("Deserializing module-type: getAccountBalance");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;

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
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    accountId: _accountId
  };
}

export function serializegetAccountBalanceResult(result: Types.AccountBalance): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: getAccountBalance");
  const sizer = new WriteSizer(sizerContext);
  writegetAccountBalanceResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: getAccountBalance");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetAccountBalanceResult(encoder, result);
  return buffer;
}

export function writegetAccountBalanceResult(writer: Write, result: Types.AccountBalance): void {
  writer.context().push("getAccountBalance", "Types.AccountBalance", "writing property");
  Types.AccountBalance.write(writer, result);
  writer.context().pop();
}

export class Input_getAccountDetails {
  accountId: string;
}

export function deserializegetAccountDetailsArgs(argsBuf: ArrayBuffer): Input_getAccountDetails {
  const context: Context =  new Context("Deserializing module-type: getAccountDetails");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;

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
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    accountId: _accountId
  };
}

export function serializegetAccountDetailsResult(result: Array<Types.AccountAuthorizedApp>): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: getAccountDetails");
  const sizer = new WriteSizer(sizerContext);
  writegetAccountDetailsResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: getAccountDetails");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetAccountDetailsResult(encoder, result);
  return buffer;
}

export function writegetAccountDetailsResult(writer: Write, result: Array<Types.AccountAuthorizedApp>): void {
  writer.context().push("getAccountDetails", "Array<Types.AccountAuthorizedApp>", "writing property");
  writer.writeArray(result, (writer: Write, item: Types.AccountAuthorizedApp): void => {
    Types.AccountAuthorizedApp.write(writer, item);
  });
  writer.context().pop();
}

export class Input_getAccessKeys {
  accountId: string;
}

export function deserializegetAccessKeysArgs(argsBuf: ArrayBuffer): Input_getAccessKeys {
  const context: Context =  new Context("Deserializing module-type: getAccessKeys");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountId: string = "";
  let _accountIdSet: bool = false;

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
    reader.context().pop();
  }

  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    accountId: _accountId
  };
}

export function serializegetAccessKeysResult(result: Array<Types.AccessKeyInfo>): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: getAccessKeys");
  const sizer = new WriteSizer(sizerContext);
  writegetAccessKeysResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: getAccessKeys");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetAccessKeysResult(encoder, result);
  return buffer;
}

export function writegetAccessKeysResult(writer: Write, result: Array<Types.AccessKeyInfo>): void {
  writer.context().push("getAccessKeys", "Array<Types.AccessKeyInfo>", "writing property");
  writer.writeArray(result, (writer: Write, item: Types.AccessKeyInfo): void => {
    Types.AccessKeyInfo.write(writer, item);
  });
  writer.context().pop();
}

export class Input_viewFunction {
  contractId: string;
  methodName: string;
  args: JSON.Value;
}

export function deserializeviewFunctionArgs(argsBuf: ArrayBuffer): Input_viewFunction {
  const context: Context =  new Context("Deserializing module-type: viewFunction");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _contractId: string = "";
  let _contractIdSet: bool = false;
  let _methodName: string = "";
  let _methodNameSet: bool = false;
  let _args: JSON.Value = JSON.Value.Null();
  let _argsSet: bool = false;

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

  return {
    contractId: _contractId,
    methodName: _methodName,
    args: _args
  };
}

export function serializeviewFunctionResult(result: JSON.Value): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: viewFunction");
  const sizer = new WriteSizer(sizerContext);
  writeviewFunctionResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: viewFunction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeviewFunctionResult(encoder, result);
  return buffer;
}

export function writeviewFunctionResult(writer: Write, result: JSON.Value): void {
  writer.context().push("viewFunction", "JSON.Value", "writing property");
  writer.writeJSON(result);
  writer.context().pop();
}

export class Input_viewContractState {
  prefix: string;
  blockQuery: Types.BlockReference;
  accountId: string;
}

export function deserializeviewContractStateArgs(argsBuf: ArrayBuffer): Input_viewContractState {
  const context: Context =  new Context("Deserializing module-type: viewContractState");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _prefix: string = "";
  let _prefixSet: bool = false;
  let _blockQuery: Types.BlockReference | null = null;
  let _blockQuerySet: bool = false;
  let _accountId: string = "";
  let _accountIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "prefix") {
      reader.context().push(field, "string", "type found, reading property");
      _prefix = reader.readString();
      _prefixSet = true;
      reader.context().pop();
    }
    else if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockQuery = object;
      _blockQuerySet = true;
      reader.context().pop();
    }
    else if (field == "accountId") {
      reader.context().push(field, "string", "type found, reading property");
      _accountId = reader.readString();
      _accountIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_prefixSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'prefix: String'"));
  }
  if (!_blockQuery || !_blockQuerySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockQuery: BlockReference'"));
  }
  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    prefix: _prefix,
    blockQuery: _blockQuery,
    accountId: _accountId
  };
}

export function serializeviewContractStateResult(result: Types.ContractStateResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: viewContractState");
  const sizer = new WriteSizer(sizerContext);
  writeviewContractStateResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: viewContractState");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeviewContractStateResult(encoder, result);
  return buffer;
}

export function writeviewContractStateResult(writer: Write, result: Types.ContractStateResult): void {
  writer.context().push("viewContractState", "Types.ContractStateResult", "writing property");
  Types.ContractStateResult.write(writer, result);
  writer.context().pop();
}

export class Input_createTransaction {
  receiverId: string;
  actions: Array<Types.Near_Action>;
  signerId: string | null;
}

export function deserializecreateTransactionArgs(argsBuf: ArrayBuffer): Input_createTransaction {
  const context: Context =  new Context("Deserializing module-type: createTransaction");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _receiverId: string = "";
  let _receiverIdSet: bool = false;
  let _actions: Array<Types.Near_Action> = [];
  let _actionsSet: bool = false;
  let _signerId: string | null = null;

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
      reader.context().push(field, "string | null", "type found, reading property");
      _signerId = reader.readNullableString();
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

  return {
    receiverId: _receiverId,
    actions: _actions,
    signerId: _signerId
  };
}

export function serializecreateTransactionResult(result: Types.Near_Transaction): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: createTransaction");
  const sizer = new WriteSizer(sizerContext);
  writecreateTransactionResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: createTransaction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writecreateTransactionResult(encoder, result);
  return buffer;
}

export function writecreateTransactionResult(writer: Write, result: Types.Near_Transaction): void {
  writer.context().push("createTransaction", "Types.Near_Transaction", "writing property");
  Types.Near_Transaction.write(writer, result);
  writer.context().pop();
}

export class Input_signTransaction {
  transaction: Types.Near_Transaction;
}

export function deserializesignTransactionArgs(argsBuf: ArrayBuffer): Input_signTransaction {
  const context: Context =  new Context("Deserializing module-type: signTransaction");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _transaction: Types.Near_Transaction | null = null;
  let _transactionSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "transaction") {
      reader.context().push(field, "Types.Near_Transaction", "type found, reading property");
      const object = Types.Near_Transaction.read(reader);
      _transaction = object;
      _transactionSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_transaction || !_transactionSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'transaction: Near_Transaction'"));
  }

  return {
    transaction: _transaction
  };
}

export function serializesignTransactionResult(result: Types.Near_SignTransactionResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: signTransaction");
  const sizer = new WriteSizer(sizerContext);
  writesignTransactionResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: signTransaction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesignTransactionResult(encoder, result);
  return buffer;
}

export function writesignTransactionResult(writer: Write, result: Types.Near_SignTransactionResult): void {
  writer.context().push("signTransaction", "Types.Near_SignTransactionResult", "writing property");
  Types.Near_SignTransactionResult.write(writer, result);
  writer.context().pop();
}

export class Input_parseNearAmount {
  amount: string;
}

export function deserializeparseNearAmountArgs(argsBuf: ArrayBuffer): Input_parseNearAmount {
  const context: Context =  new Context("Deserializing module-type: parseNearAmount");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _amount: string = "";
  let _amountSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "amount") {
      reader.context().push(field, "string", "type found, reading property");
      _amount = reader.readString();
      _amountSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_amountSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'amount: String'"));
  }

  return {
    amount: _amount
  };
}

export function serializeparseNearAmountResult(result: string): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: parseNearAmount");
  const sizer = new WriteSizer(sizerContext);
  writeparseNearAmountResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: parseNearAmount");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeparseNearAmountResult(encoder, result);
  return buffer;
}

export function writeparseNearAmountResult(writer: Write, result: string): void {
  writer.context().push("parseNearAmount", "string", "writing property");
  writer.writeString(result);
  writer.context().pop();
}

export class Input_formatNearAmount {
  amount: string;
}

export function deserializeformatNearAmountArgs(argsBuf: ArrayBuffer): Input_formatNearAmount {
  const context: Context =  new Context("Deserializing module-type: formatNearAmount");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _amount: string = "";
  let _amountSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "amount") {
      reader.context().push(field, "string", "type found, reading property");
      _amount = reader.readString();
      _amountSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_amountSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'amount: String'"));
  }

  return {
    amount: _amount
  };
}

export function serializeformatNearAmountResult(result: string): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: formatNearAmount");
  const sizer = new WriteSizer(sizerContext);
  writeformatNearAmountResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: formatNearAmount");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeformatNearAmountResult(encoder, result);
  return buffer;
}

export function writeformatNearAmountResult(writer: Write, result: string): void {
  writer.context().push("formatNearAmount", "string", "writing property");
  writer.writeString(result);
  writer.context().pop();
}

export class Input_getBlock {
  blockQuery: Types.BlockReference;
}

export function deserializegetBlockArgs(argsBuf: ArrayBuffer): Input_getBlock {
  const context: Context =  new Context("Deserializing module-type: getBlock");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _blockQuery: Types.BlockReference | null = null;
  let _blockQuerySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockQuery = object;
      _blockQuerySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_blockQuery || !_blockQuerySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockQuery: BlockReference'"));
  }

  return {
    blockQuery: _blockQuery
  };
}

export function serializegetBlockResult(result: Types.BlockResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: getBlock");
  const sizer = new WriteSizer(sizerContext);
  writegetBlockResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: getBlock");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetBlockResult(encoder, result);
  return buffer;
}

export function writegetBlockResult(writer: Write, result: Types.BlockResult): void {
  writer.context().push("getBlock", "Types.BlockResult", "writing property");
  Types.BlockResult.write(writer, result);
  writer.context().pop();
}

export class Input_status {
}

export function deserializestatusArgs(argsBuf: ArrayBuffer): Input_status {
  const context: Context =  new Context("Deserializing module-type: status");

  return {
  };
}

export function serializestatusResult(result: Types.NodeStatusResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: status");
  const sizer = new WriteSizer(sizerContext);
  writestatusResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: status");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writestatusResult(encoder, result);
  return buffer;
}

export function writestatusResult(writer: Write, result: Types.NodeStatusResult): void {
  writer.context().push("status", "Types.NodeStatusResult", "writing property");
  Types.NodeStatusResult.write(writer, result);
  writer.context().pop();
}

export class Input_txStatus {
  txHash: string;
  accountId: string;
}

export function deserializetxStatusArgs(argsBuf: ArrayBuffer): Input_txStatus {
  const context: Context =  new Context("Deserializing module-type: txStatus");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _txHash: string = "";
  let _txHashSet: bool = false;
  let _accountId: string = "";
  let _accountIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "txHash") {
      reader.context().push(field, "string", "type found, reading property");
      _txHash = reader.readString();
      _txHashSet = true;
      reader.context().pop();
    }
    else if (field == "accountId") {
      reader.context().push(field, "string", "type found, reading property");
      _accountId = reader.readString();
      _accountIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_txHashSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'txHash: String'"));
  }
  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    txHash: _txHash,
    accountId: _accountId
  };
}

export function serializetxStatusResult(result: Types.Near_FinalExecutionOutcome): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: txStatus");
  const sizer = new WriteSizer(sizerContext);
  writetxStatusResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: txStatus");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writetxStatusResult(encoder, result);
  return buffer;
}

export function writetxStatusResult(writer: Write, result: Types.Near_FinalExecutionOutcome): void {
  writer.context().push("txStatus", "Types.Near_FinalExecutionOutcome", "writing property");
  Types.Near_FinalExecutionOutcome.write(writer, result);
  writer.context().pop();
}

export class Input_txStatusReceipts {
  txHash: string;
  accountId: string;
}

export function deserializetxStatusReceiptsArgs(argsBuf: ArrayBuffer): Input_txStatusReceipts {
  const context: Context =  new Context("Deserializing module-type: txStatusReceipts");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _txHash: string = "";
  let _txHashSet: bool = false;
  let _accountId: string = "";
  let _accountIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "txHash") {
      reader.context().push(field, "string", "type found, reading property");
      _txHash = reader.readString();
      _txHashSet = true;
      reader.context().pop();
    }
    else if (field == "accountId") {
      reader.context().push(field, "string", "type found, reading property");
      _accountId = reader.readString();
      _accountIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_txHashSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'txHash: String'"));
  }
  if (!_accountIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountId: String'"));
  }

  return {
    txHash: _txHash,
    accountId: _accountId
  };
}

export function serializetxStatusReceiptsResult(result: Types.Near_FinalExecutionOutcomeWithReceipts): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: txStatusReceipts");
  const sizer = new WriteSizer(sizerContext);
  writetxStatusReceiptsResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: txStatusReceipts");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writetxStatusReceiptsResult(encoder, result);
  return buffer;
}

export function writetxStatusReceiptsResult(writer: Write, result: Types.Near_FinalExecutionOutcomeWithReceipts): void {
  writer.context().push("txStatusReceipts", "Types.Near_FinalExecutionOutcomeWithReceipts", "writing property");
  Types.Near_FinalExecutionOutcomeWithReceipts.write(writer, result);
  writer.context().pop();
}

export class Input_blockChanges {
  blockQuery: Types.BlockReference;
}

export function deserializeblockChangesArgs(argsBuf: ArrayBuffer): Input_blockChanges {
  const context: Context =  new Context("Deserializing module-type: blockChanges");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _blockQuery: Types.BlockReference | null = null;
  let _blockQuerySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockQuery = object;
      _blockQuerySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_blockQuery || !_blockQuerySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockQuery: BlockReference'"));
  }

  return {
    blockQuery: _blockQuery
  };
}

export function serializeblockChangesResult(result: Types.BlockChangeResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: blockChanges");
  const sizer = new WriteSizer(sizerContext);
  writeblockChangesResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: blockChanges");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeblockChangesResult(encoder, result);
  return buffer;
}

export function writeblockChangesResult(writer: Write, result: Types.BlockChangeResult): void {
  writer.context().push("blockChanges", "Types.BlockChangeResult", "writing property");
  Types.BlockChangeResult.write(writer, result);
  writer.context().pop();
}

export class Input_chunk {
  chunkId: string;
}

export function deserializechunkArgs(argsBuf: ArrayBuffer): Input_chunk {
  const context: Context =  new Context("Deserializing module-type: chunk");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _chunkId: string = "";
  let _chunkIdSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "chunkId") {
      reader.context().push(field, "string", "type found, reading property");
      _chunkId = reader.readString();
      _chunkIdSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_chunkIdSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'chunkId: String'"));
  }

  return {
    chunkId: _chunkId
  };
}

export function serializechunkResult(result: Types.ChunkResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: chunk");
  const sizer = new WriteSizer(sizerContext);
  writechunkResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: chunk");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writechunkResult(encoder, result);
  return buffer;
}

export function writechunkResult(writer: Write, result: Types.ChunkResult): void {
  writer.context().push("chunk", "Types.ChunkResult", "writing property");
  Types.ChunkResult.write(writer, result);
  writer.context().pop();
}

export class Input_validators {
  blockId: string | null;
}

export function deserializevalidatorsArgs(argsBuf: ArrayBuffer): Input_validators {
  const context: Context =  new Context("Deserializing module-type: validators");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _blockId: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "blockId") {
      reader.context().push(field, "string | null", "type found, reading property");
      _blockId = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }


  return {
    blockId: _blockId
  };
}

export function serializevalidatorsResult(result: Types.EpochValidatorInfo): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: validators");
  const sizer = new WriteSizer(sizerContext);
  writevalidatorsResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: validators");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writevalidatorsResult(encoder, result);
  return buffer;
}

export function writevalidatorsResult(writer: Write, result: Types.EpochValidatorInfo): void {
  writer.context().push("validators", "Types.EpochValidatorInfo", "writing property");
  Types.EpochValidatorInfo.write(writer, result);
  writer.context().pop();
}

export class Input_experimental_protocolConfig {
  blockReference: Types.BlockReference;
}

export function deserializeexperimental_protocolConfigArgs(argsBuf: ArrayBuffer): Input_experimental_protocolConfig {
  const context: Context =  new Context("Deserializing module-type: experimental_protocolConfig");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _blockReference: Types.BlockReference | null = null;
  let _blockReferenceSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "blockReference") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockReference = object;
      _blockReferenceSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_blockReference || !_blockReferenceSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockReference: BlockReference'"));
  }

  return {
    blockReference: _blockReference
  };
}

export function serializeexperimental_protocolConfigResult(result: Types.NearProtocolConfig): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: experimental_protocolConfig");
  const sizer = new WriteSizer(sizerContext);
  writeexperimental_protocolConfigResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: experimental_protocolConfig");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeexperimental_protocolConfigResult(encoder, result);
  return buffer;
}

export function writeexperimental_protocolConfigResult(writer: Write, result: Types.NearProtocolConfig): void {
  writer.context().push("experimental_protocolConfig", "Types.NearProtocolConfig", "writing property");
  Types.NearProtocolConfig.write(writer, result);
  writer.context().pop();
}

export class Input_lightClientProof {
  request: Types.LightClientProofRequest;
}

export function deserializelightClientProofArgs(argsBuf: ArrayBuffer): Input_lightClientProof {
  const context: Context =  new Context("Deserializing module-type: lightClientProof");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _request: Types.LightClientProofRequest | null = null;
  let _requestSet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "request") {
      reader.context().push(field, "Types.LightClientProofRequest", "type found, reading property");
      const object = Types.LightClientProofRequest.read(reader);
      _request = object;
      _requestSet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_request || !_requestSet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'request: LightClientProofRequest'"));
  }

  return {
    request: _request
  };
}

export function serializelightClientProofResult(result: Types.LightClientProof): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: lightClientProof");
  const sizer = new WriteSizer(sizerContext);
  writelightClientProofResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: lightClientProof");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writelightClientProofResult(encoder, result);
  return buffer;
}

export function writelightClientProofResult(writer: Write, result: Types.LightClientProof): void {
  writer.context().push("lightClientProof", "Types.LightClientProof", "writing property");
  Types.LightClientProof.write(writer, result);
  writer.context().pop();
}

export class Input_accessKeyChanges {
  accountIdArray: Array<string>;
  blockQuery: Types.BlockReference;
}

export function deserializeaccessKeyChangesArgs(argsBuf: ArrayBuffer): Input_accessKeyChanges {
  const context: Context =  new Context("Deserializing module-type: accessKeyChanges");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountIdArray: Array<string> = [];
  let _accountIdArraySet: bool = false;
  let _blockQuery: Types.BlockReference | null = null;
  let _blockQuerySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "accountIdArray") {
      reader.context().push(field, "Array<string>", "type found, reading property");
      _accountIdArray = reader.readArray((reader: Read): string => {
        return reader.readString();
      });
      _accountIdArraySet = true;
      reader.context().pop();
    }
    else if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockQuery = object;
      _blockQuerySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_accountIdArraySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountIdArray: [String]'"));
  }
  if (!_blockQuery || !_blockQuerySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockQuery: BlockReference'"));
  }

  return {
    accountIdArray: _accountIdArray,
    blockQuery: _blockQuery
  };
}

export function serializeaccessKeyChangesResult(result: Types.ChangeResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: accessKeyChanges");
  const sizer = new WriteSizer(sizerContext);
  writeaccessKeyChangesResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: accessKeyChanges");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeaccessKeyChangesResult(encoder, result);
  return buffer;
}

export function writeaccessKeyChangesResult(writer: Write, result: Types.ChangeResult): void {
  writer.context().push("accessKeyChanges", "Types.ChangeResult", "writing property");
  Types.ChangeResult.write(writer, result);
  writer.context().pop();
}

export class Input_singleAccessKeyChanges {
  accessKeyArray: Array<Types.AccessKeyWithPublicKey>;
  blockQuery: Types.BlockReference | null;
}

export function deserializesingleAccessKeyChangesArgs(argsBuf: ArrayBuffer): Input_singleAccessKeyChanges {
  const context: Context =  new Context("Deserializing module-type: singleAccessKeyChanges");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accessKeyArray: Array<Types.AccessKeyWithPublicKey> = [];
  let _accessKeyArraySet: bool = false;
  let _blockQuery: Types.BlockReference | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "accessKeyArray") {
      reader.context().push(field, "Array<Types.AccessKeyWithPublicKey>", "type found, reading property");
      _accessKeyArray = reader.readArray((reader: Read): Types.AccessKeyWithPublicKey => {
        const object = Types.AccessKeyWithPublicKey.read(reader);
        return object;
      });
      _accessKeyArraySet = true;
      reader.context().pop();
    }
    else if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference | null", "type found, reading property");
      let object: Types.BlockReference | null = null;
      if (!reader.isNextNil()) {
        object = Types.BlockReference.read(reader);
      }
      _blockQuery = object;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_accessKeyArraySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accessKeyArray: [AccessKeyWithPublicKey]'"));
  }

  return {
    accessKeyArray: _accessKeyArray,
    blockQuery: _blockQuery
  };
}

export function serializesingleAccessKeyChangesResult(result: Types.ChangeResult | null): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: singleAccessKeyChanges");
  const sizer = new WriteSizer(sizerContext);
  writesingleAccessKeyChangesResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: singleAccessKeyChanges");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesingleAccessKeyChangesResult(encoder, result);
  return buffer;
}

export function writesingleAccessKeyChangesResult(writer: Write, result: Types.ChangeResult | null): void {
  writer.context().push("singleAccessKeyChanges", "Types.ChangeResult | null", "writing property");
  if (result) {
    Types.ChangeResult.write(writer, result as Types.ChangeResult);
  } else {
    writer.writeNil();
  }
  writer.context().pop();
}

export class Input_accountChanges {
  accountIdArray: Array<string>;
  blockQuery: Types.BlockReference;
}

export function deserializeaccountChangesArgs(argsBuf: ArrayBuffer): Input_accountChanges {
  const context: Context =  new Context("Deserializing module-type: accountChanges");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountIdArray: Array<string> = [];
  let _accountIdArraySet: bool = false;
  let _blockQuery: Types.BlockReference | null = null;
  let _blockQuerySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "accountIdArray") {
      reader.context().push(field, "Array<string>", "type found, reading property");
      _accountIdArray = reader.readArray((reader: Read): string => {
        return reader.readString();
      });
      _accountIdArraySet = true;
      reader.context().pop();
    }
    else if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockQuery = object;
      _blockQuerySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_accountIdArraySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountIdArray: [String]'"));
  }
  if (!_blockQuery || !_blockQuerySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockQuery: BlockReference'"));
  }

  return {
    accountIdArray: _accountIdArray,
    blockQuery: _blockQuery
  };
}

export function serializeaccountChangesResult(result: Types.ChangeResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: accountChanges");
  const sizer = new WriteSizer(sizerContext);
  writeaccountChangesResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: accountChanges");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeaccountChangesResult(encoder, result);
  return buffer;
}

export function writeaccountChangesResult(writer: Write, result: Types.ChangeResult): void {
  writer.context().push("accountChanges", "Types.ChangeResult", "writing property");
  Types.ChangeResult.write(writer, result);
  writer.context().pop();
}

export class Input_contractStateChanges {
  accountIdArray: Array<string>;
  blockQuery: Types.BlockReference;
  keyPrefix: string | null;
}

export function deserializecontractStateChangesArgs(argsBuf: ArrayBuffer): Input_contractStateChanges {
  const context: Context =  new Context("Deserializing module-type: contractStateChanges");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountIdArray: Array<string> = [];
  let _accountIdArraySet: bool = false;
  let _blockQuery: Types.BlockReference | null = null;
  let _blockQuerySet: bool = false;
  let _keyPrefix: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "accountIdArray") {
      reader.context().push(field, "Array<string>", "type found, reading property");
      _accountIdArray = reader.readArray((reader: Read): string => {
        return reader.readString();
      });
      _accountIdArraySet = true;
      reader.context().pop();
    }
    else if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockQuery = object;
      _blockQuerySet = true;
      reader.context().pop();
    }
    else if (field == "keyPrefix") {
      reader.context().push(field, "string | null", "type found, reading property");
      _keyPrefix = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_accountIdArraySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountIdArray: [String]'"));
  }
  if (!_blockQuery || !_blockQuerySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockQuery: BlockReference'"));
  }

  return {
    accountIdArray: _accountIdArray,
    blockQuery: _blockQuery,
    keyPrefix: _keyPrefix
  };
}

export function serializecontractStateChangesResult(result: Types.ChangeResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: contractStateChanges");
  const sizer = new WriteSizer(sizerContext);
  writecontractStateChangesResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: contractStateChanges");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writecontractStateChangesResult(encoder, result);
  return buffer;
}

export function writecontractStateChangesResult(writer: Write, result: Types.ChangeResult): void {
  writer.context().push("contractStateChanges", "Types.ChangeResult", "writing property");
  Types.ChangeResult.write(writer, result);
  writer.context().pop();
}

export class Input_contractCodeChanges {
  accountIdArray: Array<string>;
  blockQuery: Types.BlockReference;
}

export function deserializecontractCodeChangesArgs(argsBuf: ArrayBuffer): Input_contractCodeChanges {
  const context: Context =  new Context("Deserializing module-type: contractCodeChanges");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _accountIdArray: Array<string> = [];
  let _accountIdArraySet: bool = false;
  let _blockQuery: Types.BlockReference | null = null;
  let _blockQuerySet: bool = false;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "accountIdArray") {
      reader.context().push(field, "Array<string>", "type found, reading property");
      _accountIdArray = reader.readArray((reader: Read): string => {
        return reader.readString();
      });
      _accountIdArraySet = true;
      reader.context().pop();
    }
    else if (field == "blockQuery") {
      reader.context().push(field, "Types.BlockReference", "type found, reading property");
      const object = Types.BlockReference.read(reader);
      _blockQuery = object;
      _blockQuerySet = true;
      reader.context().pop();
    }
    reader.context().pop();
  }

  if (!_accountIdArraySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'accountIdArray: [String]'"));
  }
  if (!_blockQuery || !_blockQuerySet) {
    throw new Error(reader.context().printWithContext("Missing required argument: 'blockQuery: BlockReference'"));
  }

  return {
    accountIdArray: _accountIdArray,
    blockQuery: _blockQuery
  };
}

export function serializecontractCodeChangesResult(result: Types.ChangeResult): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: contractCodeChanges");
  const sizer = new WriteSizer(sizerContext);
  writecontractCodeChangesResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: contractCodeChanges");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writecontractCodeChangesResult(encoder, result);
  return buffer;
}

export function writecontractCodeChangesResult(writer: Write, result: Types.ChangeResult): void {
  writer.context().push("contractCodeChanges", "Types.ChangeResult", "writing property");
  Types.ChangeResult.write(writer, result);
  writer.context().pop();
}

export class Input_gasPrice {
  blockId: string | null;
}

export function deserializegasPriceArgs(argsBuf: ArrayBuffer): Input_gasPrice {
  const context: Context =  new Context("Deserializing module-type: gasPrice");
  const reader = new ReadDecoder(argsBuf, context);
  let numFields = reader.readMapLength();

  let _blockId: string | null = null;

  while (numFields > 0) {
    numFields--;
    const field = reader.readString();

    reader.context().push(field, "unknown", "searching for property type");
    if (field == "blockId") {
      reader.context().push(field, "string | null", "type found, reading property");
      _blockId = reader.readNullableString();
      reader.context().pop();
    }
    reader.context().pop();
  }


  return {
    blockId: _blockId
  };
}

export function serializegasPriceResult(result: BigInt): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) module-type: gasPrice");
  const sizer = new WriteSizer(sizerContext);
  writegasPriceResult(sizer, result);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) module-type: gasPrice");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegasPriceResult(encoder, result);
  return buffer;
}

export function writegasPriceResult(writer: Write, result: BigInt): void {
  writer.context().push("gasPrice", "BigInt", "writing property");
  writer.writeBigInt(result);
  writer.context().pop();
}
