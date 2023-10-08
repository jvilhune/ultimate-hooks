import React from 'react'

const Person = ({ person }) => (
  <div>
    <li>{person.name} {person.number}</li>
  </div>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map(person =>
      <Person key={person.id} person={person} />)}
  </div>
)

export default Persons
