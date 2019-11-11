import * as c from './constants';

export const addItem = (payload) => {
    return { type:  c.ADD_ITEM, payload };
};