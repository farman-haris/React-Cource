import React from 'react'

const App = () => {

  const SubmitHandler = (e)=>{
    e.preventDefault()

    console.log("submitted");
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}>
        <input className='px-4 py-3 text-xl m-5 bg-white text-black' type="text" placeholder='Enter your name' />
        <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App
