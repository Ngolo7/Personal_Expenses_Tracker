import React from "react";
import { LuPlusCircle, LuMinusCircle } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";

const ButtonCards = ({
  onAddClick,
  onDeleteSelectedClick,
  onPieChartClick,
  onLineChartClick,
}) => {
  const handleDeleteClick = () => {
    onDeleteSelectedClick();
  };

  const buttonData = [
    {
      icon: (
        <LuPlusCircle
          size={40}
          className="text-white hover:text-green-700 transition-colors"
        />
      ),
      key: "plus1",
      onClick: onAddClick,
    },
    {
      icon: (
        <LuMinusCircle
          size={40}
          className="text-white hover:text-red-700 transition-colors"
        />
      ),
      key: "minus1",
      onClick: handleDeleteClick,
    },
    {
      icon: (
        <FaChartPie
          size={40}
          className="text-white hover:text-yellow-500 transition-colors"
        />
      ),
      key: "pie",
      onClick: onPieChartClick,
    },
    {
      icon: (
        <FaChartLine
          size={40}
          className="text-white hover:text-gray-500 transition-colors"
        />
      ),
      key: "line",
      onClick: onLineChartClick,
    },
  ];

  return (
    <div className="flex justify-center mt-12 gap-6">
      {buttonData.map((button) => (
        <div
          key={button.key}
          className="bg-green-600 w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer"
          onClick={button.onClick}
        >
          {button.icon}
        </div>
      ))}
    </div>
  );
};

export default ButtonCards;
