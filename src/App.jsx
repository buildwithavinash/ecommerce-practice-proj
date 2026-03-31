import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<div>Checkout</div>} />
    </Routes>
  )
}

export default App