import React, { useState } from 'react'

const UseStateObjects = () => {
    const [person,setPerson] = useState({
        name: 'peter',
        age: 21,
        hobby: 'coding'
    });
     
    const displayPerson = () => {
        setPerson({name: 'john', age: 23, hobby: 'debug'});
    }
  return (
    <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>Enjoys : {person.hobby}</h1>
    <button onClick={displayPerson}>Change</button>
    </>
  )
}

export default UseStateObjects;