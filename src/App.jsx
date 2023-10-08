import React, { useEffect } from 'react'


import { useField, useResource } from './hooks'
import AddNote from './components/AddNote'
import AddPerson from './components/AddPerson'
import Notes from './components/Notes'
import Persons from './components/Persons'

const App = () => {
  const content = useField('text')
  const name = useField('text')
  const number = useField('text')

  const baseUrl = 'http://localhost:3001'

  const [notes, noteService] = useResource(`${baseUrl}/notes`)
  const [persons, personService] = useResource(`${baseUrl}/persons`)

  useEffect(() => {
    noteService.getAll()
    personService.getAll()
  }, [])

  function handleNoteSubmit(event) {
    event.preventDefault()
    noteService.create({ content: content.value })
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({
      'name': name.value,
      'number': number.value
    })
  }

  return (
    <div>
      <div>
        <h2>notes</h2>
        <AddNote handleSubmit={handleNoteSubmit} content={content} />
        <Notes notes={notes} />
      </div>
      <div>
        <h2>persons</h2>
        <AddPerson handleSubmit={handlePersonSubmit} name={name} number={number} />
        <Persons persons={persons} />
      </div>
    </div>
  )
}

export default App