import React, { useState } from 'react'

import config from './config/config.json'

import Navbar from './components/navbar/Navbar'
import useFetch from './custom/useFetch'
import Gallery from './components/gallery/Gallery'


const App = () => {
  const [data] = useFetch(`${config.root}photos/?client_id=${config.client_id}`)

  return (
    <div>
      <Navbar />
      <Gallery data={data} />
    </div>
  )
}

export default App