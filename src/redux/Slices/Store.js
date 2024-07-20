import { configureStore } from "@reduxjs/toolkit";
import Cartslices from "./Cartslices";
import DataReducer from './Data_slice'

export const store=configureStore({
    reducer:{
        cart:Cartslices,
        Data:DataReducer

    }
});