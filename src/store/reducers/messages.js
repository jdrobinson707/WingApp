import { ADD_MESSAGE } from '../actions/actionTypes';

const initialState = {
    message: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                message: state.message.concat({
                    key: Math.random(),
                    info: action.messageContents
                })
            };
        default:
            return state;
    }
};

export default reducer;