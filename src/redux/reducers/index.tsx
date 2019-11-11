import * as c from '../actions/constants';

export interface AppState {
    records: any[],
    spendingCategories: string[],
}

const initialState: AppState = {
    records: [],
    spendingCategories: ["Doprava", "Nájom"],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.ADD_ITEM:
            return {
                ...state, items: state.records.concat(action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;