import React, { useState } from "react";
import WalletGenerator from "./components/WalletGenerator";
import WalletList from "./components/WalletList";
import "./App.css";

function App() {
  const [wallets, setWallets] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Web-Based Wallet ,hii there</h1>
      </header>
      <main>
        <WalletGenerator setWallets={setWallets} />
        <WalletList wallets={wallets} />
      </main>
    </div>
  );
}

export default App;
