import React, { useState, useEffect } from 'react';
// components
import Header from "../components/header/Header";
import FoxCard from '../components/foxCard/FoxCard';
// styles
import "../App.css"

const Home = () => {
  const [foxData, setFoxData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/foxes").then((res) => {
      return res.json();
    }).then((resp) => {
      setFoxData(resp);
    }).catch((err) => {
      console.log(err.message)
    })
  }, [])


  return (
    <>
      <Header />
      <p className='home-nav'>
        <a href="/home" style={{ textDecoration: "none", color: "crimson" }}>Go to Detail Page &raquo;</a>
      </p>
      <div className='home-card-wrapper'>
        <div className='home-card-items'>
          {
            foxData &&
            foxData.map(item => (
              <FoxCard
                key={item.id}
                name={item.name}
                age={item.age}
                image={item.image}
                description={item.description}
              />
            )
            )}
        </div>
      </div>
    </>
  )
}

export default Home;