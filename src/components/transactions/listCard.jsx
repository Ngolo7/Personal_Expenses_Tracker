import React from "react";
import AddTransactionModal from "./addTransactionModal";

const ListCard = ({
  id,
  name,
  image,
  date,
  time,
  price = 0,
  isChecked,
  onCheckboxChange,
}) => {
  const formattedPrice = typeof price === "number" ? price.toFixed(2) : "0.00";
  return (
    <div className="p-4 border rounded-2xl flex shadow-lg gap-4 items-center bg-gradient-to-tr from-gray-300 via-green-500 to-gray-800 ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onCheckboxChange}
        className="mr-2"
      />
      {/* Image */}
      <img src={image} alt={name} className="w-16 h-16 rounded-lg " />

      {/* Details */}
      <div className="flex-grow ">
        <h1 className="text-xl font-bold">{name}</h1>
        <div className="flex gap-4">
          <p className="text-md text-gray-200">{date}</p>
          <p className="text-md text-gray-200">{time}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold">${formattedPrice}</h2>
    </div>
  );
};

export default ListCard;
