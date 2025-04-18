import { useState } from 'react'
import './App.css'

import Card from "./Components/Card"

import WC from "./Components/WC"
import Bras from "./Components/Brasileirao"
import CL from "./Components/CL"
import Liber from "./Components/Liber"

function App() {

  const [selected, setSelected] = useState("")

  return (
    <>
      <header>
        <Card campName="World Cup" selectedVar={setSelected}/>
        <Card campName="Champions League"  selectedVar={setSelected}/>
        <Card campName="Brasileirão Serie a 2025"  selectedVar={setSelected}/>
        <Card campName="Libertadores"  selectedVar={setSelected}/>

      </header>
      <div className="camp">
        {(selected === "World Cup" ? <WC /> : "")}
        {(selected === "Champions League" ? <CL /> : "")}
        {(selected === "Brasileirão Serie a 2025" ? <Bras /> : "")}
        {(selected === "Libertadores" ? <Liber /> : "")}
      </div>
    </>
  )
}

export default App
