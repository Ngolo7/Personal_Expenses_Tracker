import React from "react";
import DashBoard from "./pages/dashBoard";
import { TransactionProvider } from "./contexts/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <div className="min-h-screen">
        <DashBoard />
      </div>
    </TransactionProvider>
  );
}

export default App;
