import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username);
    
    setUsername('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        className='py-4 px-3 text-xl m-5 bg-white text-black rounded' type="text" placeholder='Enter Your Name' />
        <button className='py-4 px-3 text-xl m-5 bg-emerald-500 font-semibold rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App