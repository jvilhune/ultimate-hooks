import React from 'react'

const Note = ({ note }) => (
  <li>{note.content}</li>
)

const Notes = ({ notes }) => (
  <div>
    {notes.map(note => <Note key={note.id} note={note} />)}
  </div>
)

export default Notes
