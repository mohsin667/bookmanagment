import React from "react";
import "../styles/Flashmessage.scss";

function Flashmessage(props) {
  return (
    <div className="flashmessage">
      <p>{props.message}</p>
    </div>
  );
}

export default Flashmessage;
