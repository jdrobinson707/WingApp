import { ADD_MESSAGE } from './actionTypes';

export const addMessage = messageContents => {
    return {
        type: ADD_MESSAGE,
        messageContents: messageContents
    };
};
