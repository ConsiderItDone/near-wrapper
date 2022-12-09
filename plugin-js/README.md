# Near JavaScript Plugin (Limited)
A plugin to support the Near polywrapper. The Near wrapper depends on the Near JavaScript plugin. Both the plugin and wrapper are limited (i.e. not fully-featured) implementations.

# Installation

Yarn installation: `yarn add @cidt/near-plugin-js`

or with NPM: `npm install @cidt/near-plugin-js`

# How to use

Set up your Near config.
```typescript
import { KeyPair, KeyStores, NearPluginConfig } from "@cidt/near-plugin-js";

export async function setUpTestConfig(): Promise<NearPluginConfig> {
  const keyStore = new KeyStores.InMemoryKeyStore();
  const keyPair = KeyPair.fromString(YOUR_PRIVATE_KEY);
  let config: NearPluginConfig = {
    networkId: "testnet",
    keyStore: keyStore,
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org',
  };
  return config;
}

const nearConfig = setUpTestConfig();
```

Then add the plugin to the Polywrap Client configuration.
```typescript
const client = new PolywrapClient({
  plugins: [{
      uri: "wrap://ens/nearPlugin.web3api.eth",
      plugin: nearPlugin(nearConfig)
    }
  ]
});

```

Now you're ready to make queries to the Near wrapper.
