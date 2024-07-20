import { createSlice } from "@reduxjs/toolkit";

export const Cartslices = createSlice({
    name: "cart",
    initialState: [], // Assume this will be populated with items
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        
        
    }
});

export const { add, remove, display_item_by_choice} = Cartslices.actions;
export default Cartslices.reducer;
