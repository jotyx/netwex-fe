import * as c from './constants';

export const addItem = (payload) => {
    return { type:  c.ADD_ITEM, payload };
};

export const updateCategoryAmount = (payload) => {
    return { type:  c.UPDATE_CATEGORY_AMOUNT, payload };
};