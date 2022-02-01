import React, { useState, useEffect } from "react";
import Signup from "../images/signup.jpg";
import Register from "../images/signup-2.png";
import "../styles/SignUp.scss";
import Flashmessage from "./Flashmessage";

function SignUp(props) {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (formValues.email.trim()) {
      localStorage.setItem("email", formValues.email);
    }
    if (formValues.password.trim()) {
      localStorage.setItem("password", formValues.password);
    }
    if (formValues.password.trim()) {
      localStorage.setItem("username", formValues.username);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = values => {
    const errors = {};

    if (!values.username.trim()) {
      errors.username = "Username Required";
    }
    if (!values.email.trim()) {
      errors.email = "Email Required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 4) {
      errors.password = "Password needs to be 4 characters or more";
    }
    return errors;
  };

  return (
    <React.Fragment>
      {Object.keys(formErrors).length === 0 && isSubmit && <Flashmessage message="You have successfully regersterd!" />}
      <div className="signup">
        <div className="container">
          <div className="signup-wrapper">
            <div className="form-image">
              <img src={Register} alt="" />
            </div>
            <div className="signup-form">
              <h1>Register your Account</h1>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="username">Full Name</label>
                  <input type="text" onChange={handleChange} name="username" value={formValues.username} id="username" placeholder="Enter your name" />
                  <p className="error">{formErrors.username}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" onChange={handleChange} name="email" value={formValues.email} id="email" placeholder="You@example.com" />
                  <p className="error">{formErrors.email}</p>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" onChange={handleChange} name="password" value={formValues.password} id="password" placeholder="Create a password" autoComplete="true" />
                  <p className="error">{formErrors.password}</p>
                </div>

                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
