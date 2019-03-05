import { createStore } from "redux"
import RootReducer from "./ducks/rootReducer"
import "redux-devtools-extension";

console.log(RootReducer)
const store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;