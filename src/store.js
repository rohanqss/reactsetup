import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { save, load } from "redux-localstorage-simple";

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   load(),
//   // composeWithDevTools(applyMiddleware(...middleware, save()))
//   composeWithDevTools(applyMiddleware(thunk, save()))
// );


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
