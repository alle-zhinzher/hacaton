import {
    REGISTER_SUCCESS,
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
        default:
            return state;
    }
}
