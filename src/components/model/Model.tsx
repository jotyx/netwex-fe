export interface Item {
    label: string,
    value: any,
}

export interface CategoryWithAmount {
    label: string,
    amount: number,
}

export interface MonthData {
    monthIndex: number,
    data: CategoryWithAmount[],
}

export interface YearData {
    yearNumber: number,
    data: MonthData[],
}

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
                },
            ]
        });
        index++;
    }
    return yearData;
};

export const addCategory = (data: YearData[], categoryName: string): YearData[] => {
    return data.map(yearData => {
        const modifiedYearData = yearData.data.map(monthData => {
            return {
                ...monthData, data: monthData.data.concat({
                    label: categoryName,
                    amount: 0,
                })
            }
        });
        return {
            ...yearData, data: modifiedYearData
        };
    });
};