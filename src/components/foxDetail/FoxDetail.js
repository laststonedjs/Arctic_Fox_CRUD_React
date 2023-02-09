import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// components
import Header from '../header/Header'
// styles
import "./FoxDetail.css";

const FoxDetail = () => {
  const [foxData, setFoxData] = useState({});
  const { foxid } = useParams();

  useEffect(() => {
    fetch("http://localhost:3006/foxes/" + foxid).then((res) => {
      return res.json();
    }).then((resp) => {
      setFoxData(resp);
    }).catch((err) => {
      console.log(err.message)
    })
  }, []);


  return (
    <div>
      <Header />
      <h2 style={{ textDecoration: "none", marginTop: "2%", marginLeft: "7%" }}>
        <a href="/home" className="home-link">&laquo; Back to Foxy page</a>
      </h2>
      <div className="card mb-2" style={{ maxWidth: "80%", marginLeft: "7%", marginTop: "2%" }}>
        <div className="row no-gutters">
          <div className='col-md-6'>
            {foxData &&
              <>
                <img src={foxData.image} className='card-img' alt="detail-card" />
              </>
            }
          </div>
          <div className='col-md-5'>
            <div className='card-body mt-4'>
              <h4 className="card-title mb-3">{foxData.name}</h4>
              <p className="card-text">I am <strong>{foxData.age}</strong> years old and live in a family consisting of one adult male, the young, and two vixens, one a non-breeding female born the year before that helps look after the next litter. </p>
              <p className="card-text"><small className="text-medium"><strong>Eats:</strong> {foxData.food}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoxDetail;