import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, isPieOpen, onPieClose }) => {
  // Ensure data is an array and default to empty array if not
  const transactionsData = Array.isArray(data) ? data : [];

  const categories = [
    "Rent",
    "Grocery",
    "Entertainment",
    "School",
    "Medical",
    "Insurance",
    "Clothing",
    "Others",
  ];

  const expenseData = categories.map((category) => {
    return transactionsData
      .filter(
        (transaction) =>
          transaction.transactionType === "expense" &&
          transaction.category === category
      )
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: expenseData,
        backgroundColor: [
          "rgba(128, 203, 196, 0.8)",
          "rgba(255, 204, 128, 0.8)",
          "rgba(255, 171, 145, 0.8)",
          "rgba(255, 138, 101, 0.8)",
          "rgba(66, 165, 245, 0.8)",
          "rgba(239, 83, 80, 0.8)",
          "rgba(171, 71, 188, 0.8)",
          "rgba(126, 87, 194, 0.8)",
          "rgba(141, 110, 99, 0.8)",
          "rgba(77, 182, 172, 0.8)",
        ],
        hoverBackgroundColor: [
          "rgba(128, 203, 196, 1)",
          "rgba(255, 204, 128, 1)",
          "rgba(255, 171, 145, 1)",
          "rgba(255, 138, 101, 1)",
          "rgba(66, 165, 245, 1)",
          "rgba(239, 83, 80, 1)",
          "rgba(171, 71, 188, 1)",
          "rgba(126, 87, 194, 1)",
          "rgba(141, 110, 99, 1)",
          "rgba(77, 182, 172, 1)",
        ],
        borderColor: "rgba(255, 255, 255, 0.6)",
        borderWidth: 2,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        labels: {
          color: "blue",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": $" + tooltipItem.raw;
          },
        },
      },
    },
  };

  if (!isPieOpen) return null; // Conditional rendering based on `isPieOpen`

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className=" p-8 rounded-lg w-2/3 h-2/3 bg-[#f0f4f8] shadow-sm shadow-slate-500">
        {/* Close Button */}
        <button
          onClick={onPieClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300"
          aria-label="Close"
        >
          &times;
        </button>
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
