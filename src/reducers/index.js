/*
A reducer takes two parameters: the current state and an action
Reducer must be pure. A pure function is one that returns the exact same output for the given input.
*/

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            // Wrong!
            // state.articles.push(action.payload);
            // keep the initial state immutable:
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;