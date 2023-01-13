import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addStagere } from '../data/store';


function FormDajeuter() {

   const dispatch = useDispatch()


    const [Numero,setNumero] = useState(0)
    const [Nom,setNom] = useState("")
    const [Prenom,setPrenom] = useState("")
    const [Filier,setFilier ]= useState("")
    const [Module,setModule] = useState("")
    const [Moyenne,setMoyenne] = useState(0)
 
 

    function fAjeuter(e){
        e.preventDefault();
        const tStge = {
            numero:Numero,
            nomeESTprenome:Nom.toString() + Prenom.toString,
            filier:Filier,
            notes:[
                {
                    module:Module,
                    moyenne:Moyenne
                }
            ]
        }
        dispatch(addStagere(tStge))
    }
  
    return (
        <div>
            <form>
                <input type="text" placeholder='Numero'  onChange={(e)=>setNumero(e.target.value)   }/><br/>
                <input type="text" placeholder='Nom'  onChange={(e)=>setNom(e.target.value)   }    /><br/>
                <input type="text" placeholder='Prenom' onChange={(e)=>setPrenom(e.target.value)   }    /><br/>
                <input type="text" placeholder='Filier' onChange={(e)=>setFilier(e.target.value)   }    /><br/>
                <input type="text" placeholder='Module' onChange={(e)=>setModule(e.target.value)   }    /><br/>
                <input type="text" placeholder='Moyenne Module' onChange={(e)=>setMoyenne(e.target.value)   }     /><br/>
                <button onClick={fAjeuter}>Ajeuter</button>
            </form>
        </div>
    )
}

export default FormDajeuter