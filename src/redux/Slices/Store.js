import { configureStore } from "@reduxjs/toolkit";
import Cartslices from "./Cartslices";


export const store=configureStore({
    reducer:{
        cart:Cartslices
    }
});