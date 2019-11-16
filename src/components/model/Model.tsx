export interface Item {
    label: string,
    value: any,
}

export enum CategoryType {
    EXPENSE = "EXPENSE",
    INCOME = "INCOME",
}

export enum ScreenType {
    YEARS = "YEARS",
    MONTHS = "MONTHS",
}

export interface RenamedCategory {
    oldLabel: string,
    newLabel: string,
}

export interface NewCategory {
    label: string,
    type: CategoryType,
}

export interface CategoryWithAmount {
    label: string,
    amount: number,
    type: CategoryType,
}

export interface MonthData {
    monthIndex: number,
    data: CategoryWithAmount[],
}

export interface YearData {
    yearNumber: number,
    data: MonthData[],
}

export const MONTHS: Item[] = [
    {label: "January", value: 0},
    {label: "February", value: 1},
    {label: "March", value: 2},
    {label: "April", value: 3},
    {label: "May", value: 4},
    {label: "June", value: 5},
    {label: "July", value: 6},
    {label: "August", value: 7},
    {label: "September", value: 8},
    {label: "October", value: 9},
    {label: "November", value: 10},
    {label: "December", value: 11},
];

export const initData = (year?: number): YearData => {
    const setupYear = year? year : new Date().getFullYear();
    const yearData: YearData = {yearNumber: setupYear, data: []};

    let index = 0;
    while (index < 12) {
        yearData.data.push({
            monthIndex: index,
            data: [
                {
                    label: "Example Category",
                    amount: 1000 + index * 10,
                    type: CategoryType.EXPENSE,
                },
            ]
        });
        index++;
    }
    return yearData;
};

export const addCategory = (data: YearData[], categoryName: string, type: CategoryType): YearData[] => {
    return data.map(yearData => {
        const modifiedYearData = yearData.data.map(monthData => {
            return {
                ...monthData, data: monthData.data.concat({
                    label: categoryName,
                    amount: 0,
                    type: type,
                })
            }
        });
        return {
            ...yearData, data: modifiedYearData
        };
    });
};

export const updateCategory = (data: YearData[], oldLabel: string, newLabel: string): YearData[] => {
    return data.map(yearData => {
        const modifiedYearData = yearData.data.map(monthData => {
            const modifiedMonthData = monthData.data.map(categoryData => {
                if (categoryData.label === oldLabel) {
                    return {
                        ...categoryData, label: newLabel
                    }
                } else {
                    return {
                        ...categoryData
                    }
                }
            });
            return {
                ...monthData, data: modifiedMonthData
            }
        });
        return {
            ...yearData, data: modifiedYearData
        };
    });
};