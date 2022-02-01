import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import SignUp from "../components/SignUp";

function Registration() {
  return (
    <React.Fragment>
      <Header />
      <SignUp />
    </React.Fragment>
  );
}

export default Registration;
