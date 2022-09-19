import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Menu from './Menu'

function App() {
  return (
    <>
      <header className="header">
        <h1>Cafe Interface</h1>
      </header>
      <Routes>
        <Route path="/" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
