import {CategoryType, CategoryWithAmount, MonthData, MONTHS} from "../../components/model/Model";
import {AppState} from "../reducers";

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

export const getSumOfExpenses = (state: AppState): number => {
    const filteredData = getSelectedMonth(state).data.map(categoryData =>
        (categoryData.type === CategoryType.EXPENSE) ? categoryData.amount : null);
    return filteredData.reduce((a, b) => a + b);
};

export const getSumOfIncomes = (state: AppState): number => {
    const filteredData = getSelectedMonth(state).data.map(categoryData =>
        (categoryData.type === CategoryType.INCOME) ? categoryData.amount : null);
    return filteredData.reduce((a, b) => a + b);
};