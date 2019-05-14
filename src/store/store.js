import RootReducer from "./ducks/rootReducer"
import "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import "dotenv/config"
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
  

console.log(`env = ${JSON.stringify(process.env)}`)
console.log(`API_URL = ${process.env.API_URL}`)
console.log(`RAZZLE_API_URL = ${process.env.RAZZLE_API_URL}`)
console.log(`RAZZLE_RUNTIME_API_URL = ${process.env.RAZZLE_API_URL}`)
store.dispatch((dispatch)=>{
  dispatch({type: "FETCH_AULAS_BEGIN"})
  axios.get(`${'http://shaolinapi.ddns.net:443'}/api/aulas/`)
    .then((response) => {
      dispatch({type: "FETCH_AULAS_SUCCESS", payload: response.data})
    })
    .catch((err)=>{
      console.log(err)
      dispatch({type: "FETCH_AULAS_FAILURE", payload: err})
    })
})

store.dispatch((dispatch)=>{
  dispatch({type: "FETCH_PROFS_BEGIN"})
  axios.get(`${'http://shaolinapi.ddns.net:443'}/api/professores/`)
    .then((response) => {
      dispatch({type: "FETCH_PROFS_SUCCESS", payload: response.data})
    })
    .catch((err)=>{
      console.log(err)
      dispatch({type: "FETCH_PROFS_FAILURE", payload: err})
    })
})

store.dispatch((dispatch)=>{
  dispatch({type: "FETCH_LOCAIS_BEGIN"})
  axios.get(`${'http://shaolinapi.ddns.net:443'}/api/LOCAIS/`)
    .then((response) => {
      dispatch({type: "FETCH_LOCAIS_SUCCESS", payload: response.data})
    })
    .catch((err)=>{
      console.log(err)
      dispatch({type: "FETCH_LOCAIS_FAILURE", payload: err})
    })
})

store.dispatch((dispatch)=>{
  dispatch({type: "FETCH_TURMAS_BEGIN"})
  axios.get(`${'http://shaolinapi.ddns.net:443'}/api/turmas/`)
    .then((response) => {
      dispatch({type: "FETCH_TURMAS_SUCCESS", payload: response.data})
    })
    .catch((err)=>{
      console.log(err)
      dispatch({type: "FETCH_TURMAS_FAILURE", payload: err})
    })
})


store.dispatch((dispatch)=>{dispatch({type: "FETCH_ALL_END"})})


export default store;