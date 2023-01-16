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
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 '>
        <div className='flex items-center'>

          <input type="text" className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm' onChange={(e)=>setSerch(e.target.value)} placeholder='Something to start ...'/> 
          <button onClick={fRes} className='inline-flex items-center justify-center rounded-md p-2 bg-slate-50 text-yellow-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu'>Rechercher</button>
          
        </div>  
        <span className='selection:bg-fuchsia-300 selection:text-fuchsia-900'>
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
                <p className='text-slate-100 p-3' >There's no data </p>
             }
        </span>
    </div>
  )
}

export default FormRechercher