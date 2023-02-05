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

  console.log(foxData);
  return (
    <div>
      <p style={{ textDecoration: "none", marginTop: "2px", marginLeft: "5px" }}>
        <a href="/" className="home-link">&laquo; Back to Foxy page</a>
      </p>
      <Header />
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{foxData.name}</h5>
          <p class="card-text">I am {foxData.age} yers old and live in a family consisting of one adult male, the young, and two vixens, one a non-breeding female born the year before that helps look after the next litter. </p>
          <p class="card-text"><small class="text-muted">Years: {foxData.age}</small></p>
        </div>

        <div className='card-detail'>
          {foxData &&
            <>
              <h2>This friend is called: {foxData.name} ({foxData.id})</h2>
              {/* <p><img src={foxData.image} class="card-img-bottom" alt="wider-card" /></p> */}
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default FoxDetail;