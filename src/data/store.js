import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialData = {
    stageres : [
        {
            numero:1,
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
        initialState: initialData,
        reducers:{
            addStagere:(state , action) => {
                const stg = action.payload;
                state.stageres.push(stg);
            },
            deletStagere:(state,action)=>{
                return  state.filter( stg=> stg.numero !== action.payload.numero);
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


export const { addStagere, deletStagere } = stageresSlice.actions