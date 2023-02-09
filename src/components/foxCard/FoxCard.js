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
        <h4 className="text-medium" style={{ color: "#512d15" }}>My Name is <i style={{ fontSize: "28px", marginLeft: "5px" }}>{name}</i></h4>
        <p className="text-small">Age: {age}</p>
        <div className='desc-text'><i>{description}</i></div>
      </div>
    </div>
  )
}

export default FoxCard;