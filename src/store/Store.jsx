
import { create } from "zustand";


const useStore = create(
        (set, get)=> ({
            user:{}
       ,
    registrarUser: (usuario)=>{
        set((state)=>({
            user:{
                ...state.user,
                ...usuario
            }
        }))
        console.log('llamando para registar', usuario)

    },
    usuario: ()=>{
        return get().user
    }
    
    
    
}))

export default useStore;