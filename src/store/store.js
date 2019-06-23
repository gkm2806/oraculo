import RootReducer from "./ducks/rootReducer"
import "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import axios from 'axios';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk]
const store = createStore(RootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));

store.dispatch(async (dispatch) => {
  dispatch({ type: "aulas/FETCH_BEGIN" })
  await axios.get(`${process.env.REACT_APP_API_URL}/api/aulas/`)
    .then((response) => {
      dispatch({ type: "aulas/FETCH_SUCCESS", payload: response.data })
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "aulas/FETCH_FAILURE", payload: err })
    })
})

store.dispatch(async (dispatch) => {
  dispatch({ type: "profs/FETCH_BEGIN" })
  await axios.get(`${process.env.REACT_APP_API_URL}/api/professores/`)
    .then((response) => {
      dispatch({ type: "profs/FETCH_SUCCESS", payload: response.data })
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "profs/FETCH_FAILURE", payload: err })
    })
})

store.dispatch(async (dispatch) => {
  dispatch({ type: "salas/FETCH_BEGIN" })
  await axios.get(`${process.env.REACT_APP_API_URL}/api/LOCAIS/`)
    .then((response) => {
      dispatch({ type: "salas/FETCH_SUCCESS", payload: response.data })
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "salas/FETCH_FAILURE", payload: err })
    })
})

store.dispatch(async (dispatch) => {
  dispatch({ type: "turmas/FETCH_BEGIN" })
  await axios.get(`${process.env.REACT_APP_API_URL}/api/turmas/`)
    .then((response) => {
      dispatch({ type: "turmas/FETCH_SUCCESS", payload: response.data })
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "turmas/FETCH_FAILURE", payload: err })
    })   
})

store.dispatch(async (dispatch) => {
  dispatch({ type: "materias/FETCH_BEGIN" })
  await axios.get(`${process.env.REACT_APP_API_URL}/api/materias/`)
    .then((response) => {
      console.log(response.data)
      dispatch({ type: "materias/FETCH_SUCCESS", payload: response.data })
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: "materias/FETCH_FAILURE", payload: err })
    })   
})

store.dispatch((dispatch) => { dispatch({ type: "FETCH_ALL_END" }) })

export default store;