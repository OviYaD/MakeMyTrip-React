import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import filterReducer from "./slices/filterSlice"
import hotelReducer from "./slices/hotelSlice"
import paramReducer from "./slices/paramSlice"
import selectedItemReducer from "./slices/selectedItemSlice";
import hotelDescReducer from "./slices/hotelDescSlice";
import themeReducer from "./slices/themeSlice";


export const store = configureStore({
  reducer: {
    user:userReducer,
    filters:filterReducer,
    hotels:hotelReducer,
    param:paramReducer,
    selectedItem:selectedItemReducer,
    hotelDesc:hotelDescReducer,
    theme:themeReducer,
  },
});