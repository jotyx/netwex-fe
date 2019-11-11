import React, {Component} from "react";
import './Months.scss';
import {Item} from "./model/Model";

interface MonthsState {
    months: Item[],
    selectedYear: number,
}

const MONTHS: Item[] = [
    {label: "January", value: "1"},
    {label: "February", value: "2"},
    {label: "March", value: "3"},
    {label: "April", value: "4"},
    {label: "May", value: "5"},
    {label: "June", value: "6"},
    {label: "July", value: "7"},
    {label: "August", value: "8"},
    {label: "September", value: "9"},
    {label: "October", value: "10"},
    {label: "November", value: "11"},
    {label: "December", value: "12"},
];

export class Months extends Component<{}, MonthsState> {
    constructor(props) {
        super(props);
        this.state = {
            months: MONTHS,
            selectedYear: 2019,
        }
    }

    handleMonthClicked = (value: string) => {
        console.log(value);
    };

    render() {
        return (
            <div className="months-wrapper">
                <h4>Months of {this.state.selectedYear}</h4>

                <ul className="list-group">
                    {this.state.months.map((month, index) => (
                        <li key={index} className="list-group-item">
                            <div onClick={() => this.handleMonthClicked(month.value)}>{month.label}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}