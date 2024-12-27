import React from "react";

const HistoryList = ({ history }) => {
  return (
    <div>
      <h2>Scanned QR Codes</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => navigator.clipboard.writeText(item)}>
              Copy
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;
