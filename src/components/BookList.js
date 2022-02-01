import React, { useContext, useState, useEffect } from "react";
import Heading from "./Heading";
import "../styles/BookList.scss";
import { FiEdit, FiShoppingCart } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import BookContext from "./BookContext";
import Popup from "./Popup";
import Nodata from "./Nodata";

function BookList() {
  const booklist = useContext(BookContext);
  const [useDelete, setUseDelete] = useState(false);
  const [flagDelete, setFlagDelete] = useState(false);
  const [id, setId] = useState("");
  const [cartid, setCartid] = useState("");
  const [libraryData, setLibraryData] = useState(JSON.parse(localStorage.getItem("books")));
  const [search, setSearch] = useState("");
  const gloabalState = typeof booklist.library == "string" ? JSON.parse(booklist.library) : booklist.library;

  const handleDelete = (index, id) => {
    setUseDelete(true);
    setId(index);
    setCartid(id);
    console.log(booklist.cart);
  };

  const handleChange = e => {
    setSearch(e.target.value);
    // performing search action on global state because local state gets changed on each search key stroke
    const searchTerm = gloabalState.filter(value => {
      if (e.target.value.trim() == "") {
        return gloabalState;
      } else if (value.title.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim(""))) {
        return value;
      }
    });
    setLibraryData(searchTerm);
  };

  const managelibrary = () => {
    const array = [...libraryData];
    array.splice(id, 1);
    localStorage.setItem("books", JSON.stringify(array));
    const data = JSON.parse(localStorage.getItem("books"));
    booklist.setLibrary(data);
    setLibraryData(data);
    const cartArray = [...booklist.cart];
    const deletedCartArray = cartArray.filter(value => {
      return value.id !== cartid;
    });
    localStorage.setItem("cart", JSON.stringify(deletedCartArray));
    const getlocatcart = JSON.parse(localStorage.getItem("cart"));
    booklist.setCart(getlocatcart);
  };

  useEffect(() => {
    if (flagDelete) {
      managelibrary();
    }
    return () => {
      setFlagDelete(false);
    };
  }, [flagDelete]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="content-box content-box booklist-content-box">
          <div className="heading-bar">
            <Heading heading="Book List" />
            <div className="form-group">
              <div className="search-bar">
                <input type="text" onChange={handleChange} value={search} id="search" placeholder="Search" />
                <BsSearch />
              </div>
            </div>
          </div>
          <div className="grid">
            {libraryData !== null && libraryData.length > 0 ? (
              libraryData.map((bookitem, index) => (
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
                      <Link to={`/edit/${index}`} className="action-icon">
                        <FiEdit color="#0dd6b8" />
                      </Link>
                      <span onClick={() => handleDelete(index, bookitem.id)} className="action-icon delete-icon">
                        <MdDeleteForever color="#ff9b8a" />
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <Nodata />
              </>
            )}
          </div>
        </div>
      </div>
      <Popup setFlagDelete={setFlagDelete} useDelete={useDelete} setUseDelete={setUseDelete} heading="Are you sure, you want to delete this Book ?" />
    </React.Fragment>
  );
}

export default BookList;
