import React from 'react';
// styles
import "./FoxCard.css";

const FoxCard = ({ name, age, description, image }) => {

  return (
    <div className="card" style={{ background: "#f5e2d6" }}>
      <div className="card-top">
        <div className="col-15">
          <img
            src={image}
            className="img-thumbnail"
            style={{ paddingTop: "5px", height: "100%", width: "100%" }}
            alt={name}
          />
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