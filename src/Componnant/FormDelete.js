import '../css/FormDelete.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletStagere } from '../data/store'


function FormDelete() {
    // const data = useSelector(state => state.stagere.stageres)

    const dispatch = useDispatch()
    const [serch,setSerch]=useState(0)
    return (
        <div className='FormDelete'>
            <form>
                <h3>Supreme</h3>
                <input type='text' placeholder='Id'  onChange={(e)=>setSerch(e.target.value)}/>
                <button onClick={dispatch(deletStagere(serch))}>Suprime</button>
            </form>

            {/* <italic>
                <div className=''>
                    <h3>List Des Stageres</h3>
                    {
                        data.map((element, index) =>
                            <div key={index}>
                                <div>{element.numero}</div>
                                <div>{element.nomeESTprenome}</div>
                                <div>{element.fileire}</div>

                                <div>
                                    {
                                        element.notes.map((e, i) => < span key={i}>{e.module}</span>)
                                    }
                                </div>


                            </div>)
                    }
                </div>
            </italic> */}


        </div>
    )
}

export default FormDelete