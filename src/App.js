import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {   BrowserRouter as Router,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";

import Routes from "./routes";

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);

  useEffect(() => {
    if (message.message) {
      const timer = setTimeout(() => {
        dispatch(clearMessage());
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, dispatch]);


  return (
    <>
    
        <Router history={history}>
            <Routes />
        </Router>
    </>
  );
};

export default App;
