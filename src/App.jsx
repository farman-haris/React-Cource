import React, { useState } from 'react'

const App = () => {
  const [user, setUser] = useState(10)

  const change_User = () => {
    setUser(20)
  }
  return (
    <div>
      <h2>Username is {user}</h2>
      <button onClick={change_User}>Change User</button>
    </div>
  )
}

export default App
const user = "Farman"
const age = 69
