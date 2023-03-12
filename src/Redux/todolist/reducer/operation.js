import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO, UPDATE_CHECKBOX } from "../action";
const initialState = [
    // { id: 1, todo: 'Buy Laptop', completed: false },
    // { id: 2, todo: 'Master Redux', completed: false },
    // { id: 3, todo: 'Watering Plants', completed: true },
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: return [...state, action.payload]
        case DELETE_ALL: return []
        case REMOVE_TODO:
            const removeTodos = state.filter((todo) => todo.id !== action.payload)
            return removeTodos
        case UPDATE_TODO:
            let data = action.payload;
            const updateArray = []
            state.map((item) => {
                if (item.id === data.id) {
                    item.todo = data.todo;
                    item.isCompleted = data.isCompleted;
                }
                updateArray.push(item)
            })
            return updateArray

        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item) => {
                if (item.id === action.payload) {
                    item.isCompleted = !item.isCompleted;
                }
                todoArray.push(item)
            })
            return todoArray;
        default: return state
    }
}