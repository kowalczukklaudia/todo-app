import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../utils/Todo";

interface RemoveTodoAction {
    id: string;
}

interface CompleteTodoAction extends RemoveTodoAction {
    isCompleted: boolean;
}

interface AddTodoAction extends CompleteTodoAction {
    title: string;
}

const initialState: Todo[] = [];

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodoAction>) => {
            state.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<RemoveTodoAction>) => {
            return state.filter((todo: Todo) => todo.id !== action.payload.id);
        },
        completeTodo: (state, action: PayloadAction<CompleteTodoAction>) => {
            return state.map((todo: Todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        isCompleted: action.payload.isCompleted,
                    };
                }
                return todo;
            });
        }
    },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
