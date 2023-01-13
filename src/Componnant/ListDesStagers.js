import React from 'react'
import { useSelector } from "react-redux";


function ListDesStagers() {
    const data = useSelector(state=>state.stagere.stageres)
    console.log(data)
  return (
    <div>
        <h3>List Des Stageres</h3>
        {
            data.map((element,index)=><p key={index}>{element.numero}<br/></p>)
        }
    </div>
  )
} 

export default ListDesStagers