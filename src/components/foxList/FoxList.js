import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
// components
import FoxCard from '../foxCard/FoxCard';
// styles
import "./FoxList.css";

const FoxList = () => {
  const [foxData, setFoxData] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/foxes/edit/" + id)
  }

  const LoadDetail = (id) => {
    navigate("/foxes/detail/" + id)
  }

  const RemoveItem = (id) => {
    if (window.confirm('Do you really want to remove?')) {

      fetch("http://localhost:3006/foxes" + id, {
        method: "DELETE"
      }).then((res) => {
        alert("Removed successfully!");
        window.location.reload();
      }).catch((err) => {
        console.log(err.message);
      })
      var index = foxData.map((e) => {
        return e.id
      }).indexOf(id);

      foxData.splice(index, 1);
    }
  }

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
    <div className='container'>
      <div className='add-fox-btn'>
        <div style={{ marginBottom: "8px", position: "relative", left: "38%", padding: "1rem" }}>
          <Link
            to="/foxes/add"
            className='btn btn-success'>
            Add Fox in Collection (+)
          </Link>
        </div>

        <div className="foxList">
          {
            foxData &&
            foxData.map(item => (
              <div key={item.id}>
                <FoxCard
                  name={item.name}
                  age={item.age}
                  image={item.image}
                  description={item.description}
                />
                <div className='btn-group'>
                  <button
                    onClick={(e) => { LoadEdit(item.id) }}
                    class="btn btn-outline-warning">
                    Edit
                  </button>
                  <button
                    class="btn btn-danger"
                    onClick={() => { RemoveItem(item.id) }}
                  >
                    Delete
                  </button>
                  <button
                    class="btn btn-info"
                    onClick={() => { LoadDetail(item.id) }}
                  >
                    Details
                  </button>
                </div>
              </div>
            )
            )}
        </div>
      </div>
    </div>
  )
}

export default FoxList;