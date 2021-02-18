import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../action";


const production_url = `http://127.0.0.1:5000/register`;
const dev_url = `/register`;
const production_urlog = `http://127.0.0.1:5000/login`;
const dev_urlog = `/register`;


export const registerUser = (userData, history) => dispatch => {
  axios
    .post(production_url, userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const loginUser = (userData, history) => dispatch => {
  axios
    .post(production_urlog, userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push("/properties/sell")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//  Login 
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//  loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// LogOut
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};