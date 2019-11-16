import React, {Component} from "react";
import {connect} from "react-redux";
import './MainPage.scss';
import MonthDetail from "./MonthDetail";
import Months from "./Months";
import {CombinedAppState} from "../redux/reducers";
import Years from "./Years";
import {ScreenType} from "./model/Model";

const mapStateToProps = (state: CombinedAppState) => {
    return {
        currentView: state.app.currentView,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

interface ComponentStateProps {
    currentView: ScreenType,
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
                {this.props.currentView === ScreenType.YEARS ?
                    <Years />
                    :
                    <>
                        <Months/>
                        < MonthDetail />
                    </>
                }
            </div>
        );
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(MainPage);