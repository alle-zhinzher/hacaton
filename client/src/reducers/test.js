import {
    TEST_REDUX,
} from '../actions/types.js';

const initialState = {
    test: "",
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TEST_REDUX:
            return {
                ...state,
                test: action.payload
            }
        default:
            return state;
    }
}