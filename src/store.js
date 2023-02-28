// import { applyMiddleware, compose,createStore } from "redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// const initialState ={}
// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware)
//     )

// )
// export default store