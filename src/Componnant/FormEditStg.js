import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editStagere } from '../data/store'


function FormEditStg() {
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

    function fEditStagere(e){
        e.preventDefault();
        const tStge = {
            numero: Numero,
            nomeESTprenome: Nom  + Prenom,
            filier: Filier,
            notes: Notes
        }
        dispatch(editStagere({Stge:tStge,id: Numero}))
        console.log(Notes)
    }
  
    return (
        <div className='FormDajeuter'>
            <h3>Edit Stg</h3>
            <form>
                <input type="text" placeholder='Numero pour recherche '  onChange={(e)=>setNumero(e.target.value)   }/><br/>
                <input type="text" placeholder='Nom'  onChange={(e)=>setNom(e.target.value)   }    /><br/>
                <input type="text" placeholder='Prenom' onChange={(e)=>setPrenom(e.target.value)   }    /><br/>
                <input type="text" placeholder='Filier' onChange={(e)=>setFilier(e.target.value)   }    /><br/>
                <div style={{backgroundColor:"red", padding:"20px 0"}}>

                    <input type="text" placeholder='Module' onChange={(e)=>setModule(e.target.value)   }    /><br/>
                    <input type="text" placeholder='Moyenne Module' onChange={(e)=>setMoyenne(e.target.value)   }     /><br/>
                    <button onClick={fAjeuterNote }>Ajeuter Note</button>
                    <button onClick={fAjeuterNote }>Delet All Notes</button>

                </div>
                <button onClick={fEditStagere}>Edit Stagere</button>
            </form>
        </div>
    )
}

export default FormEditStg