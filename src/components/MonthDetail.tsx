import React, {Component} from "react";
import './MonthDetail.scss';
import {connect} from "react-redux";
import {AppState} from "../redux/reducers";
import {CategoryWithAmount, MonthData} from "./model/Model";
import * as actions from "../redux/actions/index"


const mapStateToProps = (state: AppState) => {
    return {
        categories: state.spendingCategories,
        selectedMonthData: state.selectedMonthData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCategoryAmount: updatedCategory => dispatch(actions.updateCategoryAmount(updatedCategory)),
    }
};


interface ComponentStateProps {
    categories: string[],
    selectedMonthData: MonthData,
}

interface ComponentDispatchProps {
    updateCategoryAmount: (updatedCategory: CategoryWithAmount) => void
}


interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
    editRow: number,
    rowData: string,
}

class MonthDetail extends Component<ComponentProps, ComponentState> {
    public static defaultProps = {
        categories: [],
        selectedMonthData: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            editRow: null,
            rowData: "",
        };
    }

    handleRowClicked = (index: number, amount: number) => {
        this.setState({editRow: index, rowData: amount.toString()});
        setTimeout(() => {document.getElementById("amount" + index).focus()}, 50)
    };

    handleAmountChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({rowData: event.currentTarget.value});
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>, categoryData: CategoryWithAmount) => {
        event.preventDefault();
        this.props.updateCategoryAmount(
            {label: categoryData.label, amount: Number(this.state.rowData)} as CategoryWithAmount);
        this.setState({editRow: null, rowData: ""});
    };

    render() {
        return (
            <div className="month-detail-wrapper">
                <h4>Month Detail</h4>
                <ul className="list-group">
                    {this.props.selectedMonthData.data.map((categoryData, index) => (
                        <li key={index} className="list-group-item"
                            onClick={() => this.handleRowClicked(index, categoryData.amount)}>
                            <div>{categoryData.label}</div>

                            {this.state.editRow === index ?
                                <form onSubmit={(event) => this.handleSubmit(event, categoryData)}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={"amount" + index}
                                            value={this.state.rowData}
                                            placeholder="Enter Value"
                                            onChange={this.handleAmountChange}/>
                                    </div>
                                </form>
                                    : <div>{categoryData.amount}</div>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
    (mapStateToProps, mapDispatchToProps)(MonthDetail);