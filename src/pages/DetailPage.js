import React from 'react';
// components
import Header from "../components/header/Header";
import FoxList from "../components/foxList/FoxList";
// styles
import "../App.css"

const DetailPage = () => {

  return (
    <>
      <Header />
      <div className="container">
        <p style={{ textDecoration: "none", marginTop: "3%", marginLeft: "1%" }}>
          <a href="/" className="home-link">&laquo; Back to Homepage</a>
        </p>
        <div className="fox-grid">
          <FoxList />
        </div>
      </div>
    </>
  )
}

export default DetailPage;