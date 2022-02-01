import React from "react";
import BookList from "../components/BookList";
import Footer from "../components/Footer";
import { Mainnav } from "../components/Header";

function Home() {
  return (
    <React.Fragment>
      <main>
        <Mainnav />
        <BookList />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
