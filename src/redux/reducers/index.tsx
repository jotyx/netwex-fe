import {
    addCategory,
    CategoryType,
    CategoryWithAmount,
    initData,
    MonthData,
    MONTHS,
    updateCategory,
    YearData
} from "../../components/model/Model";
import {combineReducers} from 'redux'
import * as c from "../actions/constants";

export interface AppState {
    data: YearData[],
    selectedYear: number,
    selectedMonth: number,
}

export const appInitialState: AppState = {
    selectedYear: 2019,
    selectedMonth: 0,
    data: [initData(), initData(2018), initData(2017)],
};

export interface CombinedAppState {
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
            return {
                ...state, selectedMonth: action.payload
            };
        }
        case c.ADD_CATEGORY: {
            return {
                ...state, data: addCategory(state.data, action.payload.label, action.payload.type)
            };
        }
        case c.UPDATE_CATEGORY: {
            return {
                ...state, data: updateCategory(state.data, action.payload.oldLabel, action.payload.newLabel)
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
        case c.SELECT_YEAR: {
            return {
                ...state, selectedYear: action.payload
            }
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

export const getExpenseCategoriesWithData = (state: AppState): CategoryWithAmount[] => {
    return getSelectedMonth(state).data.filter(categoryData => categoryData.type === CategoryType.EXPENSE)
};

export const getIncomeCategoriesWithData = (state: AppState): CategoryWithAmount[] => {
    return getSelectedMonth(state).data.filter(categoryData => categoryData.type === CategoryType.INCOME)
};

export const getAllCategoryLabels = (state: AppState): string[] => {
    return state.data[0].data[0].data.map(categoryData => categoryData.label);
};

export const getSelectedPeriod = (state: AppState): string => {
    let currentMonth = "";
        MONTHS.forEach(month => {
            if (month.value === state.selectedMonth) {
                currentMonth = month.label;
            }
        });
    return "Year " + state.selectedYear + ", Month " + currentMonth;
};

export const getAllAvailableYears = (state: AppState): number[] => {
    return state.data.map(yearData => yearData.yearNumber);
};

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;