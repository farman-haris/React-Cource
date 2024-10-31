import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  return (
    <div>
      <h3>Number is {num}</h3>
      <button onClick={()=>{
        setNum(num+10)
      }}>Increament</button>
      <button onClick={()=>{
        setNum(num-10)
      }}>Decreament</button>
    </div>
  )
}

export default App
