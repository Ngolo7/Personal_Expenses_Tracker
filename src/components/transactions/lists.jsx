import React, { useContext, useState } from "react";
import ListCard from "./listCard";
import { TransactionContext } from "../../contexts/TransactionContext";

const Lists = ({ selectedTransactions, onCheckboxChange }) => {
  const { transactions, deleteTransaction } = useContext(TransactionContext); // Get deleteTransaction function from context

  const [searchQuery, setSearchQuery] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col gap-4 mt-4 rounded-xl shadow-2xl bg-slate-500 ">
        <div className="p-4 flex flex-col gap-4  bg-slate-600 rounded-t-xl">
          <h1 className="text-3xl p-2 mt-2 flex  font-semibold">
            Transactions
          </h1>

          <input
            type="text"
            placeholder="Search by category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 h-16 border border-gray-300 rounded-xl"
          />

          {filteredTransactions.map((transaction) => (
            <ListCard
              key={transaction.id}
              id={transaction.id}
              name={transaction.category}
              image={transaction.image}
              price={transaction.amount}
              date={transaction.date}
              time={transaction.time}
              isChecked={selectedTransactions.has(transaction.id)}
              onCheckboxChange={() => onCheckboxChange(transaction.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lists;
