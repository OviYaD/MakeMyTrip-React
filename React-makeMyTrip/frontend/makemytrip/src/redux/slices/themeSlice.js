import {createSlice} from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name:"theme",
    initialState:false,
    reducers:{
        setTheme : (state,action) => {  
            return !state;
        }
    }
})

const { reducer ,actions } = themeSlice;
export const {setTheme} = actions;
export default reducer;