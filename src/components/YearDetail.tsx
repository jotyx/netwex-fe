import React, {Component} from "react";
import {connect} from "react-redux";
import './YearDetail.scss';
import MonthDetail from "./MonthDetail";
import Months from "./Months";
import {CombinedAppState} from "../redux/reducers";

const mapStateToProps = (state: CombinedAppState) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

interface ComponentStateProps {
}

interface ComponentDispatchProps {
}

interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
}

class YearDetail extends Component<ComponentProps, ComponentState> {
    render() {
        return (
            <div className="year-detail-wrapper">
                <Months/>
                < MonthDetail />
            </div>
        );
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(YearDetail);