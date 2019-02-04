import { ADD_PAYMENT, DELETE_PAYMENT } from './actionTypes';

export const addPayment = (cardName, cardInfo) => {
    return {
        type: ADD_PAYMENT,
        cardName: cardName,
        cardInfo: cardInfo
    };
};

export const deletePayment = (key) => {
    return {
        type: DELETE_PAYMENT,
        itemKey: key
    };
};