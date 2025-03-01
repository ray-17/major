import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Display from './pages/Display/Display'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Display />} />
    </Routes>
    
  )
}

export default App

