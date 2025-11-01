import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./DialerModal.css";

export default function DialerModal({ onClose }) {
  const [number, setNumber] = useState("");

  const handlePress = (num) => {
    setNumber((prev) => prev + num);
  };

  const handleClear = () => {
    setNumber("");
  };

  return (
    <div className="dialer-overlay" onClick={onClose}>
      <div className="dialer" onClick={(e) => e.stopPropagation()}>
        <div className="dialer-header">
          <h3>Dialer</h3>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>

        <div className="dialer-screen">{number || "Enter Number"}</div>

        <div className="dialer-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((n) => (
            <button key={n} onClick={() => handlePress(n)}>
              {n}
            </button>
          ))}
        </div>

        <div className="dialer-actions">
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
          <a href={`tel:${number}`} className="call-btn">
            📞 Call
          </a>
        </div>
      </div>
    </div>
  );
}
