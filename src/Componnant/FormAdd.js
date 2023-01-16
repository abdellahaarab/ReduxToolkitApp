import '../css/FormDajeuter.css'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addStagere } from '../data/store';


function FormDajeuter() {
    const inputStyle = "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
    const buttonStyle ="bg-gradient-to-r from-orange-500 via-amber-500 to-cyan-300 text-indigo-900 dark:bg-slate-900 rounded-xl p-2 ring-1 ring-slate-900/5 shadow-xl"
    const dispatch = useDispatch()


    const [Numero,setNumero] = useState(null)
    const [Nom,setNom] = useState(null)
    const [Prenom,setPrenom] = useState(null)
    const [Fileire,setFileire ]= useState(null)
    const [Module,setModule] = useState(null)
    const [Moyenne,setMoyenne] = useState(null)
    const [Notes,setNotes] = useState([])
 
    function fAjeuterNote(e){
        e.preventDefault();
        const nts = []
        if(Module && Moyenne){
            
            nts.push(...Notes,{
                module: Module,
                moyanmodule: Moyenne
            } )
            setNotes(nts)
            setModule(null)
            setMoyenne(null)
        }
    }

    function fAjeuter(e){
        e.preventDefault();

        const tStge = {
            numero: Numero,
            nomeESTprenome: Nom +" "+ Prenom,
            fileire: Fileire,
            notes: Notes
        }

        if(Numero && Nom && Prenom && Fileire) {
                dispatch(addStagere(tStge))
                setNumero("")
                setNom("")
                setPrenom("")
                setFileire("")
                setNotes([]) 
        }

    }
  
    return (
        <div className='FormDajeuter'>
            <form>
                <input type="text" value={Numero?Numero:""} placeholder='Numero'  onChange={(e)=>setNumero(e.target.value)   } className={inputStyle}/><br/>
                <input type="text" value={Nom?Nom:""} placeholder='Nom'  onChange={(e)=>setNom(e.target.value)   }   className={inputStyle} /><br/>
                <input type="text" value={Prenom?Prenom:""} placeholder='Prenom' onChange={(e)=>setPrenom(e.target.value)   }  className={inputStyle}  /><br/>
                <input type="text" value={Fileire?Fileire:""} placeholder='Fileire' onChange={(e)=>setFileire(e.target.value)   }   className={inputStyle} /><br/>
                <div style={{backgroundColor:"antiquewhite", padding:"20px 0"}}>

                    <input type="text" value={Module?Module:""} placeholder='Module' onChange={(e)=>setModule(e.target.value)   }   className={inputStyle} /><br/>
                    <input type="text" value={Moyenne?Moyenne:""} placeholder='Moyenne Module' onChange={(e)=>setMoyenne(e.target.value)   }    className={inputStyle} /><br/>
                     <ul>                     
                         {
     Notes.map((e,i)=>< li className='text-blue-600' key={i}>Module : {e.module} - Moyane Module : {e.moyanmodule}</li>)
                        }
                      </ul>
                    <button onClick={fAjeuterNote } className={buttonStyle}>Ajeuter Note</button>

                </div>
                <button onClick={fAjeuter} className={buttonStyle}>Ajeuter Stagere</button>
            </form>
        </div>
    )
}

export default FormDajeuter