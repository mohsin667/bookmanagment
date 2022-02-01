import React, { useState } from "react";
import BookContext from "./components/BookContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Addbook from "./Pages/Addbook";
import Booklist from "./Pages/Booklist";
import Cart from "./Pages/Cart";

function App() {
  const fetch = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];
  const [cart, setCart] = useState(fetch);
  const auth = localStorage.getItem("isLoggedIn") === "1";
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn"));
  const retriveData = localStorage.getItem("books") !== null ? localStorage.getItem("books") : [];
  const [library, setLibrary] = useState(retriveData);
  const data = { loggedIn, setLoggedIn, library, setLibrary, cart, setCart };
  return (
    <Router>
      <div className="App">
        <BookContext.Provider value={data}>
          <Routes>
            <Route exact path="/" element={loggedIn === "1" ? <Home /> : <Registration />} />

            <Route exact path="/edit/:id" element={auth ? <Edit /> : <Registration />} />
            <Route exact path="/addbook" element={auth ? <Addbook /> : <Registration />} />
            <Route exact path="/booklibrary" element={auth ? <Booklist /> : <Registration />} />
            <Route exact path="/cart" element={auth ? <Cart /> : <Registration />} />
          </Routes>
        </BookContext.Provider>
      </div>
    </Router>
  );
}

export default App;
