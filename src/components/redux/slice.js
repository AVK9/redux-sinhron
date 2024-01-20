import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            state.todos = [...state.todos, payload]
        },
           delTodo: (state, { payload }) => {
            state.todos = state.todos.filter(todo => todo.id !== payload)
        },
    }

})
export const { addTodo, delTodo } = todosSlice.actions;
export default  todosSlice.reducer