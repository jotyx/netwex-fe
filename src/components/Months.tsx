import React, {Component} from "react";
import './Months.scss';
import {Item, MONTHS, ScreenType} from "./model/Model";
import {connect} from "react-redux";
import {CombinedAppState} from "../redux/reducers";
import * as actions from "../redux/actions";

const mapStateToProps = (state: CombinedAppState) => {
    return {
        selectedYear: state.app.selectedYear,
        selectedMonth: state.app.selectedMonth,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectMonth: monthIndex => dispatch(actions.selectMonth(monthIndex)),
        selectScreen: screen => dispatch(actions.selectScreen(screen)),
    }
};

interface ComponentStateProps {
    selectedYear: number,
    selectedMonth: number,
}

interface ComponentDispatchProps {
    selectMonth: (monthIndex: number) => void,
    selectScreen: (screen: ScreenType) => void,
}


interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
    months: Item[],
}

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

    handleMonthClicked = (value: number) => {
        this.props.selectMonth(value);
    };

    handleSelectYearsScreenClicked = () => {
        this.props.selectScreen(ScreenType.YEARS);
    };

    render() {
        return (
            <div className="months-wrapper">
                <h4>Months of {this.props.selectedYear}</h4>
                <button type="button" className="btn btn-outline-info btn-sm back-to-years"
                    onClick={() => this.handleSelectYearsScreenClicked()}>
                    Back to Years
                </button>
                <div className="list-group">
                    {this.state.months.map(month => (
                        <div key={month.value}
                             className={"list-group-item list-group-item-action " + (this.props.selectedMonth === month.value ? "active" : null)}
                             onClick={() => this.handleMonthClicked(month.value)}>
                            {month.label}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(Months);