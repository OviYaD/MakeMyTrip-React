import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        setUser : (state,action) => {   
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

const { reducer ,actions } = userSlice;
export const {setUser} = actions;
export default reducer;