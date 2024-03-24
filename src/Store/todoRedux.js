import { createSlice } from "@reduxjs/toolkit";
const todoDataSlice = createSlice({
  name: "todoStateHandler",
  initialState: [], //todoDataSliceActionsReducer
  reducers: {
    addTodo(state, action) {
      // console.log(state)
      console.log(action.payload)
      return state =[...state, action.payload]
    },
    deleteTodo(state, action) {
      console.log(action.payload);
    },
    
  },
});

export const todoDataSliceActions = todoDataSlice.actions;
const todoDataSliceActionsReducer = todoDataSlice.reducer;

export default todoDataSliceActionsReducer;

// All lines will be same in redux only in reducers function the function can be changed as per need
