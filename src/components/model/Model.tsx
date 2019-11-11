export interface Item {
    label: string,
    value: string,
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



export const testData: YearData[] = [
    {
        yearNumber: 2018,
        data: [
            {
                monthIndex: 1,
                data: [
                    {
                        label: "Rent",
                        amount: 5000,
                    },
                    {
                        label: "Phone",
                        amount: 200,
                    }
                ]

            },
            {
                monthIndex: 2,
                data: [
                    {
                        label: "Rent",
                        amount: 5000,
                    },
                    {
                        label: "Phone",
                        amount: 150,
                    }
                ]

            }
        ]
    }
];