import React, { useState } from 'react';
// styles
import "./FileUploader.css";

const FileUploader = () => {
  const [image, setImage] = useState('');

  const onInputChange = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className='custom-file mb-1'>
        <input
          type="file"
          onChange={onInputChange}
          className='file-input'
          id='customFile'
        />
        <div>
          {image && <img src={image} alt="" className='shown-image' />}
        </div>
      </div>
    </>
  )
}

export default FileUploader