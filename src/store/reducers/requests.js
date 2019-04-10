import { SUBMIT_REQUEST } from '../actions/actionTypes';

const initialState = {
    request: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_REQUEST:
            return {
                ...state,
                request: action.request
            };
        default:
            return state;
    }
};

export default reducer;