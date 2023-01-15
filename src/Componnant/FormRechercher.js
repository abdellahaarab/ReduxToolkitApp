import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function FormRechercher() {
  const data = useSelector(state=>state.stagere.stageres)
  const [Serch, setSerch] = useState('')

  function fRes(e){
    e.preventDefault();
    // console.log(data)
    const resulte = data.find((v) => v.nomeESTprenome === Serch)
    console.log("Data : ", resulte)
  }
  return (
    <div>
        <input type="text" onChange={(e)=>setSerch(e.target.value)} placeholder='Something to start ...'/> 
        <button onClick={fRes}>Rechercher</button>
    </div>
  )
}

export default FormRechercher