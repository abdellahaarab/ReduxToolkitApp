import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editStagere } from '../data/store'


function FormEditStg() {
    const data = useSelector(state=>state.stagere.stageres)
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
        <div className='FormDajeuter'>
            <h3>Edit Stg</h3>
            <form>
                <input type="text" value={Numero} placeholder='Numero pour recherche '  onChange={fSerch}/><br/>
                <input type="text" value={Nom} placeholder='Nom'  onChange={(e)=>setNom(e.target.value)   }    /><br/>
                <input type="text" value={Fileire} placeholder='Fileire' onChange={(e)=>setFileire(e.target.value)   }    /><br/>
                <div style={{backgroundColor:"red", padding:"20px 0"}}>

                    <input type="text" value={Module} placeholder='Module' onChange={(e)=>setModule(e.target.value)   }    /><br/>
                    <input type="text" value={Moyenne} placeholder='Moyenne Module' onChange={(e)=>setMoyenne(e.target.value)   }     /><br/>
                    <span>
                        <ul>                     
                            {
    Notes && Notes.map((e,i)=>< li key={i}>Module : {e.module} - Moyane Module : {e.moyanmodule}</li>)
                            }
                        </ul>
                    </span>
                    <button onClick={fAjeuterNote }>Ajeuter Note</button>
                    <button onClick={fCancelAllNote }>Cancal All Notes</button>

                </div>
                <button onClick={fEditStagere}>Edit Stagere</button>
            </form>
        </div>
    )
}

export default FormEditStg