import React, { useContext } from "react";
import Footer from "../components/Footer";
import { Mainnav } from "../components/Header";
import Heading from "../components/Heading";
import "../styles/cart.scss";
import { GoPlus } from "react-icons/go";
import { FaMinus, FaRupeeSign } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import BookContext from "../components/BookContext";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

function Cart() {
  const gloabalState = useContext(BookContext);
  const cartData = gloabalState.cart;
  const library = gloabalState.library;
  const [cart, setCart] = useState(cartData);
  const handleDelete = id => {
    const convertData = typeof library == "string" ? JSON.parse(library) : library;
    const deltedData = cart.filter(value => {
      return value.id !== id;
    });
    const array = [...convertData];
    array[id - 1].cart = false;
    localStorage.setItem("cart", JSON.stringify(deltedData));
    localStorage.setItem("books", JSON.stringify(array));
    const getlocatcart = JSON.parse(localStorage.getItem("cart"));
    const getlocatlibrary = JSON.parse(localStorage.getItem("books"));
    gloabalState.setCart(getlocatcart);
    gloabalState.setLibrary(getlocatlibrary);
    setCart(deltedData);
  };

  const decreament = index => {
    const cartCount = [...cart];
    cartCount[index].count == 1 ? (cartCount[index].count = 1) : (cartCount[index].count = cartCount[index].count - 1);
    setCart(cartCount);
  };
  const increament = index => {
    const cartCount = [...cart];
    cartCount[index].count = cartCount[index].count + 1;
    console.log(cartCount[index].count);
    setCart(cartCount);
  };
  return (
    <React.Fragment>
      <main>
        <Mainnav />
        <div className="container">
          <div className="cart-wrapper">
            <div className="content-box">
              <Heading heading="Shopping Cart" />
              <div className="crat-wrapper">
                {cart.length > 0 ? (
                  cart.map((cartItme, index) => (
                    <div key={index} className="cart-content-box">
                      <div className="sh sh-mg">
                        <img src={cartItme.image} alt="" />
                      </div>
                      <div className="sh sh-details">
                        <h3>{cartItme.title}</h3>
                        <p className="price">
                          <FaRupeeSign size="12px" /> {cartItme.price}
                        </p>
                      </div>

                      <div className="sh sh-actions">
                        <span onClick={() => decreament(index)}>
                          <FaMinus />
                        </span>
                        <p>{cartItme.count}</p>
                        <span onClick={() => increament(index)}>
                          <GoPlus />
                        </span>
                      </div>
                      <div onClick={() => handleDelete(cartItme.id)} className="sh sh-delete">
                        <RiDeleteBin7Fill size="16px" />
                      </div>
                    </div>
                  ))
                ) : (
                  <img style={{ display: "block", margin: "0 auto", maxWidth: "250px" }} src={require("../images/empty-cart.jpg")} />
                )}
              </div>
            </div>
            {cart.length > 0 && (
              <div className="content-box fi-details">
                <ul>
                  <li>
                    <p>Cupons</p>
                    <Link to="#">Apply</Link>
                    <div className="divider"></div>
                  </li>
                  <li>
                    <h3>Price Details</h3>
                  </li>
                  <li>
                    <p>Total MRP</p>
                    <p>
                      <FaRupeeSign size="12px" /> 250
                    </p>
                  </li>
                  <li>
                    <p>Bag Discount</p>
                    <p>-50</p>
                  </li>
                  <li>
                    <p>Delivery Charges</p>
                    <p>Free</p>
                  </li>
                  <li>
                    <p>Total</p>
                    <p>200</p>
                  </li>
                </ul>
                <div className="btn">Place Order</div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Cart;
