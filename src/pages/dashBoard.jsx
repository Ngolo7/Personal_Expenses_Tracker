import React, { useState, useContext } from "react";
import NavBar from "../components/dashBoard/navBar";
import TotalBalance from "../components/dashBoard/totalBalance";
import ButtonCards from "../components/dashBoard/buttonCards";
import Lists from "../components/transactions/lists";
import AddTransactionModal from "../components/transactions/addTransactionModal";
import { TransactionContext } from "../contexts/TransactionContext";
import PieChart from "../charts/pieChart";
import LineChart from "../charts/lineChart";

const DashBoard = () => {
  const { deleteTransaction, transactions } = useContext(TransactionContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransactions, setSelectedTransactions] = useState(new Set());
  const [pieModal, setPieModal] = useState(false);
  const [lineModal, setlineModal] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const pieOpenModal = () => setPieModal(true);
  const piecloseModal = () => setPieModal(false);

  const lineOpenModal = () => setlineModal(true);
  const linecloseModal = () => setlineModal(false);

  const handleCheckboxChange = (id) => {
    setSelectedTransactions((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const handleDeleteSelected = () => {
    selectedTransactions.forEach((id) => deleteTransaction(id));
    setSelectedTransactions(new Set());
  };

  return (
    <div className="mx-[250px] pt-4">
      <NavBar />
      <TotalBalance />
      <ButtonCards
        onAddClick={openModal}
        onDeleteSelectedClick={handleDeleteSelected}
        onPieChartClick={pieOpenModal}
        onLineChartClick={lineOpenModal}
      />
      <AddTransactionModal isOpen={isModalOpen} onClose={closeModal} />
      <PieChart
        isPieOpen={pieModal}
        onPieClose={piecloseModal}
        data={transactions}
      />
      <LineChart
        islineOpen={lineModal}
        onlineClose={linecloseModal}
        data={transactions}
      />

      <Lists
        selectedTransactions={selectedTransactions}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default DashBoard;
