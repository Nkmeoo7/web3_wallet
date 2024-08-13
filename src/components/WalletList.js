import React from "react";

const WalletList = ({ wallets }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Your Wallets</h2>
      {wallets.length > 0 ? (
        <ul className="space-y-4">
          {wallets.map((wallet, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow fade-in"
            >
              <h3 className="text-lg font-medium text-blue-600">
                {wallet.type} Wallet
              </h3>
              <p className="mt-2 text-gray-700 break-words">
                Public Key: {wallet.publicKey}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500">
          <p>No wallets created yet.</p>
        </div>
      )}
    </div>
  );
};
export default WalletList;
