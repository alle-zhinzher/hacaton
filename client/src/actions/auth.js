import axios from "axios";

import {
    REGISTER_SUCCESS,
    USER_LOADED,
    LOGIN_SUCCESS,
} from "./types";

const url = "http://localhost:5000/"

export const register = (username, email, password, firstName, lastName) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // Request Body
    console.log(username, email, password, firstName, lastName)
    const body = JSON.stringify({ username, email, password, firstName, lastName });
    axios
        .post(url + "api/user", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                    ...res.data,
                    'status': null,
                }
            });
        })
};


// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {

    axios
        .get(url + "api/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
};

// LOGIN USER
export const login = (email, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // Request Body
    const body = JSON.stringify({ email, password });
    console.log(email, password)
    axios
        .post(url + "api/auth/login", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    ...res.data,
                    'msg': {},
                    'status': null,
                }
            });
        })
};



// Setup config with token - helper function
export const tokenConfig = getState => {
    // Get token from state
    const token = getState().authReducer.token;
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token
        }
    };
    return config;
};