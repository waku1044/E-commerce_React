
import { create } from "zustand";


const useStore = create(
    (set, get)=> ({
        user:{}
        ,
        count : 0,  
            
        registrarUser: (usuario)=>{
        set((state)=>({
            user:{
                ...state.user,
                ...usuario
            }
        }))
        console.log('llamando para registar', usuario)

    },
    countCarrito: (count)=>{
        set((state)=>({
            ...state,
            ...state + count
        }))
    },
    usuario: ()=>{
        return get().user
    }
    
    
    
}))

export default useStore;