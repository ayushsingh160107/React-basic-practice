import React from 'react'
import { useContext } from 'react'
import { theme } from './contextAPI';
const Button = () => {
    const themeColor=useContext(theme);
    const color=themeColor;
  return (
    <div>
      <h1>{color}</h1>
    </div>
  )
}
 
export default Button
 