import React, {Component} from "react";
import {connect} from "react-redux";
import {
    AppReducer,
    getExpenseCategoriesWithData,
    getIncomeCategoriesWithData,
    getSelectedMonth
} from "../redux/reducers";
import {CategoryType, CategoryWithAmount} from "./model/Model";
import MonthDetailSection from "./MonthDetailSection";


const mapStateToProps = (state: AppReducer) => {
    return {
        selectedMonth: getSelectedMonth(state.app),
        expenseCategoriesWithData: getExpenseCategoriesWithData(state.app),
        incomeCategoriesWithData: getIncomeCategoriesWithData(state.app),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

interface ComponentStateProps {
    expenseCategoriesWithData: CategoryWithAmount[],
    incomeCategoriesWithData: CategoryWithAmount[],
}

interface ComponentDispatchProps {
}

interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
}

class MonthDetail extends Component<ComponentProps, ComponentState> {
    public static defaultProps = {
        expenseCategoriesWithData: [],
        incomeCategoriesWithData: [],
    };

    render() {
        return (
            <div className="month-detail-wrapper">
                <h4>Month Detail</h4>
                <MonthDetailSection categoriesWithData={this.props.expenseCategoriesWithData} type={CategoryType.EXPENSE} />
                <MonthDetailSection categoriesWithData={this.props.incomeCategoriesWithData} type={CategoryType.INCOME} />
            </div>
        )
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
    (mapStateToProps, mapDispatchToProps)(MonthDetail);