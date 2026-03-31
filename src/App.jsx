import React from 'react'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  )
}

export default App