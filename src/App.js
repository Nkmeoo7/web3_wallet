import React, { useState } from "react";
import WalletGenerator from "./components/WalletGenerator";
import WalletList from "./components/WalletList";
import "./App.css";
import AppHeader from "./components/AppHeader";
function App() {
  const [wallets, setWallets] = useState([]);

  return (
    <div className="App">
      <AppHeader />
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WalletGenerator setWallets={setWallets} />
          <WalletList wallets={wallets} />
        </div>
      </main>
    </div>
  );
}

export default App;
