import React from 'react'

function Card(props){
  return (
    <div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1774028156721-706b219614b2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"/>
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
