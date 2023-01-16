import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialData = {
    stageres : [
        {
            numero: 1,
            nomeESTprenome:"AAV ABAB",
            fileire:"DD",
            notes:[
                {module:"M123", moyanmodule:52},
                {module:"M123", moyanmodule:52},
            ]
        }
    ]
} 

const stageresSlice = createSlice(
     {
        name: "stageres",
        initialState: initialData, // {stageres : []},
        reducers:{
            addStagere:(state , action) => {
                const stg = action.payload;
                state.stageres && state.stageres.push(stg);
            },
            deletStagere:(state,action)=>{  
                state = state.stageres && state.stageres.filter((stg,index) => stg.numero !== action.payload);
                return { stageres : state}
            },
            editStagere:(state,action)=>{
                // console.log("Id ======= ",action.payload.id)
                // console.log("Data ======= ",action.payload.Stge)
                const data = state.stageres && state.stageres.filter((stg,index) => stg.numero !== action.payload.id);
                data.push(action.payload.Stge)
                return { stageres : data}
            }
        }

     }
)



export const store = configureStore(
        {
            reducer:{
                stagere : stageresSlice.reducer, 
            }
        }
)


export const { addStagere, deletStagere, editStagere } = stageresSlice.actions