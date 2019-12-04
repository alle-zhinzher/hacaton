import {
    TEST_REDUX,
} from './types';

export const testRedux = () => dispatch => {
    dispatch({
        type: TEST_REDUX,
        payload: "REDUX_WORKS"
    });
};