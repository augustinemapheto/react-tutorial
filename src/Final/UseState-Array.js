
import { data } from '../data';
import { useState } from 'react';
import React from 'react'

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    
    const removeItems = () =>{
    };
    const clearAllItems = () =>{
                setPeople([]);
    }
   return( <>   
        {people.map((person) => {
        const {id, name} = person;
        return(
                <div key={id}>
                    <h2>{name}</h2>
                    <button>remove</button>
                </div>
            );
        })}
        <button>Clear Items</button>
        </>
    );
        
    
}

export default UseStateArray