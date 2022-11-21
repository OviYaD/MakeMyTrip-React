import {createSlice} from "@reduxjs/toolkit";

export const selectedItemSlice =createSlice({
    name:"selectedItems",
    initialState:[],
    reducers:{
        setSelectedItems:(state,action) => {
            console.log("selected items..",action.payload)
            return [
                ...action.payload
            ]
        }
    }
})

const { reducer,actions } = selectedItemSlice;
export const {setSelectedItems} = actions;
export default reducer;