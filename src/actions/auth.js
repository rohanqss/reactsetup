import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  LOADING_TRUE,
  LOADING_FALSE,

} from "./types";

import axiosInstance from "../api/axiosInstance";

export const register =
  (username, email, password, firstName, lastName) => (dispatch) => {
     
          dispatch({
            type: REGISTER_SUCCESS,
            payload: { user: response },
          });

          dispatch({
            type: SET_MESSAGE,
            payload: response.message,
          });

          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: response },
          });
          // window.location.reload();
          return Promise.resolve();
        
  
  };

export const login = (loginId, password) => (dispatch) => {

    
      return Promise.reject();

};

export const logout = () => (dispatch) => {
 
  dispatch({
    type: LOGOUT,
  });
};



