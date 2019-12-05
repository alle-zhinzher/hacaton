import axios from "axios";

import {
    REGISTER_SUCCESS,
} from "./types";


export const register = ({ username, password, email, firstName, lastName }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // Request Body
    const body = JSON.stringify({ username, email, password, firstName, lastName });

    axios
        .post("api/user", body, config)
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