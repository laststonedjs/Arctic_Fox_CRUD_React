import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreateNewForm = () => {
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [file, setFile] = useState("")
  const CreatePhotoField = useRef()
  const [validation, setValidation] = useState(false)

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const foxData = ({ id, name, age, file });

    fetch("http://localhost:3006/foxes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(foxData)
    }).then((res) => {
      alert("Successfully Added your new Arctic Fox!");
      navigate("/")
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
        <input ref={CreatePhotoField} onChange={e => setFile(e.target.files[0])} type="file" className="form-control" />
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
        <Link to="/" className="btn btn-danger" style={{ marginLeft: "3px" }}>Go Back</Link>
      </div>

    </form>
  )
}

export default CreateNewForm;