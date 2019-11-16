import React, { Component } from "react";
import { connect } from "react-redux";
import './MainPage.scss';
import MonthDetail from "./MonthDetail";
import Months from "./Months";
import {AppState} from "../redux/reducers";

const mapStateToProps = (state: AppState) => {
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

class MainPage extends Component<ComponentProps, ComponentState> {
    render() {
        return (
            <div className="main-page-wrapper">
                <Months />
                <MonthDetail />
            </div>
        );
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(MainPage);