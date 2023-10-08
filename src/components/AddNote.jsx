import React from 'react'

const AddNote = ({ handleSubmit, content }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input {...content} />
      <button>create</button>
    </form>
  </div>
)

export default AddNote
