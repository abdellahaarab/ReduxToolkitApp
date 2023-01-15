import '../css/FormDajeuter.css'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addStagere } from '../data/store';


function FormDajeuter() {
    
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
                <input type="text" value={Numero?Numero:""} placeholder='Numero'  onChange={(e)=>setNumero(e.target.value)   }/><br/>
                <input type="text" value={Nom?Nom:""} placeholder='Nom'  onChange={(e)=>setNom(e.target.value)   }    /><br/>
                <input type="text" value={Prenom?Prenom:""} placeholder='Prenom' onChange={(e)=>setPrenom(e.target.value)   }    /><br/>
                <input type="text" value={Fileire?Fileire:""} placeholder='Fileire' onChange={(e)=>setFileire(e.target.value)   }    /><br/>
                <div style={{backgroundColor:"antiquewhite", padding:"20px 0"}}>

                    <input type="text" value={Module?Module:""} placeholder='Module' onChange={(e)=>setModule(e.target.value)   }    /><br/>
                    <input type="text" value={Moyenne?Moyenne:""} placeholder='Moyenne Module' onChange={(e)=>setMoyenne(e.target.value)   }     /><br/>
                     <ul>                     
                         {
     Notes.map((e,i)=>< li key={i}>Module : {e.module} - Moyane Module : {e.moyanmodule}</li>)
                        }
                      </ul>
                    <button onClick={fAjeuterNote }>Ajeuter Note</button>

                </div>
                <button onClick={fAjeuter}>Ajeuter Stagere</button>
            </form>
        </div>
    )
}

export default FormDajeuter