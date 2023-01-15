import '../css/FormDelete.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletStagere } from '../data/store'


function FormDelete() {
    // const data = useSelector(state => state.stagere.stageres)

    const dispatch = useDispatch()
    const [serch,setSerch]=useState(0)


    function fDelet(e){
        e.preventDefault();
        dispatch(deletStagere(serch))
    }
    return (
        <div className='FormDelete'>
            <form>
                <h3>Supreme</h3>
                <input type='text' placeholder='Id'  onChange={(e)=>setSerch(e.target.value)}/>
                <button onClick={fDelet}>Suprime</button>
            </form>
        </div>
    )
}

export default FormDelete