## Reference 
    https://www.valentinog.com/blog/react-redux-tutorial-beginners/
    
## What is state
    Every stateful React component carries its own state. In a React component the state holds up data.  
    State is immutable and cannot change in place.
    A stateful component in React is a component carrying its own local state

    The component might render such data to the user.

    And there’s setState() for updating the local state of a component.
```
    import React, { Component } from "react";
    class ExampleComponent extends Component {
        constructor() {
            super();
            this.state = {
                articles: [
                    { title: "React Redux Tutorial for Beginners", id: 1 },
                    { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
                ]
            };
        }
        render() {
            const { articles } = this.state;
            return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
        }
    }
```
    
## what problem does Redux solve?
    Redux helps giving each React component the exact piece of state it needs.
    Redux holds up the state within a single location out of React.

    - Keeping the state within a React component making the component bloated.
    - The frontend shouldn’t know about the business logic.
    - Multiple React components needs to access the same state but do not have any parent/child relationship, no need to pass down the state to multiple components with props
    - ! Redux is not useful for smaller apps. It really shines in bigger ones. 

## Redux principle
    - The state is immutable and cannot change in place.
    - Redux says the only way to change the state is by sending a signal to the store.This signal is an action. “Dispatching an action” is the process of sending out a signal.


##  Key concepts  
    - store: state of the whole application lives inside the store as a single, immutable object , to start playing with Redux we should create a store for wrapping up the state.

    - reducers: Reducers produce the state of the application. A reducer is just a Javascript function returns new state. A reducer takes two parameters: the current state and an action. Reducer must be pure. A pure function is one that returns the exact same output for the given input.
    ```
        const rootReducer = (state = initialState, action) => state;
    ```
     reducer will grow as your app will become bigger. You can split a big reducer into separate functions and combine them with combineReducers

    - actions: The only way to change the state is by sending a signal to the store.This signal is an action. "Dispatching an action" is the process of sending out a signal.
    Every action needs a type property for describing how the state should change.
    The type property is a string. The reducer will use that string to determine how to calculate the next state.
    ```
    {
        type: 'ADD_ARTICLE',
        payload: { name: 'React Redux Tutorial', id: 1 }
    }
    ```

    - action creators: It is a best pratice to wrap every action within a function. Such function is an action creator.
    ```
    export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
    ```

## How Redux works
    The Redux store exposes a simple API for managing the state. 
    The most important methods on store are:
    - getState() for accessing the current state of the application
    ```
        store.getState()
    ```
    - dispatch() for dispatching an action
    ```
        store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) )
    ```
    - subscribe() for listening on state changes. The subscribe method accepts a callback that will fire whenever an action is dispatched. 
    ```
        store.subscribe(() => console.log('Look ma, Redux!!'))
    ```
## Couple React and Redux together
    - mapStateToProps: connects a part of the Redux state to the props of a React component
    - mapDispatchToProps: connects Redux actions to React props. This way a connected React component will be able to dispatch actions.
    - Provider: Provider is an high order component coming from react-redux, wraps up your React application and makes it aware of the entire Redux’s store.


