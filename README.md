# Polywrap Near wrappers

## Table of contents
* [Installation](#installation)
* [Getting Started](#getting-started)
* [Near Wrapper Reference](#near-wrapper)
* [Borsh Wrapper Reference](#borsh-wrapper)

## <a name="installation">Installation</a>

Install the polywrap package with yarn or npm:

```bash
yarn add polywrap
npm install polywrap
```

Install the near-plugin package with yarn or npm:

```bash
yarn add @cidt/near-plugin-js
npm install @cidt/near-plugin-js
```

## <a name="getting-started">Getting Started</a>

The following steps show how to set up the Polywrap Client, add Near Plugin, create a Near transaction, sign and send the transaction.


First of all, we need to create a `Polywrap Client`, which contains all the required utilities to interact with the Near. It acts as a wrapper for [Near JavaScript API](https://docs.near.org/tools/near-api-js/quick-reference).

Use an import or require statement, depending on which your environment supports.

```js
import { PolywrapClient } from "@polywrap/client-js";
import { nearPlugin } from "@cidt/near-plugin-js"
import { keyStores, KeyPair } from "near-api-js";
```

### 1. Make plugin config
```js

//Create keyStore
const network = 'testnet'
const keyStore = new keyStores.InMemoryKeyStore(),

// Create keyPair using your private key
const keyPair = KeyPair.fromString(<PRIVATE_KEY>);
keyStore.setKey(network, <ACCOUNT_ID>, keyPair);

// Make a config
const nearConfig = {
    headers: {},
    networkId: network,
    keyStore: keyStore,
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org"
}
```

### 1. Instantiate Polywrap Client
Then, you will be able to use the Polywrap Client with Near plugin like so:

```js
// Instantiate the PolywrapClient.
const client = new PolywrapClient({
  plugins: [{
    uri:"wrap://ens/nearPlugin.polywrap.eth",
    plugin: nearPlugin(nearConfig)
    }
  ]
});
```
[Polywrap client docs](https://docs.polywrap.io/reference/clients/js/client-js)


## <a name="near-wrapper">Near Wrapper Reference</a>
Examples of near-wrapper usage

### 1. Make Transfer

```js
const transactionResult = await client.invoke({
  uri: "wrap://near.polywrap.eth",
  method: "sendMoney",
  args: {
    receiverId: <RECEIVER_ID>,
    amount: <AMOUNT>,
  }
})
```

### 2. Create custom transaction

#### 1. Create Transaction

```js
const transaction = await client.invoke({
  uri: "wrap://near.polywrap.eth",
  method: "createTransaction",
  args: {
    publicKey: <PUBLIC_KEY>, // your public key
    receiverId: <RECEIVER_ID>,
    actions: [{ deposit: <AMOUNT> }] // Actions defines what transaction will be executed. Check near documentation for additional details
  },
})
```
#### 2. Sign Transaction
```js
  const signedTransaction = await client.invoke({
    uri: "wrap://near.polywrap.eth",
    method: "signTransaction",
    args: {
      transaction,
    },
  });
```
#### 3. Send Transaction
```js
  const transactionResult = await client.invoke({
    uri: "wrap://near.polywrap.eth",
    method: "sendTransaction",
    args: {
      signedTx: signedTransaction,
    },
  });
```


## <a name="borsh-wrapper">Borsh Wrapper Reference</a>
Near wrapper uses wrapper borsh-serializer to serialize/deserialize transaction
In case you want mannualy serialize/deserialize transactions, borsh-wrapper provides methods `serializeTransaction`, `deserializeTransaction`, `serializeSignedTransaction`, `deserializeSignedTransaction`

### Examples:

Serialize
```js
    const transactionBytes = await client.invoke({
      uri: "wrap://near.borsh.polywrap.eth",
      method: "serializeTransaction",
      args: {
        transaction: transaction,
      },
    });
```

Deserialize:
```js
    const transaction = await client.invoke({
      uri: "wrap://near.borsh.polywrap.eth",
      method: "deserializeTransaction",
      args: {
        transactionBytes: transactionBytes,
      },
    });
```

Serialize signed transaction:
```js
    const signedTransactionBytes = await client.invoke({
      uri: "wrap://near.borsh.polywrap.eth",
      method: "serializeTransaction",
      args: {
        signedTransaction: signedTransaction,
      },
    });
```

Deserialize signed transaction:
```js
    const signedTransaction = await client.invoke({
      uri: "wrap://near.borsh.polywrap.eth",
      method: "deserializeTransaction",
      args: {
        signedTxBytes: signedTransactionBytes,
      },
    });
```

