import React, { useState, useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionContext"; // Adjust the path as necessary
import grocery from "../../../public/assets/images/grocery.png";
import medical from "../../../public/assets/images/medical.png";
import entertainment from "../../../public/assets/images/entertainment.png";
import school from "../../../public/assets/images/school.png";
import insurance from "../../../public/assets/images/insurance.png";
import rent from "../../../public/assets/images/rent.png";
import clothing from "../../../public/assets/images/clothing.png";
import salary from "../../../public/assets/images/salary.png";
import other from "../../../public/assets/images/other.png";

const AddTransactionModal = ({ isOpen, onClose }) => {
  const { addTransaction, deleteTransaction } = useContext(TransactionContext); // Access the addTransaction function from context

  const [transactionType, setTransactionType] = useState("expense");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [paymentMode, setPaymentMode] = useState("cash");

  const handleSubmit = (e) => {
    e.preventDefault();
    let image = "";
    if (category === "Salary") {
      image = salary;
    }
    if (category === "Grocery") {
      image = grocery;
    }
    if (category === "Medical") {
      image = medical;
    }
    if (category === "School") {
      image = school;
    }
    if (category === "Insurance") {
      image = insurance;
    }
    if (category === "Rent") {
      image = rent;
    }
    if (category === "Entertainment") {
      image = entertainment;
    }
    if (category === "Clothing") {
      image = clothing;
    }
    if (category === "Others") {
      image = other;
    }

    const transactionData = {
      id: Date.now(),
      transactionType,
      date,
      time,
      category,
      amount: parseFloat(amount),
      description,
      paymentMode,
      image, // Optionally set an image if you have one
    };
    addTransaction(transactionData); // Add the transaction
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="p-8 rounded-lg w-1/2 bg-[#f0f4f8] shadow-sm shadow-slate-400">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">New Transaction</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-96 mb-8">
            <label className="flex mr-4">
              <input
                type="radio"
                name="transactionType"
                value="income"
                className="radio radio-primary"
                checked={transactionType === "income"}
                onChange={() => setTransactionType("income")}
              />
              <span className="ml-2">Income</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="transactionType"
                value="expense"
                className="radio radio-primary"
                checked={transactionType === "expense"}
                onChange={() => setTransactionType("expense")}
              />
              <span className="ml-2">Expense</span>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">Choose a Date</label>
              <input
                type="date"
                className="input input-bordered bg-slate-300 w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1">Choose a Time</label>
              <input
                type="time"
                className="input input-bordered w-full bg-slate-300"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1">Select a Category</label>
              <select
                className="input input-bordered w-full bg-slate-300"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a Category</option>
                <option>Salary</option>
                <option>Clothing</option>
                <option>Grocery</option>
                <option>Medical</option>
                <option>Insurance</option>
                <option>School</option>
                <option>Entertainment</option>
                <option>Rent</option>
                <option>Others</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Enter an Amount</label>
              <input
                type="number"
                className="input input-bordered w-full bg-slate-300"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <textarea
              className="textarea textarea-bordered w-full bg-slate-300"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-8">
            <label className="block mb-1">Payment Mode</label>
            <div className="flex justify-between w-3/4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="cash"
                  className="radio radio-primary"
                  checked={paymentMode === "cash"}
                  onChange={() => setPaymentMode("cash")}
                />
                <span className="ml-2">Cash</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="debit-card"
                  className="radio radio-primary"
                  checked={paymentMode === "debit-card"}
                  onChange={() => setPaymentMode("debit-card")}
                />
                <span className="ml-2">Debit Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="credit-card"
                  className="radio radio-primary"
                  checked={paymentMode === "credit-card"}
                  onChange={() => setPaymentMode("credit-card")}
                />
                <span className="ml-2">Credit Card</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="btn border shadow-sm shadow-slate-400 btn-ghost w-24"
            >
              Add
            </button>
            <button
              type="button"
              className="w-24 btn shadow-sm shadow-slate-400"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
