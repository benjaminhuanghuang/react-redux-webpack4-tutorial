import { createStore } from "redux";
import rootReducer from "../reducers/index";

/*
You may also pass an initial state to createStore. But most of the times you don’t have to. 
Passing an initial state is useful for server side rendering. 
*/
const store = createStore(rootReducer);

export default store;