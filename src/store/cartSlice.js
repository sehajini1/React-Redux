import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload)
        }
    }
});
//return two things
export const {add,remove} = cartSlice.actions;//functions
export default cartSlice.reducer;//reducer - give the state