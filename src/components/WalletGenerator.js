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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        onClick={generateMnemonic}
      >
        Generate Mnemonic
      </button>
      <textarea
        className="w-full mt-4 p-2 border border-gray-300 rounded"
        value={mnemonic}
        readOnly
      />
      <button
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
        onClick={createEthereumWallet}
      >
        Create Ethereum Wallet
      </button>
      <button
        className="bg-teal-500 text-white font-semibold py-2 px-4 rounded hover:bg-teal-600"
        onClick={createSolanaWallet}
      >
        Create Solana Wallet
      </button>
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
