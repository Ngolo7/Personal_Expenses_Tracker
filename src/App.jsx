import React from "react";
import DashBoard from "./pages/dashBoard";
import { TransactionProvider } from "./contexts/TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <ErrorBoundary>
        <div className="min-h-screen">
          <DashBoard />
        </div>
      </ErrorBoundary>
    </TransactionProvider>
  );
}

export default App;
