import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/booklibrary">Assignment #2</Link>
          <Link to="/addbook">Add a Book</Link>
        </li>
      </ul>
      <p>Book Managment Assignment: Mohsin Ansari</p>
    </footer>
  );
}

export default Footer;
