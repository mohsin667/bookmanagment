import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookContext from "../components/BookContext";
import { Mainnav } from "../components/Header";
import Heading from "../components/Heading";
import "../styles/Form.scss";
import Images from "../components/Images";
import { IoIosImages } from "react-icons/io";

function Edit() {
  const bookId = useParams();
  const bookData = JSON.parse(localStorage.getItem("books"));
  const booklist = useContext(BookContext);

  const parseData = bookData;
  const location = useNavigate();
  const [imageUrl, setImageUrl] = useState(parseData[bookId.id].image);
  const initialValues = {
    title: parseData[bookId.id].title,
    author: parseData[bookId.id].author,
    customer: parseData[bookId.id].customer,
    price: parseData[bookId.id].price,
    image: imageUrl
  };
  const [images, setImages] = useState(null);
  const [imageText, setImageText] = useState(parseData[bookId.id].image);
  const [state, setState] = useState(initialValues);
  const handleSubmit = e => {
    e.preventDefault();
    const array = [...bookData];
    array[bookId.id].title = state.title;
    array[bookId.id].author = state.author;
    array[bookId.id].customer = state.customer;
    array[bookId.id].price = state.price;
    array[bookId.id].image = imageUrl;
    localStorage.setItem("books", JSON.stringify(array));
    const data = JSON.parse(localStorage.getItem("books"));
    console.log(data);
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
    <React.Fragment>
      <main>
        <Mainnav />
        <div className="container">
          <div className="content-box">
            <Heading heading="Edit Book Details" />
            <form onSubmit={handleSubmit} className="gloabal-form" action="">
              <div className="form-group">
                <label htmlFor="title">Book Title</label>
                <input type="text" onChange={handleChange} value={state.title} id="title" name="title" placeholder="Enter Book Title" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author Name</label>
                <input type="text" onChange={handleChange} value={state.author} id="author" name="author" placeholder="Enter Book Author Name" />
              </div>
              <div className="form-group">
                <label htmlFor="customer">Customer Name</label>
                <input type="text" onChange={handleChange} value={state.customer} id="customer" name="customer" placeholder="Enter Book Customer Name" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Book Price</label>
                <input type="text" id="price" onChange={handleChange} value={state.price} name="price" placeholder="Enter Book Price" />
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
              <button className="cancel" onClick={() => location("/")}>
                Cancel
              </button>
              <button>Update</button>
            </form>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Edit;
