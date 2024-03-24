import { configureStore } from "@reduxjs/toolkit";
import todoDataSliceActionsReducer from "./todoRedux";

const store = configureStore({
  reducer: todoDataSliceActionsReducer
});

export default store;

//all lines will be same line no: 5 only change with the reducer function name
// in redux