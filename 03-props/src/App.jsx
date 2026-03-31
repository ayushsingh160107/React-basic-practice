import React from 'react'
import './App.css'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Ayush Singh' />
      <Card user='Sarthak Sharma' />
      <Card user='Zeeshan lodu' />
    </div>
  )
}

export default App
