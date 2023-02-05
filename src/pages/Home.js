import React from 'react';
// components
import Header from "../components/header/Header";
// styles
import "../App.css"

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p>
          <a href="/" className="home-link">Go to Detail Page &raquo;</a>
        </p>
      </div>
    </>
  )
}

export default Home;