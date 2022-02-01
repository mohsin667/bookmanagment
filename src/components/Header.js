import React, { useState, useEffect, useContext } from "react";
import "../styles/Header.scss";
import Flashmessage from "./Flashmessage";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { IoMenu, IoClose, IoBookSharp } from "react-icons/io5";
import BookContext from "./BookContext";

export const Header = () => {
  const navigate = useNavigate();
  const booklist = useContext(BookContext);
  const initialValues = {
    email: "",
    password: ""
  };
  const [state, setState] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(state));
    setIsSubmit(true);
    if (state.email === localStorage.getItem("email") && state.password === localStorage.getItem("password")) {
      const updateLoginStorage = async () => {
        const setlogin = localStorage.setItem("isLoggedIn", 1);
        const returnLogin = localStorage.getItem("isLoggedIn");
        return returnLogin;
      };
      updateLoginStorage().then(response => {
        console.log(response);
        booklist.setLoggedIn(response);
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(state);
    }
  }, [formErrors, booklist.booklist]);

  const validate = values => {
    const errors = {};
    if (!values.email.trim()) {
      errors.email = "Please enter the Email";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Please enter the valid email address";
    } else if (state.email !== localStorage.getItem("email")) {
      errors.email = "Email does not exist";
    }

    if (!values.password.trim()) {
      errors.password = "Please enter the password";
    } else if (values.password !== localStorage.getItem("password")) {
      errors.password = "Incorrect Password";
    }
    return errors;
  };

  return (
    <React.Fragment>
      {Object.keys(formErrors).length === 0 && isSubmit && <Flashmessage message="You have successfully logged In!" />}
      <nav className="header">
        <div className="container">
          <div className="inner-nav">
            <Link className="logo" to="/">
              <IoBookSharp id="logo" />
            </Link>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" onChange={handleChange} name="email" value={state.email} placeholder="Email" />
                  <p className="error">{formErrors.email}</p>
                </div>
                <div className="form-group">
                  <input type="password" onChange={handleChange} name="password" value={state.password} placeholder="Password" autoComplete="true" />
                  <p className="error">{formErrors.password}</p>
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export const Mainnav = () => {
  const navigate = useNavigate();
  const booklist = useContext(BookContext);
  const [nav, setNav] = useState(false);
  const signOut = () => {
    const setlogin = localStorage.setItem("isLoggedIn", 0);
    const returnLogin = localStorage.getItem("isLoggedIn");
    booklist.setLoggedIn(returnLogin);
    navigate("/");
  };
  const toggleNavbar = () => {
    setNav(!nav);
  };
  return (
    <nav className="header mainHeader">
      <div className="mobile-nav">
        <Link to="/">
          <IoBookSharp id="logo" />
        </Link>
        {nav ? <IoClose onClick={toggleNavbar} size="30px" color="#3f8acc" /> : <IoMenu onClick={toggleNavbar} size="30px" color="#3f8acc" />}
      </div>
      <div className="container">
        <div className="inner-nav" style={nav ? { left: 0 } : { left: "-110%" }}>
          <Link className="logo" to="/">
            <IoBookSharp id="logo" />
            {/* <img src={logo} alt="logo" /> */}
          </Link>

          <div className="menu">
            <ul>
              <li>
                <NavLink className={navData => (navData.isActive ? "active" : null)} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={navData => (navData.isActive ? "active" : null)} to="/booklibrary">
                  Assignment #2
                </NavLink>
              </li>
              <li>
                <NavLink className={navData => (navData.isActive ? "active" : null)} to="/addbook">
                  Add a Book
                </NavLink>
              </li>
            </ul>
            <div className="cart">
              <NavLink className={navData => (navData.isActive ? "active" : null)} to="/cart">
                <FiShoppingCart size="20px" color="#3f8acc" />
                <span className="cart-counter">{booklist.cart.length}</span>
                <span>Cart</span>
              </NavLink>
            </div>

            <div className="logout" onClick={signOut}>
              <GoSignOut size="20px" color="#3f8acc" />
              <p>Sign Out</p>
            </div>

            <div className="user-profile">
              <div className="profile-image">
                <img src="https://avatars.githubusercontent.com/u/29727197" alt="" />
              </div>
              <p>{localStorage.getItem("username")}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
