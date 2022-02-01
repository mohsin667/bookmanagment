import React, { useState, useContext, useEffect } from "react";
import { Mainnav } from "../components/Header";
import Heading from "../components/Heading";
import BookContext from "../components/BookContext";
import { BsSearch } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Footer from "../components/Footer";
import Nodata from "../components/Nodata";
import "../styles/BookList.scss";

function Booklist() {
  const booklist = useContext(BookContext);
  const gloabalState = typeof booklist.library == "string" ? JSON.parse(booklist.library) : booklist.library;
  const [data, setData] = useState(gloabalState);
  const [books, setBooks] = useState(data);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(booklist.cart);
  const [updatecart, setUpdatecart] = useState(false);
  const handleChange = e => {
    setSearch(e.target.value);
    const searTerm = data.filter(value => {
      if (e.target.value == "") {
        return gloabalState;
      } else if (value.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim(""))) {
        return value;
      }
    });
    setBooks(searTerm);
  };

  const updateCart = (cartObject, id) => {
    cartObject.count = 1;
    const cartId = [...books];
    cartId[id].cart = true;
    setBooks(cartId);
    const array = [...cart];
    array.push(cartObject);
    setCart(array);
    setUpdatecart(true);
    booklist.setCart(array);
  };
  useEffect(() => {
    if (updateCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("books", JSON.stringify(books));
      const data = JSON.parse(localStorage.getItem("books"));
      booklist.setLibrary(data);
    }
    return () => {
      setUpdatecart(false);
    };
  }, [updatecart]);
  return (
    <React.Fragment>
      <main>
        <Mainnav />
        <div className="container">
          <div className="content-box booklist-content-box">
            <div className="heading-bar">
              <Heading heading="Book Library" />
              <div className="form-group">
                <div className="search-bar">
                  <input type="text" onChange={handleChange} value={search} id="search" placeholder="Search" />
                  <BsSearch />
                </div>
              </div>
            </div>

            <div className="grid">
              {data.length > 0 ? (
                <>
                  {books.map((bookitem, index) => (
                    <div className="grid-item" key={index}>
                      <img src={bookitem.image} alt="" />
                      <div className="book-detail">
                        <p className="title">{bookitem.title}</p>
                        <p className="light">Author: {bookitem.author}</p>
                        <p className="light">Customer: {bookitem.customer}</p>
                        <p className="medium">
                          <FaRupeeSign size="12px" /> {bookitem.price}
                        </p>
                        <div className="actions">
                          <span className="action-icon">
                            {bookitem.cart == true ? (
                              <span style={{ fontSize: 12, cursor: "initial", display: "inline-flex", alignItems: "center" }}>
                                <AiFillCheckCircle color="green" size="14px" /> Added to cart
                              </span>
                            ) : (
                              <FiShoppingCart onClick={() => updateCart(bookitem, index)} color="#3f8acc" />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <Nodata />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Booklist;
