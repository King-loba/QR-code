import React, { useState } from "react";
import QRScanner from "./components/QRScanner";
import HistoryList from "./components/HistoryList";
import "./styles.css";

function App() {
  const [history, setHistory] = useState([]);

  const handleScan = (data) => {
    if (data && !history.includes(data)) {
      setHistory([...history, data]);
    }
  };

  return (
    <div className="App">
      <h1>QR Code Scanner</h1>
      <QRScanner onScan={handleScan} />
      <HistoryList history={history} />
    </div>
  );
}

export default App;
