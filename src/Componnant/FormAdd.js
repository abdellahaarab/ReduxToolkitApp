import '../css/FormDajeuter.css'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addStagere } from '../data/store';


function FormDajeuter() {

   const dispatch = useDispatch()


    const [Numero,setNumero] = useState(null)
    const [Nom,setNom] = useState(null)
    const [Prenom,setPrenom] = useState(null)
    const [Filier,setFilier ]= useState(null)
    const [Module,setModule] = useState(null)
    const [Moyenne,setMoyenne] = useState(null)
    const [Notes,setNotes] = useState([])
 
    function fAjeuterNote(e){
        e.preventDefault();
        const nts = []
        nts.push(...Notes,{
            module: Module,
            moyenne: Moyenne
        } )
        setNotes(nts)
    }

    function fAjeuter(e){
        e.preventDefault();
        const tStge = {
            numero: Numero,
            nomeESTprenome: Nom  + Prenom,
            filier: Filier,
            notes: Notes
        }
        dispatch(addStagere(tStge))
        console.log(Notes)
    }
  
    return (
        <div className='FormDajeuter'>
            <form>
                <input type="text" placeholder='Numero'  onChange={(e)=>setNumero(e.target.value)   }/><br/>
                <input type="text" placeholder='Nom'  onChange={(e)=>setNom(e.target.value)   }    /><br/>
                <input type="text" placeholder='Prenom' onChange={(e)=>setPrenom(e.target.value)   }    /><br/>
                <input type="text" placeholder='Filier' onChange={(e)=>setFilier(e.target.value)   }    /><br/>
                <div style={{backgroundColor:"antiquewhite", padding:"20px 0"}}>

                    <input type="text" placeholder='Module' onChange={(e)=>setModule(e.target.value)   }    /><br/>
                    <input type="text" placeholder='Moyenne Module' onChange={(e)=>setMoyenne(e.target.value)   }     /><br/>
                    <button onClick={fAjeuterNote }>Ajeuter Note</button>

                </div>
                <button onClick={fAjeuter}>Ajeuter Stagere</button>
            </form>
        </div>
    )
}

export default FormDajeuter