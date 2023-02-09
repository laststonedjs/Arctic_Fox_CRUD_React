import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// components
import FileUploader from '../fileUploader/FileUploader'

const CreateNewForm = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [image, setImage] = useState("")
  const [validation, setValidation] = useState(false)
  const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    const foxData = ({ id, name, age, image });

    fetch("http://localhost:3006/foxes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foxData)
    }).then((res) => {
      alert("Successfully Added your new Arctic Fox!");
      navigate("/home")
    }).catch((err) => {
      console.log(err.message);
    })
  };


  return (
    <form className="p-3 bg-success bg-opacity-25 mb-5" onSubmit={submitHandler}>

      <div className='col-lg-12'>
        <input value={id} style={{ display: "none" }} />
      </div>
      <div className="mb-2">
        <FileUploader />
      </div>
      <div className="mb-2">
        <input
          onMouseDown={(e) => setValidation(true)}
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          className="form-control"
          placeholder="Fox name"
        />
        {name.length === 0 && validation && <span className='text-danger'>Please enter the name!</span>}
      </div>
      <div className="mb-2">
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Age"
        />
      </div>

      <div className='control-buttons'>
        <button type="submit" className="btn btn-success">Add a new Arctic Fox!</button>
        <Link to="/home" className="btn btn-danger" style={{ marginLeft: "3px" }}>Go Back</Link>
      </div>

    </form>
  )
}

export default CreateNewForm;