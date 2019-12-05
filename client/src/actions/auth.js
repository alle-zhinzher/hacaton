import axios from "axios";

import {
    REGISTER_SUCCESS,
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