import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async()=> {
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
    console.log(data[0].download_url);
  }

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-800 text-white font-semibold text-2xl px-6 py-4 rounded active:scale-90'>Get Data</button>
      <div className='p-5 mt-5 bg-gray-900'>
        {
          data.map(function (elem, idx) {
            return <div key={idx} className='bg-gray-300 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
              <img className='h-40' src={elem.download_url} alt="" />
              <h1>{elem.author}</h1>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default App
