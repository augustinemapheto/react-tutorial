import React from 'react'


const UseExampleError = () => {
    let count = 0;

    const handleClick = () => {
        count++;
        console.log(count)

    }
  return (<>
      <h1>{count}</h1>
      <form>
        <input type="text" />
      </form>
      <button type="button" onClick={handleClick}>incement</button>
    </>
        );
}

export default UseExampleError