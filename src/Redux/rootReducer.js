import { combineReducers } from "redux";
import { operationsReducer } from "./todolist/reducer/operation";

export const rootReducer = combineReducers({
    operationsReducer
    // more reducers can be added here
})
