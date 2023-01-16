import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editStagere } from '../data/store'


function FormEditStg() {
    const inputStyle = "placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
    const buttonStyle ="bg-gradient-to-r from-orange-300 via-amber-300 to-cyan-100 m-2 text-indigo-900 dark:bg-slate-900 rounded-xl p-2 ring-1 ring-slate-900/5 shadow-xl"

    // const data = useSelector(state=>state.stagere.stageres)
    const dispatch = useDispatch()

    const [Numero,setNumero] = useState("")
    const [Nom,setNom] = useState("")
    const [Prenom,setPrenom] = useState("")
    const [Fileire,setFileire ]= useState("")
    const [Module,setModule] = useState("")
    const [Moyenne,setMoyenne] = useState("")
    const [Notes,setNotes] = useState([])
 
    function fAjeuterNote(e){
        e.preventDefault();
        const nts = []
        nts.push(...Notes,{
            module: Module,
            moyanmodule: Moyenne
        } )
        setNotes(nts)

        setModule("")
        setMoyenne("")

    }

    function fEditStagere(e){
        e.preventDefault();
        const tStge = {
            numero: Numero,
            nomeESTprenome: Nom  +" "+ Prenom,
            fileire: Fileire,
            notes: Notes
        }
        dispatch(editStagere({Stge:tStge,id: Numero}))
        setNumero("")
        setNom("")
        setPrenom("")
        setFileire("")
        setNotes([])
    }

    function fSerch(e){
        e.preventDefault();
        setNumero(e.target.value);
        // const elemant = data.filter((stg,i) => Numero === stg.numero)

        // setNom(elemant[0] ? elemant[0].nomeESTprenome : "")
        // setFileire(elemant[0] ? elemant[0].fileire : "")
        // setNotes(elemant[0] ? elemant[0].notes : [])
    }

    function fCancelAllNote(e){
        e.preventDefault();
        setNotes([])
    }
    
    
    return (
        <div className='FormDajeuter p-4 bg-slate-50 shadow-lg'>
            <h3 className='text-black font-bold'>Edit Stg</h3>
            <form className='p-5 drop-shadow-2xl'>
                <input type="text" value={Numero} placeholder='Numero pour recherche '  onChange={fSerch}  className={inputStyle}/><br/>
                <input type="text" value={Nom} placeholder='Nom'  onChange={(e)=>setNom(e.target.value)   }    className={inputStyle}/><br/>
                <input type="text" value={Fileire} placeholder='Fileire' onChange={(e)=>setFileire(e.target.value)   }  className={inputStyle}  /><br/>
                <div style={{backgroundColor:"red", padding:"20px 0"}} className="bg-gradient-to-r from-slate-200  to-cyan-500 rounded-xl">

                    <input type="text" value={Module} placeholder='Module' onChange={(e)=>setModule(e.target.value)   }   className={inputStyle} /><br/>
                    <input type="text" value={Moyenne} placeholder='Moyenne Module' onChange={(e)=>setMoyenne(e.target.value)   }  className={inputStyle}   /><br/>
                    <span>
                        <ul className='p-4 text-slate-100 transition-all ease-in duration-300'>                     
                            {
    Notes && Notes.map((e,i)=>< li key={i}>Module : {e.module} - Moyane Module : {e.moyanmodule}</li>)
                            }
                        </ul>
                    </span>
                    <button onClick={fAjeuterNote } className={buttonStyle} >Ajeuter Note</button>
                    <button onClick={fCancelAllNote } className={buttonStyle} >Cancal All Notes</button>

                </div>
                <button onClick={fEditStagere} className={buttonStyle}>Edit Stagere</button>
            </form>
        </div>
    )
}

export default FormEditStg