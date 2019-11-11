import * as c from '../actions/constants';
import {MonthData, testData, YearData} from "../../components/model/Model";

export interface AppState {
    records: any[],
    spendingCategories: string[],

    data: YearData[],
    selectedMonthData: MonthData,
}

const initialState: AppState = {
    records: [],
    spendingCategories: ["Rent", "Food", "Activities", "Shopping"],

    data: testData,
    selectedMonthData: testData[0].data[0],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.ADD_ITEM:
            return {
                ...state, items: state.records.concat(action.payload)
            };
        case c.UPDATE_CATEGORY_AMOUNT:
            return {
                ...state, selectedMonthData: {data: state.selectedMonthData.data.map(categoryData => {
                    if (categoryData.label === action.payload.label) {
                        categoryData.amount = action.payload.amount;
                    }
                    return categoryData;
                }), monthIndex: state.selectedMonthData.monthIndex}
            };
        default:
            return state;
    }
};

export default rootReducer;