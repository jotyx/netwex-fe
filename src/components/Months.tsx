import React, {Component} from "react";
import './Months.scss';

interface MonthsState {
    months: string[],
    selectedYear: number,
}

export class Months extends Component<{}, MonthsState> {
    constructor(props) {
        super(props);
        this.state = {
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"],
            selectedYear: 2019,
        }
    }

    componentDidMount(): void {}


    render() {
        return (
            <div className="months-wrapper">
                <h4>Months of {this.state.selectedYear}</h4>

                <ul className="list-group">
                    {this.state.months.map((month, index) => (
                        <li key={index} className="list-group-item">
                            <div>{month}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}