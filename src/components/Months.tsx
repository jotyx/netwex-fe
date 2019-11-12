import React, {Component} from "react";
import './Months.scss';
import {Item} from "./model/Model";
import {connect} from "react-redux";
import {AppState} from "../redux/reducers";
import * as actions from "../redux/actions";

const mapStateToProps = (state: AppState) => {
    return {
        selectedYear: state.selectedYear,
        selectedMonth: state.selectedMonth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectMonth: monthIndex => dispatch(actions.selectMonth(monthIndex)),
    }
};

interface ComponentStateProps {
    selectedYear: Number,
    selectedMonth: Number,
}

interface ComponentDispatchProps {
    selectMonth: (number) => void,
}


interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
    months: Item[],
}

const MONTHS: Item[] = [
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

class Months extends Component<ComponentProps, ComponentState> {
    public static defaultProps = {
        selectedYear: 2019,
        selectedMonth: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            months: MONTHS,
        }
    }

    handleMonthClicked = (value: string) => {
        this.props.selectMonth(value);
    };

    render() {
        return (
            <div className="months-wrapper">
                <h4>Months of {this.props.selectedYear}</h4>

                <ul className="list-group">
                    {this.state.months.map(month => (
                        <li key={month.value} className={"list-group-item " + (this.props.selectedMonth === month.value ? "selected" : null)}>
                            <div onClick={() => this.handleMonthClicked(month.value)}>{month.label}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(Months);