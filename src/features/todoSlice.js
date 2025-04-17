// Redux configuration file where the state, action and reducers will be defined

const todoSlice = createSlice({
    name:'todos',
    initialState: {todos:[]},
    reducers: {
        // Now an objext instead of String
        addTodo: (state, action)=> {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(val=> val.id !== action.payload)
        }

    }
})
// Export the object / function
export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;