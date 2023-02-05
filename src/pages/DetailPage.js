import React, { useState } from 'react';
// components
import Header from "../components/header/Header";
import FoxList from "../components/foxList/FoxList";
// styles
import "../App.css"
// api
import api from "../api/foxes";


const DetailPage = () => {
  const [foxData, setFoxData] = useState([]);

  // add foxes
  const addFoxHandler = async (foxes) => {
    console.log(foxes);
    const request = {
      ...foxData,
    };

    const response = await api.post("/foxes", request);
    console.log(response);
    setFoxData([...foxData, response.data]);
  }

  return (
    <>
      <Header />
      <div className="container">
        <p style={{ textDecoration: "none", marginTop: "2px" }}>
          <a href="/home" className="home-link">&laquo; Back to Homepage</a>
        </p>
        <div className="fox-grid">
          <FoxList
            foxes={foxData}
          />
        </div>
      </div>
    </>
  )
}

export default DetailPage;