import React from "react";

const WalletList = ({ wallets }) => {
  return (
    <div>
      <h2>Your Wallets</h2>
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

export default WalletList;
