import axios from "axios";

import {
    REGISTER_SUCCESS,
} from "./types";


export const register = ({ username, password, email }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // Request Body
    const body = JSON.stringify({ username, email, password, firstName, lastName });

    axios
        .post("/api/auth/", body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: {
                    ...res.data,
                    'msg': {},
                    'status': null,
                }
            });
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL,
                payload: {
                    'errorMsg': err.response.data,
                    'errorStatus': err.response.status,
                }
            });
        });
};