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
            <div key={index} style={{display:"flex"}}>
                      <div>-Numero : {element.numero } - </div> 
                      <div>Nome : {element.nomeESTprenome } - </div> 
                      <div>Fileire : {element.fileire } </div> 
                      
                      <ol>                     
                         {
                            element.notes.map((e,i)=>< li key={i}>Module : {e.module} - Moyane Module : {e.moyanmodule}</li>)
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