import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const LineChart = ({ data, islineOpen, onlineClose }) => {
  const balanceOverTime = data.reduce((acc, transaction) => {
    const lastBalance = acc.length > 0 ? acc[acc.length - 1].balance : 0;
    const newBalance =
      transaction.transactionType === "income"
        ? lastBalance + transaction.amount
        : lastBalance - transaction.amount;

    acc.push({ date: transaction.date, balance: newBalance });
    return acc;
  }, []);

  const chartData = {
    labels: balanceOverTime.map((entry) => entry.date),
    datasets: [
      {
        label: "Account Balance",
        data: balanceOverTime.map((entry) => entry.balance),
        backgroundColor: "rgba(66, 165, 245, 0.5)",
        borderColor: "rgba(66, 165, 245, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(66, 165, 245, 1)",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "blue",
          font: {
            size: 18,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (!islineOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className=" p-8 rounded-lg w-2/3 h-2/3 bg-[#f0f4f8] shadow-sm shadow-slate-500">
        {/* Close Button */}
        <button
          onClick={onlineClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300"
          aria-label="Close"
        >
          &times;
        </button>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
