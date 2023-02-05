import React from 'react'

const FileUploader = ({ }) => {

  const onInputChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <form method='post' action='#' id='#'>
      <div className='form-group files'>
        <label>Upload your image/file..</label>
        <input
          type="file"
          onChange={onInputChange}
          className='form-control'
          multiple=''
        />
      </div>

      <button
        type="button"
        class="btn btn-outline-primary"
        disabled
      >Submit
      </button>
    </form>
  )
}

export default FileUploader