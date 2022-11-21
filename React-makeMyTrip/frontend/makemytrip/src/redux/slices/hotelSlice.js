import { createSlice } from "@reduxjs/toolkit";

export const hotelSlice = createSlice({
    name:"hotels",
    initialState:[],
    reducers:{
        setHotelInfo: (state,action) => { 
            // console.log("hotel.....",action.payload)
            return [
                ...action.payload
            ]
        }
    }
})

const {reducer,actions} = hotelSlice;
export const {setHotelInfo} = actions;
export default reducer;