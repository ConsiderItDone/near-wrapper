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
import * as Types from "../..";

export class Input_sendJsonRpc {
  method: string;
  params: JSON.Value;
}

export function serializesendJsonRpcArgs(input: Input_sendJsonRpc): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: sendJsonRpc");
  const sizer = new WriteSizer(sizerContext);
  writesendJsonRpcArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: sendJsonRpc");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesendJsonRpcArgs(encoder, input);
  return buffer;
}

export function writesendJsonRpcArgs(
  writer: Write,
  input: Input_sendJsonRpc
): void {
  writer.writeMapLength(2);
  writer.context().push("method", "string", "writing property");
  writer.writeString("method");
  writer.writeString(input.method);
  writer.context().pop();
  writer.context().push("params", "JSON.Value", "writing property");
  writer.writeString("params");
  writer.writeJSON(input.params);
  writer.context().pop();
}

export function deserializesendJsonRpcResult(buffer: ArrayBuffer): JSON.Value {
  const context: Context =  new Context("Deserializing imported module-type: sendJsonRpc");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("sendJsonRpc", "JSON.Value", "reading function output");
  const res: JSON.Value = reader.readJSON();
  reader.context().pop();

  return res;
}

export class Input_requestSignTransactions {
  transactions: Array<Types.Near_Transaction>;
  callbackUrl: string | null;
  meta: string | null;
}

export function serializerequestSignTransactionsArgs(input: Input_requestSignTransactions): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: requestSignTransactions");
  const sizer = new WriteSizer(sizerContext);
  writerequestSignTransactionsArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: requestSignTransactions");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writerequestSignTransactionsArgs(encoder, input);
  return buffer;
}

export function writerequestSignTransactionsArgs(
  writer: Write,
  input: Input_requestSignTransactions
): void {
  writer.writeMapLength(3);
  writer.context().push("transactions", "Array<Types.Near_Transaction>", "writing property");
  writer.writeString("transactions");
  writer.writeArray(input.transactions, (writer: Write, item: Types.Near_Transaction): void => {
    Types.Near_Transaction.write(writer, item);
  });
  writer.context().pop();
  writer.context().push("callbackUrl", "string | null", "writing property");
  writer.writeString("callbackUrl");
  writer.writeNullableString(input.callbackUrl);
  writer.context().pop();
  writer.context().push("meta", "string | null", "writing property");
  writer.writeString("meta");
  writer.writeNullableString(input.meta);
  writer.context().pop();
}

export function deserializerequestSignTransactionsResult(buffer: ArrayBuffer): bool {
  const context: Context =  new Context("Deserializing imported module-type: requestSignTransactions");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("requestSignTransactions", "bool", "reading function output");
  const res: bool = reader.readBool();
  reader.context().pop();

  return res;
}

export class Input_createKey {
  accountId: string;
  networkId: string;
}

export function serializecreateKeyArgs(input: Input_createKey): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: createKey");
  const sizer = new WriteSizer(sizerContext);
  writecreateKeyArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: createKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writecreateKeyArgs(encoder, input);
  return buffer;
}

export function writecreateKeyArgs(
  writer: Write,
  input: Input_createKey
): void {
  writer.writeMapLength(2);
  writer.context().push("accountId", "string", "writing property");
  writer.writeString("accountId");
  writer.writeString(input.accountId);
  writer.context().pop();
  writer.context().push("networkId", "string", "writing property");
  writer.writeString("networkId");
  writer.writeString(input.networkId);
  writer.context().pop();
}

export function deserializecreateKeyResult(buffer: ArrayBuffer): Types.Near_PublicKey {
  const context: Context =  new Context("Deserializing imported module-type: createKey");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("createKey", "Types.Near_PublicKey", "reading function output");
  const object = Types.Near_PublicKey.read(reader);
  const res: Types.Near_PublicKey =  object;
  reader.context().pop();

  return res;
}

export class Input_sendTransaction {
  signedTx: Types.Near_SignedTransaction;
}

export function serializesendTransactionArgs(input: Input_sendTransaction): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: sendTransaction");
  const sizer = new WriteSizer(sizerContext);
  writesendTransactionArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: sendTransaction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesendTransactionArgs(encoder, input);
  return buffer;
}

export function writesendTransactionArgs(
  writer: Write,
  input: Input_sendTransaction
): void {
  writer.writeMapLength(1);
  writer.context().push("signedTx", "Types.Near_SignedTransaction", "writing property");
  writer.writeString("signedTx");
  Types.Near_SignedTransaction.write(writer, input.signedTx);
  writer.context().pop();
}

export function deserializesendTransactionResult(buffer: ArrayBuffer): Types.Near_FinalExecutionOutcome {
  const context: Context =  new Context("Deserializing imported module-type: sendTransaction");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("sendTransaction", "Types.Near_FinalExecutionOutcome", "reading function output");
  const object = Types.Near_FinalExecutionOutcome.read(reader);
  const res: Types.Near_FinalExecutionOutcome =  object;
  reader.context().pop();

  return res;
}

export class Input_sendTransactionAsync {
  signedTx: Types.Near_SignedTransaction;
}

export function serializesendTransactionAsyncArgs(input: Input_sendTransactionAsync): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: sendTransactionAsync");
  const sizer = new WriteSizer(sizerContext);
  writesendTransactionAsyncArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: sendTransactionAsync");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesendTransactionAsyncArgs(encoder, input);
  return buffer;
}

export function writesendTransactionAsyncArgs(
  writer: Write,
  input: Input_sendTransactionAsync
): void {
  writer.writeMapLength(1);
  writer.context().push("signedTx", "Types.Near_SignedTransaction", "writing property");
  writer.writeString("signedTx");
  Types.Near_SignedTransaction.write(writer, input.signedTx);
  writer.context().pop();
}

export function deserializesendTransactionAsyncResult(buffer: ArrayBuffer): string {
  const context: Context =  new Context("Deserializing imported module-type: sendTransactionAsync");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("sendTransactionAsync", "string", "reading function output");
  const res: string = reader.readString();
  reader.context().pop();

  return res;
}
