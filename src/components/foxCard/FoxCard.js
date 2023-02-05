import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// styles
import "./FoxCard.css";

const FoxCard = (props) => {
  const [foxes, setFoxes] = useState([]);
  const [file, setFile] = useState();
  const { id, name, age, description, image } = props;
  const navigate = useNavigate();

  console.log(foxes);

  return (
    <div className="card" style={{ background: "#f5e2d6" }}>
      <div className="our-card-top">

        <div className="custom-input">
          <div className="custom-input-interior">
            <input onChange={e => setFile(e.target.files[0])} className="form-control form-control-m" type="file" />
          </div>
        </div>

        <div className="col-15">
          <img src={image} className="img-thumbnail" style={{ paddingTop: "5px", height: "100%", width: "100%" }} alt="arctic fox" />
        </div>
      </div>
      <div className="card-body">
        <h4 className="text-medium" style={{ color: "#512d15" }}>My Name is: {name}</h4>
        <p className="text-muted small">Age: {age}</p>
        <div className='desc-text'>QA: {description}</div>
      </div>
    </div>
  )
}

export default FoxCard;