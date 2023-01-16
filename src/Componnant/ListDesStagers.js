import React from 'react'
import { useSelector } from "react-redux";


function ListDesStagers() {
    const data = useSelector(state=>state.stagere.stageres)
    // console.log(data)
   
    
  return (
    <div className='bg-gradient-to-r from-lime-200 via-green-200 to-cyan-100 p-6'>
        <h3 className='text-xl font-bold' >List Des Stageres</h3>
        {
           data ?

            data.map( (element,index) =>  
            <div key={index} style={{display:"flex"}} className="p-2 drop-shadow-lg bg-amber-300 rounded-md">
                      <div>
                        <span className='font-medium p-1'>Numero </span> : {element.numero} 
                      </div> 
                      <div>
                        <span className='font-medium p-1'>Nome</span> : {element.nomeESTprenome } 
                      </div> 
                      <div>
                        <span className='font-medium p-1'>Fileire</span> : {element.fileire } 
                      </div> 
                      
                      <ol>                     
                         {
                            element.notes.map((e,i)=>
                              < li key={i}>
                                <span className='font-medium p-1'>Module</span> : {e.module} - Moyane Module : {e.moyanmodule}</li>)
                        }
                      </ol>
                      
                       
            </div> )

            :<p>There's no data </p>
        }
    </div>
  )
} 
// <p key={index}>{element.numero}<br/><p key={index}>{element.numero}<br/></div>
export default ListDesStagers