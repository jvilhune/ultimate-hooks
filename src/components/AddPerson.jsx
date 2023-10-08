import React from 'react'

const AddPerson = ({ handleSubmit, name, number }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        name <input {...name} />
      </div>
      <div>
        number <input {...number} />
      </div>
      <button>create</button>
    </form>
  </div>
)

export default AddPerson
