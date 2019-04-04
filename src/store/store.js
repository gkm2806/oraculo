import RootReducer from "./ducks/rootReducer"
import "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import axios from 'axios';

/*const store = createStore(
    RootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(RootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
  ));

store.dispatch((dispatch)=>{
  dispatch({type: "FETCH_AULAS_BEGIN"})
  axios.get("http://localhost:4000/api/aulas")
    .then((response) => {
      dispatch({type: "FETCH_AULAS_SUCCESS", payload: response.data})
    })
    .catch((err)=>{
      console.log(err)
      dispatch({type: "FETCH_AULAS_FAILURE", payload: err})
    })
})

export default store;