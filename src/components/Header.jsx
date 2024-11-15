import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
      <h2 className='text-2xl'>Haris</h2>
      <div className='flex gap-10'>
      <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
      <input className='px-5 py-2 rounded text-black' type="text" placeholder='Search'/>
    </div>
  )
}

export default Header
