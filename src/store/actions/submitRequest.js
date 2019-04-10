import { SUBMIT_REQUEST } from '../actions/actionTypes';

export const submitRequest = (request) => {
    return {
        type: SUBMIT_REQUEST,
        request: request
    };
};