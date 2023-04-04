import React from 'react';
import { useState } from 'react';

const UseStateBasics = () => {
    const [count, setCount] = useState(0);
    const [name, SetName] = useState("Unity");

    const changeName = () =>{
      SetName("Augustine")
    } 

    const handleClick = () => {
        setCount(count + 1)
    }
  return (
    <>
        <h4>You Changed name to {name} </h4>
        <button type='button' className='btn' onClick={handleClick}>increment</button>
        <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default UseStateBasics;