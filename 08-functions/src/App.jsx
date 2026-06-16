import React from 'react'

const App = () => {
  function btnCLick(){
    console.log("btnCLick");
  }
  return (
    <div>
      <button onClick={btnCLick}>Click me</button>
    </div>
  )
}

export default App
