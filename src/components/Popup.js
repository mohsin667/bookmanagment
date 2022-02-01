import React, { useEffect } from "react";
import "../styles/Popup.scss";

function Popup({ heading, useDelete, setUseDelete, setFlagDelete }) {
  const handlePopup = () => {
    setFlagDelete(true);
    setUseDelete(false);
  };
  const handleCancel = () => {
    setUseDelete(false);
    setFlagDelete(false);
  };

  return (
    <div className={useDelete ? "popup open" : "popup"}>
      <h2>{heading}</h2>
      <div className="action">
        <span onClick={handlePopup} className="btn btn-light">
          Delete
        </span>
        <span onClick={handleCancel} className="btn">
          Cancel
        </span>
      </div>
    </div>
  );
}

export default Popup;
