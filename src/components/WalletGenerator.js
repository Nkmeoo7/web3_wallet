import React, { useState } from "react";
import * as bip39 from "bip39";
import { ethers } from "ethers";
import { Keypair } from "@solana/web3.js";
import { Buffer } from "buffer";

window.Buffer = Buffer; // Make Buffer available globally

const WalletGenerator = () => {
  const [mnemonic, setMnemonic] = useState("");
  const [wallets, setWallets] = useState([]);

  const generateMnemonic = () => {
    const newMnemonic = bip39.generateMnemonic();
    setMnemonic(newMnemonic);
  };

  const createEthereumWallet = () => {
    if (mnemonic) {
      const wallet = ethers.Wallet.fromPhrase(mnemonic);
      setWallets((prevWallets) => [
        ...prevWallets,
        { type: "Ethereum", publicKey: wallet.address },
      ]);
    }
  };

  const createSolanaWallet = () => {
    if (mnemonic) {
      const seed = bip39.mnemonicToSeedSync(mnemonic).slice(0, 32);
      const keypair = Keypair.fromSeed(seed);
      setWallets([
        ...wallets,
        { type: "Solana", publicKey: keypair.publicKey.toBase58() },
      ]);
    }
  };

  return (
    <div>
      <button onClick={generateMnemonic}>Generate Mnemonic</button>
      <textarea value={mnemonic} readOnly />
      <button onClick={createEthereumWallet}>Create Ethereum Wallet</button>
      <button onClick={createSolanaWallet}>Create Solana Wallet</button>
      <ul>
        {wallets.map((wallet, index) => (
          <li key={index}>
            {wallet.type} Public Key: {wallet.publicKey}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WalletGenerator;
