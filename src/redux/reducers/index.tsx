import {
    addCategory,
    CategoryType,
    CategoryWithAmount,
    initData,
    MonthData,
    YearData
} from "../../components/model/Model";
import { combineReducers } from 'redux'
import * as c from "../actions/constants";

export interface AppState {
    data: YearData[],
    selectedYear: number,
    selectedMonth: number,
}

export const appInitialState: AppState = {
    selectedYear: 2019,
    selectedMonth: 0,
    data: [initData()],
};

export interface AppReducer {
    app: AppState,
}

const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case c.UPDATE_DATA: {
            return {
                ...state, data: action.payload
            };
        }
        case c.SELECT_MONTH: {
            const filteredYearData = state.data.filter(yearData => yearData.yearNumber === state.selectedYear);
            const filteredMonthData = filteredYearData[0].data.filter(monthData => monthData.monthIndex === action.payload);

            return {
                ...state, selectedMonth: action.payload, selectedMonthData: filteredMonthData[0]
            };
        }
        case c.ADD_CATEGORY: {
            return {
                ...state, data: addCategory(state.data, action.payload.label, action.payload.type)
            };
        }
        case c.UPDATE_CATEGORY_AMOUNT: {
            return {
                ...state, selectedMonthData: {
                    data: getSelectedMonth(state).data.map(categoryData => {
                        if (categoryData.label === action.payload.label) {
                            categoryData.amount = action.payload.amount;
                        }
                        return categoryData;
                    }), monthIndex: getSelectedMonth(state).monthIndex
                }
            };
        }
        default:
            return state;
    }
};

export const getSelectedMonth = (state): MonthData => {
    const filteredYearData = state.data.filter(yearData => yearData.yearNumber === state.selectedYear);
    const filteredMonthData = filteredYearData[0].data.filter(monthData => monthData.monthIndex === state.selectedMonth);
    return filteredMonthData[0];
};

export const getExpenseCategoriesWithData = (state): CategoryWithAmount[] => {
    return getSelectedMonth(state).data.filter(categoryData => categoryData.type === CategoryType.EXPENSE)
};

export const getIncomeCategoriesWithData = (state): CategoryWithAmount[] => {
    return getSelectedMonth(state).data.filter(categoryData => categoryData.type === CategoryType.INCOME)
};

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;