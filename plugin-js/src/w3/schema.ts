export const schema: string = `### Web3API Header START ###
scalar UInt
scalar UInt8
scalar UInt16
scalar UInt32
scalar Int
scalar Int8
scalar Int16
scalar Int32
scalar Bytes
scalar BigInt
scalar JSON
scalar Map

directive @imported(
  uri: String!
  namespace: String!
  nativeType: String!
) on OBJECT | ENUM

directive @imports(
  types: [String!]!
) on OBJECT

directive @capability(
  type: String!
  uri: String!
  namespace: String!
) repeatable on OBJECT

directive @enabled_interface on OBJECT

directive @annotate(type: String!) on FIELD

### Web3API Header END ###

type Query {
  requestSignIn(
    contractId: String
    methodNames: [String!]
    successUrl: String
    failureUrl: String
  ): Boolean!

  signOut: Boolean!

  isSignedIn: Boolean!

  getAccountId: String

  getPublicKey(
    accountId: String!
  ): PublicKey

  signMessage(
    message: Bytes!
    signerId: String!
  ): Signature!

  """
  Creates a transaction.
If signerId is provided, the transaction will be signed using data from the KeyStore in the plugin config.
Otherwise, wallet authorization is expected.
  """
  createTransactionWithWallet(
    receiverId: String!
    actions: [Action!]!
  ): Transaction!

  signTransaction(
    transaction: Transaction!
  ): SignTransactionResult!
}

type Mutation {
  sendJsonRpc(
    method: String!
    params: JSON!
  ): JSON!

  requestSignTransactions(
    transactions: [Transaction!]!
    callbackUrl: String
    meta: String
  ): Boolean!

  createKey(
    accountId: String!
    networkId: String!
  ): PublicKey!

  sendTransaction(
    signedTx: SignedTransaction!
  ): FinalExecutionOutcome!

  sendTransactionAsync(
    signedTx: SignedTransaction!
  ): String!
}

type PublicKey {
  keyType: KeyType!
  data: Bytes!
}

type AccessKeyPermission {
  _: String
  receiverId: String
  methodNames: [String!]
  allowance: BigInt
}

type FullAccessPermission {
  _: String!
}

type FunctionCallPermission {
  receiverId: String!
  methodNames: [String!]!
  allowance: BigInt
}

type AccessKey {
  nonce: BigInt!
  permission: AccessKeyPermission!
}

type AccessKeyInfo {
  publicKey: PublicKey!
  accessKey: AccessKey!
}

type Action {
  code: Bytes
  methodName: String
  args: Bytes
  gas: BigInt
  deposit: BigInt
  stake: BigInt
  publicKey: PublicKey
  accessKey: AccessKey
  beneficiaryId: String
}

type FunctionCall implements Action {
  code: Bytes
  methodName: String
  args: Bytes
  gas: BigInt
  deposit: BigInt
  stake: BigInt
  publicKey: PublicKey
  accessKey: AccessKey
  beneficiaryId: String
}

type Stake implements Action {
  code: Bytes
  methodName: String
  args: Bytes
  gas: BigInt
  deposit: BigInt
  stake: BigInt
  publicKey: PublicKey
  accessKey: AccessKey
  beneficiaryId: String
}

type DeleteKey implements Action {
  code: Bytes
  methodName: String
  args: Bytes
  gas: BigInt
  deposit: BigInt
  stake: BigInt
  publicKey: PublicKey
  accessKey: AccessKey
  beneficiaryId: String
}

type DeleteAccount implements Action {
  code: Bytes
  methodName: String
  args: Bytes
  gas: BigInt
  deposit: BigInt
  stake: BigInt
  publicKey: PublicKey
  accessKey: AccessKey
  beneficiaryId: String
}

type CreateAccount

type AddKey {
  publicKey: PublicKey!
  accessKey: AccessKey!
}

type DeployContract {
  code: Bytes!
}

type Transfer {
  deposit: BigInt!
}

type Transaction {
  signerId: String!
  publicKey: PublicKey!
  nonce: BigInt!
  receiverId: String!
  actions: [Action!]!
  blockHash: Bytes
  hash: String
}

type Signature {
  keyType: KeyType!
  data: Bytes!
}

type SignedTransaction {
  transaction: Transaction!
  signature: Signature!
}

type SignTransactionResult {
  hash: Bytes!
  signedTx: SignedTransaction!
}

type ExecutionStatus {
  SuccessValue: String
  SuccessReceiptId: String
  failure: JSON
}

type ExecutionOutcomeWithId {
  block_hash: String
  id: String!
  outcome: ExecutionOutcome!
  proof: [ExecutionProof!]
}

type ExecutionProof {
  direction: String!
  hash: String!
}

type ExecutionOutcome {
  executor_id: String
  gas_burnt: BigInt!
  logs: [String!]
  metadata: OutcomeMetaData
  receipt_ids: [String!]!
  status: ExecutionStatus!
  tokens_burnt: String
}

type OutcomeMetaData {
  gas_profile: [GasProfile]!
  version: UInt!
}

type GasProfile {
  cost: String!
  cost_category: String!
  gas_used: String!
}

type FinalExecutionOutcome {
  status: ExecutionStatus!
  transaction: Transaction!
  transaction_outcome: ExecutionOutcomeWithId!
  receipts_outcome: [ExecutionOutcomeWithId!]!
}

type FinalExecutionOutcomeWithReceipts {
  status: ExecutionStatus!
  transaction: Transaction!
  transaction_outcome: ExecutionOutcomeWithId!
  receipts_outcome: [ExecutionOutcomeWithId!]!
  receipts: [ReceiptWithId!]!
}

type ReceiptWithId {
  predecessor_id: String!
  receipt: Receipt!
  receipt_id: String!
  receiver_id: String!
}

type Receipt {
  Action: ActionContainer!
}

type ActionContainer {
  actions: [Action!]!
}

enum KeyType {
  ED25519
}

### Imported Queries START ###

### Imported Queries END ###

### Imported Objects START ###

### Imported Objects END ###
`;
