import * as c from './constants';

export const addCategory = (payload) => {
    return { type:  c.ADD_CATEGORY, payload };
};

export const updateCategoryAmount = (payload) => {
    return { type:  c.UPDATE_CATEGORY_AMOUNT, payload };
};

export const selectMonth = (payload) => {
    return { type:  c.SELECT_MONTH, payload };
};

export const updateSelectedMonth = () => {
    return { type:  c.UPDATE_SELECTED_MONTH };
};