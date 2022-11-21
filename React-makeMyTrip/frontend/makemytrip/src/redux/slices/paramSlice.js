import {createSlice} from "@reduxjs/toolkit";

export const paramSlice =createSlice({
    name:"param",
    initialState:{city:"Ooty",checkIn:"11-15-2022",checkOut:"11-16-2022",adultCount:"1",childCount:"0"},
    reducers:{
        setParam:(state,action) => {
            // console.log("params...",action.payload)
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

const { reducer,actions } = paramSlice;
export const {setParam} = actions;
export default reducer;