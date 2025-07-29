import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
        },
        deleteFormCart(state,action){
            return state.filter(item=>item.id!=action,payload.id)
        },
        incrementQuantity:(state,acton)=>{
            state=state.map(item=>{
                if(item.id===acton.payload){
                    item.quantity++
                }
                return item;
            })
        },
    
        decrementQuantity:(state,action)=>{
            state=state.map(item=>{
                if (item.quantity!=1) {
                    if (item.id===action.payload) {
                        item.quantity--;
                    }
                }
                return item;
            })
        }
    
    
    }

})
export const {addToCart,deleteFormCart,incrementQuantity,decrementQuantity}=cartSlice.actions
export default cartSlice.reducer