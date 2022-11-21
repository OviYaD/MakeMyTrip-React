import { createSlice } from "@reduxjs/toolkit";

export const hotelDescSlice = createSlice({
    name:"hotelDesc",
    initialState:{},
    reducers:{
        setHotelDescInfo: (state,action) => { 
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

const {reducer,actions} = hotelDescSlice;
export const {setHotelDescInfo} = actions;
export default reducer;