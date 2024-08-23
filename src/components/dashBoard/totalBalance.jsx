import React from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { TransactionContext } from "../../contexts/TransactionContext";
import { useContext } from "react";

const totalBalance = () => {
  const {
    income = 0,
    expenses = 0,
    balance = 0,
  } = useContext(TransactionContext);
  return (
    <div className="flex justify-center mt-24  ">
      <div className="w-[400px] h-[250px] shadow-sm shadow-slate-400 rounded-2xl  bg-gradient-to-r from-yellow-300 via-green-500 to-green-800 ">
        <h1 className="text-2xl text-center p-2 hover:text-purple-700 transition-colors ">
          Total Balance
        </h1>
        <h1 className="text-4xl text-center font-bold p-2 hover:text-blue-700 transition-colors ">
          ${balance.toFixed(2)}{" "}
        </h1>
        <div className="flex justify-between mt-16 mx-8">
          <div className="flex items-center  gap-2 hover:text-blue-900 transition-colors">
            <FaArrowCircleUp size={40} />
            <div className="flex flex-col">
              <p className="text-xl">Income</p>
              <p className="text-xl">${income.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:text-red-700 transition-colors">
            <FaArrowCircleDown size={40} />
            <div className="flex flex-col">
              <p className="text-xl">Expenses</p>
              <p className="text-xl">${expenses.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default totalBalance;
