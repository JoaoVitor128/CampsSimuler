import { useState } from 'react'
import './App.css'

import WC from "./Components/WC"
import Bras from "./Components/Brasileirao"
import CL from "./Components/CL"

function App() {

  return (
    <>
      <h1>🏆World Cup Simuler🏆</h1>
      <div className="table">
        <WC />
      </div>
      <h1>🏆Champions League 2025🏆</h1>
      <div className="table">
        <CL />
      </div>
      <h1>🏆Brasileirão 2025🏆</h1>
      <div className="table">
        <Bras />
      </div>
    </>
  )
}

export default App
