import * as c from '../actions/constants';
import {addCategory, initData, MonthData, YearData} from "../../components/model/Model";

export interface AppState {
    records: any[],

    data: YearData[],
    selectedMonthData: MonthData,
    selectedYear: number,
    selectedMonth: number,
}

const initialState: AppState = {
    records: [],

    data: [initData()],
    selectedMonthData: initData().data[0],
    selectedYear: 2019,
    selectedMonth: 0,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.ADD_CATEGORY: {
            return {
                ...state, data: addCategory(state.data, action.payload)
            };
        }
        case c.UPDATE_CATEGORY_AMOUNT: {
            return {
                ...state, selectedMonthData: {
                    data: state.selectedMonthData.data.map(categoryData => {
                        if (categoryData.label === action.payload.label) {
                            categoryData.amount = action.payload.amount;
                        }
                        return categoryData;
                    }), monthIndex: state.selectedMonthData.monthIndex
                }
            };
        }
        case c.SELECT_MONTH: {
            const filteredYearData = state.data.filter(yearData => yearData.yearNumber === state.selectedYear);
            const filteredMonthData = filteredYearData[0].data.filter(monthData => monthData.monthIndex === action.payload);

            return {
                ...state, selectedMonth: action.payload, selectedMonthData: filteredMonthData[0]
            };
        }
        case c.UPDATE_SELECTED_MONTH: {
            const filteredYearData = state.data.filter(yearData => yearData.yearNumber === state.selectedYear);
            const filteredMonthData = filteredYearData[0].data.filter(monthData => monthData.monthIndex === state.selectedMonth);

            return {
                ...state, selectedMonthData: filteredMonthData[0]
            };
        }
        default:
            return state;
    }
};

export default rootReducer;