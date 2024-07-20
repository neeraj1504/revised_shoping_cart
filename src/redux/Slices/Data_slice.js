import { createSlice } from "@reduxjs/toolkit";

export const Data_slice = createSlice({
  name: "Data",
  initialState: [],
  reducers: {
    Add: (state, action) => {
      return action.payload; // Replacing the state with the new array from action.payload
    },
    GetNewItem: (state, action) => {
      console.log(action.payload);

      if (!action.payload.posts) {
        console.error("posts is undefined in action payload");
        return state; // Return the current state if posts is not defined
      }

      const filteredItems = action.payload.posts.filter((item) => {
        return (
          item.title.includes(action.payload.data) ||
          item.description.includes(action.payload.data) ||
          item.category.includes(action.payload.data) ||
          item.title === ''
        );
      });

      return filteredItems;
    }
  }
});

export const { Add, GetNewItem } = Data_slice.actions;
export default Data_slice.reducer;
