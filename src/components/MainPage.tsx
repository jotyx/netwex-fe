import React, { Component } from "react";
import { connect } from "react-redux";
import {Months} from "./Months";
import './MainPage.scss';
import MonthDetail from "./MonthDetail";


const mapStateToProps = (state) => {
    return {
        records: state.records,
    }
};

class MainPage extends Component {

    render() {
        return (
            <div className="main-page-wrapper">
                <Months />
                <MonthDetail />
            </div>
        );
    }
}

export default connect (mapStateToProps)(MainPage);