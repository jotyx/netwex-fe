import React, {Component} from "react";
import './MonthDetail.scss';
import {connect} from "react-redux";
import {AppState} from "../redux/reducers";
import {CategoryType, CategoryWithAmount, MonthData, NewCategory} from "./model/Model";
import * as actions from "../redux/actions/index"


const mapStateToProps = (state: AppState) => {
    return {
        selectedMonthData: state.selectedMonthData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCategoryAmount: updatedCategory => dispatch(actions.updateCategoryAmount(updatedCategory)),
        addCategory: newCategory => dispatch(actions.addCategory(newCategory)),
        updateSelectedMonth: () => dispatch(actions.updateSelectedMonth()),
    }
};

interface ComponentStateProps {
    selectedMonthData: MonthData,
}

interface ComponentDispatchProps {
    updateCategoryAmount: (updatedCategory: CategoryWithAmount) => void,
    addCategory: (newCategory: NewCategory) => void,
    updateSelectedMonth: () => void,
}

interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
    editRow: number,
    rowData: string,
    newCategoryName: string,
    newCategoryType: CategoryType,
}

class MonthDetail extends Component<ComponentProps, ComponentState> {
    public static defaultProps = {
        selectedMonthData: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            editRow: null,
            rowData: "",
            newCategoryName: "",
            newCategoryType: null,
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

    handleAddNewExpenseCategoryClicked = (type: CategoryType) => {
        this.setState({newCategoryName: " ", newCategoryType: type});
        setTimeout(() => {document.getElementById("new-category").focus()}, 50)
    };

    handleNewCategoryChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({newCategoryName: event.currentTarget.value});
    };

    handleAddNewExpenseCategorySubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.addCategory({label: this.state.newCategoryName, type: this.state.newCategoryType} as NewCategory);
        this.props.updateSelectedMonth();
        this.setState({newCategoryName: "", newCategoryType: null});
    };

    render() {
        const expenseCategories = this.props.selectedMonthData.data.filter(categoryData => categoryData.type === CategoryType.EXPENSE);
        const incomeCategories = this.props.selectedMonthData.data.filter(categoryData => categoryData.type === CategoryType.INCOME);

        return (
            <div className="month-detail-wrapper">
                <h4>Month Detail</h4>
                <ul className="list-group">
                    {expenseCategories.map((categoryWithAmount, index) => (
                        <li key={index} className="list-group-item"
                            onClick={() => this.handleRowClicked(index, categoryWithAmount.amount)}>
                            <div>{categoryWithAmount.label}</div>

                            {this.state.editRow === index ?
                                <form onSubmit={(event) => this.handleSubmit(event, categoryWithAmount)}>
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
                                    : <div>{categoryWithAmount.amount}</div>
                            }
                        </li>
                    ))}
                </ul>

                <div className="add-new-category">
                    {this.state.newCategoryName && this.state.newCategoryType === CategoryType.EXPENSE ?
                        <form onSubmit={(event) => this.handleAddNewExpenseCategorySubmit(event)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id={"new-category"}
                                    value={this.state.newCategoryName}
                                    placeholder="Enter Value"
                                    onChange={this.handleNewCategoryChange}/>
                            </div>
                        </form>
                        :
                        <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleAddNewExpenseCategoryClicked(CategoryType.EXPENSE)}>Add Expense Category</button>
                    }
                </div>



                <ul className="list-group">
                    {incomeCategories.map((categoryWithAmount, index) => (
                        <li key={index} className="list-group-item"
                            onClick={() => this.handleRowClicked(index, categoryWithAmount.amount)}>
                            <div>{categoryWithAmount.label}</div>

                            {this.state.editRow === index ?
                                <form onSubmit={(event) => this.handleSubmit(event, categoryWithAmount)}>
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
                                : <div>{categoryWithAmount.amount}</div>
                            }
                        </li>
                    ))}
                </ul>

                <div className="add-new-category">
                    {this.state.newCategoryName && this.state.newCategoryType === CategoryType.INCOME ?
                        <form onSubmit={(event) => this.handleAddNewExpenseCategorySubmit(event)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id={"new-category"}
                                    value={this.state.newCategoryName}
                                    placeholder="Enter Value"
                                    onChange={this.handleNewCategoryChange}/>
                            </div>
                        </form>
                        :
                        <button type="button" className="btn btn-success btn-sm" onClick={() => this.handleAddNewExpenseCategoryClicked(CategoryType.INCOME)}>Add Income Category</button>
                    }
                </div>
            </div>
        )
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
    (mapStateToProps, mapDispatchToProps)(MonthDetail);