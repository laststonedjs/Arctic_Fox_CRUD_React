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
    <div className="home-wrapper">
      <Header />
      <div className="container">
        <p>
          <a href="/home" className="home-link">Go to Detail Page &raquo;</a>
        </p>
        <div>
          {
            foxData &&
            foxData.map(item => (
              <div
                key={item.id}
                className='home-card-items'>
                <FoxCard
                  name={item.name}
                  age={item.age}
                  image={item.image}
                  description={item.description}
                />
              </div>
            )
            )}
        </div>
      </div>
    </div>
  )
}

export default Home;