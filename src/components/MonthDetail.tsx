import React, {Component} from "react";
import {connect} from "react-redux";
import {
    CombinedAppState,
    getExpenseCategoriesWithData,
    getIncomeCategoriesWithData, getSelectedPeriod,
} from "../redux/reducers";
import {CategoryType, CategoryWithAmount} from "./model/Model";
import MonthDetailSection from "./MonthDetailSection";


const mapStateToProps = (state: CombinedAppState) => {
    return {
        expenseCategoriesWithData: getExpenseCategoriesWithData(state.app),
        incomeCategoriesWithData: getIncomeCategoriesWithData(state.app),
        selectedPeriod: getSelectedPeriod(state.app),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

interface ComponentStateProps {
    expenseCategoriesWithData: CategoryWithAmount[],
    incomeCategoriesWithData: CategoryWithAmount[],
    selectedPeriod: string,
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
                <h4>Month Detail</h4><h6>{this.props.selectedPeriod}</h6>
                <MonthDetailSection categoriesWithData={this.props.expenseCategoriesWithData} type={CategoryType.EXPENSE} />
                <MonthDetailSection categoriesWithData={this.props.incomeCategoriesWithData} type={CategoryType.INCOME} />
            </div>
        )
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
    (mapStateToProps, mapDispatchToProps)(MonthDetail);