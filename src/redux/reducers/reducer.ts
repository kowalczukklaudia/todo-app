import { combineReducers } from "redux";
import { todoSlice } from "../slices/todoSlice";

export const todoReducer = combineReducers({
    todos: todoSlice.reducer,
})