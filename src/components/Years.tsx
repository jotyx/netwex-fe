import React, {Component} from "react";
import {connect} from "react-redux";
import './Years.scss';
import {CombinedAppState} from "../redux/reducers";
import * as actions from "../redux/actions";
import history from "../history/history";
import {getAllAvailableYears} from "../redux/selectors/selectors";

const mapStateToProps = (state: CombinedAppState) => {
    return {
        selectedYear: state.app.selectedYear,
        allAvailableYears: getAllAvailableYears(state.app),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectYear: year => dispatch(actions.selectYear(year)),
        selectMonth: monthIndex => dispatch(actions.selectMonth(monthIndex)),
    }
};

interface ComponentStateProps {
    selectedYear: number,
    allAvailableYears: number[],
}

interface ComponentDispatchProps {
    selectYear: (year: number) => void,
    selectMonth: (monthIndex: number) => void,
}

interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
}

class Years extends Component<ComponentProps, ComponentState> {


    handleYearSelected = (year: number) => {
        this.props.selectYear(year);
        this.props.selectMonth(0);
        history.push("/year-detail");
    };

    render() {
        return (
            <div className="years-wrapper">
                <h4>Years With Records</h4>
                <div className="list-group">
                    {this.props.allAvailableYears.map(year => (
                        <div key={year}
                             className={"list-group-item list-group-item-action " + (this.props.selectedYear === year ? "active" : null)}
                            onClick={() => this.handleYearSelected(year)}>
                            {year}
                        </div>
                    ))}
                </div>

                <button type="button" className="btn btn-outline-info btn-sm">
                    Add a Year
                </button>
            </div>
        );
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(Years);