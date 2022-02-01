import React, { useState, useContext, useEffect } from "react";
import BookContext from "../components/BookContext";
import { Mainnav } from "../components/Header";
import Heading from "../components/Heading";
import { useNavigate, Link } from "react-router-dom";
import Images from "../components/Images";
import { IoIosImages } from "react-icons/io";
import "../styles/Form.scss";
function Addbook() {
  const location = useNavigate();
  const initialValues = {
    title: "",
    author: "",
    customer: "",
    price: ""
  };
  const booklist = useContext(BookContext);
  const books = localStorage.getItem("books") !== null ? [...JSON.parse(localStorage.getItem("books"))] : [];
  const [images, setImages] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [state, setState] = useState(initialValues);
  const [imageText, setImageText] = useState("Upload your image");
  const handleSubmit = e => {
    e.preventDefault();
    const array = [];
    const bookObject = {};
    bookObject.id = books.length + 1;
    bookObject.title = state.title;
    bookObject.author = state.author;
    bookObject.customer = state.customer;
    bookObject.price = state.price;
    bookObject.image = imageUrl;
    bookObject.cart = false;
    array.unshift(bookObject);
    books.push(bookObject);
    localStorage.setItem("books", JSON.stringify(books));
    const data = JSON.parse(localStorage.getItem("books"));
    booklist.setLibrary(data);
    location("/");
  };
  const loadImage = () => {
    setImages(Images);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const getUrl = id => {
    setImageUrl(id);
    setImages(null);
    setImageText(id);
  };

  const closepopup = () => {
    setImages(null);
  };

  return (
    <main>
      <Mainnav />
      <div className="container">
        <div className="content-box">
          <Heading heading="Add Book" />
          <form onSubmit={handleSubmit} className="gloabal-form" action="">
            <div className="form-group">
              <label htmlFor="title">Book Title</label>
              <input type="text" onChange={handleChange} value={state.title} id="title" name="title" placeholder="Enter Book Title" required />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author Name</label>
              <input type="text" onChange={handleChange} value={state.author} id="author" name="author" placeholder="Enter Book Author Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="customer">Customer Name</label>
              <input type="text" onChange={handleChange} value={state.customer} id="customer" name="customer" placeholder="Enter Book Customer Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="price">Book Price</label>
              <input type="text" id="price" onChange={handleChange} value={state.price} name="price" placeholder="Enter Book Price" required />
            </div>
            <div className="form-group">
              <div className="uploadImage">
                <label htmlFor="price">Upload your image</label>
                <div className="upload-image-group">
                  <div className="upload-box">
                    <IoIosImages size="20px" style={{ marginRight: "10px" }} />
                    <p>{imageText}</p>
                  </div>
                  <div className="btn" onClick={loadImage}>
                    Upload
                  </div>
                </div>
              </div>
              <div className="image-wrapper">
                {images !== null && (
                  <>
                    {
                      <div className="image-box">
                        <div className="content-box">
                          <Heading heading={"Choose Image"} />
                          <div className="image-wrapper">
                            {images.map((img, ind) => (
                              <div key={ind} onClick={e => getUrl(img.thumbnail)} className="image-layer">
                                <img src={img.thumbnail} alt="" />
                              </div>
                            ))}
                          </div>
                          <div onClick={closepopup} style={{ margin: "20px 0 0" }} className="btn inline-btn">
                            Cancel
                          </div>
                        </div>
                      </div>
                    }
                  </>
                )}
              </div>
            </div>
            <button className="cancel" onClick={() => location(-1)}>
              Cancel
            </button>
            <button>Add</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Addbook;
