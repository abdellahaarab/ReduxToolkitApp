import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function FormRechercher() {
  const data = useSelector(state=>state.stagere.stageres)
  const [Serch, setSerch] = useState('')
  const [Resulte, setResulte ] = useState(null)

  function fRes(e){
    e.preventDefault();
    const resulte = data.find((v) => v.nomeESTprenome === Serch)
    setResulte(resulte)
  }
  return (
    <div>
        <input type="text" onChange={(e)=>setSerch(e.target.value)} placeholder='Something to start ...'/> 
        <button onClick={fRes}>Rechercher</button>
        <span >
             {
                Resulte ?
                  
                <div style={{display:"flex"}}>
                          <div>-Numero : {Resulte.numero } - </div> 
                          <div>Nome : {Resulte.nomeESTprenome } - </div> 
                          <div>Fileire : {Resulte.fileire } </div> 
                          
                          <ol>                     
                             {
                                Resulte.notes.map((e,i)=>< li key={i}>Module : {e.module} - Moyane Module : {e.moyanmodule}</li>)
                            }
                          </ol>
                          
                           
                </div> 
                :
                <p>There's no data </p>
             }
        </span>
    </div>
  )
}

export default FormRechercher