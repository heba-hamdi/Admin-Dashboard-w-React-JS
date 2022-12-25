import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Header = ({category, title}) => {
  const {currentColor}=useStateContext();
  return (
    <div className='mb-10'>
      <p className='text-gray-400'></p>
      {category}
      <p className='text-4xl font-extrabold tracking-tight' style={{color:currentColor}}>{title}</p>
    </div>
  )
}

export default Header
