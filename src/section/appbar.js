import React from 'react'
import FormRechercher from '../Componnant/FormRechercher'
import { Link } from 'react-router-dom'

function Appbar() {
  return (
    <div className='bg-gray-400 flex items-center p-3'>
        <div className='flex-1'>
           <ul  className='flex'>
              <li className='flex-1'>
                <Link to="/"> All data </Link>
              </li> 
              <li className='flex-1' >
                <Link to="/ajeuter">Add STG</Link>
              </li>
              <li className='flex-1' >
                <Link to="/delete">Delete STG</Link>
              </li> 
              <li className='flex-1' >
                <Link to="/edit">Update STG</Link>
              </li> 
           </ul>
        </div>
        <FormRechercher className='flex-5'/>
    </div>
  )
}

export default Appbar