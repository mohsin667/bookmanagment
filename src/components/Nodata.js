import React from "react";
import { Link } from "react-router-dom";

function Nodata() {
  return (
    <React.Fragment>
      <img style={{ maxWidth: 350, width: "100%", margin: "0 auto" }} src={require(`../images/no-data.jpg`)} />
      <div className="empty-data">
        <p>No data found in your library. Please Click on the add button below to add some books in your library.</p>
        <Link to="/addbook">Add Book</Link>
      </div>
    </React.Fragment>
  );
}

export default Nodata;
