import {createSlice} from "@reduxjs/toolkit"

export const filterSlice = createSlice({
    name:"filter",
    initialState:{},
    reducers:{
        setFilters : (state,action) => {  
           

            return {
                ...state,
                ...action.payload
            };
        }
    }
})

const { reducer ,actions } = filterSlice;
export const {setFilters} = actions;
export default reducer;