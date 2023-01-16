import '../css/FormDelete.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletStagere } from '../data/store'


function FormDelete() {
    // const data = useSelector(state => state.stagere.stageres)
    const buttonStyle ="bg-gradient-to-r from-orange-500 via-amber-500 to-cyan-300 text-indigo-900 dark:bg-slate-900 rounded-xl p-2 ring-1 ring-slate-900/5 shadow-xl"
    const inputStyle = "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"


    const dispatch = useDispatch()
    const [serch,setSerch]=useState(0)


    function fDelet(e){
        e.preventDefault();
        dispatch(deletStagere(serch))
    }
    return (
        <div className='FormDelete'>
            <h3 className='p-3 font-bold'>Supreme</h3>
            <form className='flex'>
                <input type='text' placeholder='Id'  onChange={(e)=>setSerch(e.target.value)} className={inputStyle}/>
                <button onClick={fDelet} className={buttonStyle}>Suprime</button>
            </form>
        </div>
    )
}

export default FormDelete