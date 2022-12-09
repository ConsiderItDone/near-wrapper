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

export class Input_requestSignIn {
  contractId: string | null;
  methodNames: Array<string> | null;
  successUrl: string | null;
  failureUrl: string | null;
}

export function serializerequestSignInArgs(input: Input_requestSignIn): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: requestSignIn");
  const sizer = new WriteSizer(sizerContext);
  writerequestSignInArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: requestSignIn");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writerequestSignInArgs(encoder, input);
  return buffer;
}

export function writerequestSignInArgs(
  writer: Write,
  input: Input_requestSignIn
): void {
  writer.writeMapLength(4);
  writer.context().push("contractId", "string | null", "writing property");
  writer.writeString("contractId");
  writer.writeNullableString(input.contractId);
  writer.context().pop();
  writer.context().push("methodNames", "Array<string> | null", "writing property");
  writer.writeString("methodNames");
  writer.writeNullableArray(input.methodNames, (writer: Write, item: string): void => {
    writer.writeString(item);
  });
  writer.context().pop();
  writer.context().push("successUrl", "string | null", "writing property");
  writer.writeString("successUrl");
  writer.writeNullableString(input.successUrl);
  writer.context().pop();
  writer.context().push("failureUrl", "string | null", "writing property");
  writer.writeString("failureUrl");
  writer.writeNullableString(input.failureUrl);
  writer.context().pop();
}

export function deserializerequestSignInResult(buffer: ArrayBuffer): bool {
  const context: Context =  new Context("Deserializing imported module-type: requestSignIn");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("requestSignIn", "bool", "reading function output");
  const res: bool = reader.readBool();
  reader.context().pop();

  return res;
}

export class Input_signOut {
}

export function serializesignOutArgs(input: Input_signOut): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: signOut");
  const sizer = new WriteSizer(sizerContext);
  writesignOutArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: signOut");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesignOutArgs(encoder, input);
  return buffer;
}

export function writesignOutArgs(
  writer: Write,
  input: Input_signOut
): void {
  writer.writeMapLength(0);
}

export function deserializesignOutResult(buffer: ArrayBuffer): bool {
  const context: Context =  new Context("Deserializing imported module-type: signOut");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("signOut", "bool", "reading function output");
  const res: bool = reader.readBool();
  reader.context().pop();

  return res;
}

export class Input_isSignedIn {
}

export function serializeisSignedInArgs(input: Input_isSignedIn): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: isSignedIn");
  const sizer = new WriteSizer(sizerContext);
  writeisSignedInArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: isSignedIn");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writeisSignedInArgs(encoder, input);
  return buffer;
}

export function writeisSignedInArgs(
  writer: Write,
  input: Input_isSignedIn
): void {
  writer.writeMapLength(0);
}

export function deserializeisSignedInResult(buffer: ArrayBuffer): bool {
  const context: Context =  new Context("Deserializing imported module-type: isSignedIn");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("isSignedIn", "bool", "reading function output");
  const res: bool = reader.readBool();
  reader.context().pop();

  return res;
}

export class Input_getAccountId {
}

export function serializegetAccountIdArgs(input: Input_getAccountId): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: getAccountId");
  const sizer = new WriteSizer(sizerContext);
  writegetAccountIdArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: getAccountId");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetAccountIdArgs(encoder, input);
  return buffer;
}

export function writegetAccountIdArgs(
  writer: Write,
  input: Input_getAccountId
): void {
  writer.writeMapLength(0);
}

export function deserializegetAccountIdResult(buffer: ArrayBuffer): string | null {
  const context: Context =  new Context("Deserializing imported module-type: getAccountId");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("getAccountId", "string | null", "reading function output");
  const res: string | null = reader.readNullableString();
  reader.context().pop();

  return res;
}

export class Input_getPublicKey {
  accountId: string;
}

export function serializegetPublicKeyArgs(input: Input_getPublicKey): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: getPublicKey");
  const sizer = new WriteSizer(sizerContext);
  writegetPublicKeyArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: getPublicKey");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writegetPublicKeyArgs(encoder, input);
  return buffer;
}

export function writegetPublicKeyArgs(
  writer: Write,
  input: Input_getPublicKey
): void {
  writer.writeMapLength(1);
  writer.context().push("accountId", "string", "writing property");
  writer.writeString("accountId");
  writer.writeString(input.accountId);
  writer.context().pop();
}

export function deserializegetPublicKeyResult(buffer: ArrayBuffer): Types.Near_PublicKey | null {
  const context: Context =  new Context("Deserializing imported module-type: getPublicKey");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("getPublicKey", "Types.Near_PublicKey | null", "reading function output");
  let object: Types.Near_PublicKey | null = null;
  if (!reader.isNextNil()) {
    object = Types.Near_PublicKey.read(reader);
  }
  const res: Types.Near_PublicKey | null =  object;
  reader.context().pop();

  return res;
}

export class Input_signMessage {
  message: ArrayBuffer;
  signerId: string;
}

export function serializesignMessageArgs(input: Input_signMessage): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: signMessage");
  const sizer = new WriteSizer(sizerContext);
  writesignMessageArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: signMessage");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesignMessageArgs(encoder, input);
  return buffer;
}

export function writesignMessageArgs(
  writer: Write,
  input: Input_signMessage
): void {
  writer.writeMapLength(2);
  writer.context().push("message", "ArrayBuffer", "writing property");
  writer.writeString("message");
  writer.writeBytes(input.message);
  writer.context().pop();
  writer.context().push("signerId", "string", "writing property");
  writer.writeString("signerId");
  writer.writeString(input.signerId);
  writer.context().pop();
}

export function deserializesignMessageResult(buffer: ArrayBuffer): Types.Near_Signature {
  const context: Context =  new Context("Deserializing imported module-type: signMessage");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("signMessage", "Types.Near_Signature", "reading function output");
  const object = Types.Near_Signature.read(reader);
  const res: Types.Near_Signature =  object;
  reader.context().pop();

  return res;
}

export class Input_createTransactionWithWallet {
  receiverId: string;
  actions: Array<Types.Near_Action>;
}

export function serializecreateTransactionWithWalletArgs(input: Input_createTransactionWithWallet): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: createTransactionWithWallet");
  const sizer = new WriteSizer(sizerContext);
  writecreateTransactionWithWalletArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: createTransactionWithWallet");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writecreateTransactionWithWalletArgs(encoder, input);
  return buffer;
}

export function writecreateTransactionWithWalletArgs(
  writer: Write,
  input: Input_createTransactionWithWallet
): void {
  writer.writeMapLength(2);
  writer.context().push("receiverId", "string", "writing property");
  writer.writeString("receiverId");
  writer.writeString(input.receiverId);
  writer.context().pop();
  writer.context().push("actions", "Array<Types.Near_Action>", "writing property");
  writer.writeString("actions");
  writer.writeArray(input.actions, (writer: Write, item: Types.Near_Action): void => {
    Types.Near_Action.write(writer, item);
  });
  writer.context().pop();
}

export function deserializecreateTransactionWithWalletResult(buffer: ArrayBuffer): Types.Near_Transaction {
  const context: Context =  new Context("Deserializing imported module-type: createTransactionWithWallet");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("createTransactionWithWallet", "Types.Near_Transaction", "reading function output");
  const object = Types.Near_Transaction.read(reader);
  const res: Types.Near_Transaction =  object;
  reader.context().pop();

  return res;
}

export class Input_signTransaction {
  transaction: Types.Near_Transaction;
}

export function serializesignTransactionArgs(input: Input_signTransaction): ArrayBuffer {
  const sizerContext: Context = new Context("Serializing (sizing) imported module-type: signTransaction");
  const sizer = new WriteSizer(sizerContext);
  writesignTransactionArgs(sizer, input);
  const buffer = new ArrayBuffer(sizer.length);
  const encoderContext: Context = new Context("Serializing (encoding) imported module-type: signTransaction");
  const encoder = new WriteEncoder(buffer, sizer, encoderContext);
  writesignTransactionArgs(encoder, input);
  return buffer;
}

export function writesignTransactionArgs(
  writer: Write,
  input: Input_signTransaction
): void {
  writer.writeMapLength(1);
  writer.context().push("transaction", "Types.Near_Transaction", "writing property");
  writer.writeString("transaction");
  Types.Near_Transaction.write(writer, input.transaction);
  writer.context().pop();
}

export function deserializesignTransactionResult(buffer: ArrayBuffer): Types.Near_SignTransactionResult {
  const context: Context =  new Context("Deserializing imported module-type: signTransaction");
  const reader = new ReadDecoder(buffer, context);

  reader.context().push("signTransaction", "Types.Near_SignTransactionResult", "reading function output");
  const object = Types.Near_SignTransactionResult.read(reader);
  const res: Types.Near_SignTransactionResult =  object;
  reader.context().pop();

  return res;
}
