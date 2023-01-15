import React from 'react'
import { useSelector } from "react-redux";


function ListDesStagers() {
    const data = useSelector(state=>state.stagere.stageres)
    // console.log(data)
   
    
  return (
    <div className='List'>
        <h3>List Des Stageres</h3>
        {
           data ?

            data.map( (element,index) =>  
            <div key={index}>
                      <div>{element.numero}</div> 
                      <div>{element.nomeESTprenome}</div> 
                      <div>{element.fileire}</div> 
                      
                      <div>                     
                         {
                            element.notes.map((e,i)=>< span key={i}>{e.module}</span>)
                        }
                      </div>
                      
                       
            </div> )

            :<p>There's no data </p>
        }
    </div>
  )
} 
// <p key={index}>{element.numero}<br/><p key={index}>{element.numero}<br/></div>
export default ListDesStagers