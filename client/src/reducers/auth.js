import {
    REGISTER_SUCCESS,
    USER_LOADED,
    LOGIN_SUCCESS,

} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };
        case LOGIN_SUCCESS:
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        default:
            return state;
    }
}
