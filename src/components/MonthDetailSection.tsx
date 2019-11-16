import React, { Component } from "react";
import { connect } from "react-redux";
import './MonthDetailSection.scss';
import {AppState} from "../redux/reducers";
import {CategoryType, CategoryWithAmount, NewCategory} from "./model/Model";
import * as actions from "../redux/actions";

const mapStateToProps = (state: AppState) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCategoryAmount: updatedCategory => dispatch(actions.updateCategoryAmount(updatedCategory)),
        addCategory: newCategory => dispatch(actions.addCategory(newCategory)),
    }
};

interface ComponentStateProps {
}

interface ComponentDispatchProps {
    updateCategoryAmount: (updatedCategory: CategoryWithAmount) => void,
    addCategory: (newCategory: NewCategory) => void,
}

interface ComponentOwnProps {
    categoriesWithData: CategoryWithAmount[],
    type: CategoryType,
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
    editRow: number,
    rowData: string,
    newCategoryName: string,
    newCategoryType: CategoryType,
}

class MonthDetailSection extends Component<ComponentProps, ComponentState> {
    static defaultProps = {
        categoriesWithData: [],
        type: CategoryType.EXPENSE,
    };

    private readonly editCategoryInput: React.RefObject<HTMLInputElement>;
    private readonly newCategoryInput: React.RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.state = {
            editRow: null,
            rowData: "",
            newCategoryName: "",
            newCategoryType: null,
        };

        this.editCategoryInput = React.createRef();
        this.newCategoryInput = React.createRef();
    }

    handleRowClicked = (index: number, amount: number) => {
        this.setState({editRow: index, rowData: amount.toString()});
        setTimeout(() => this.editCategoryInput.current.focus(), 50);
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>, categoryData: CategoryWithAmount) => {
        event.preventDefault();
        this.props.updateCategoryAmount(
            {label: categoryData.label, amount: Number(this.state.rowData)} as CategoryWithAmount);
        this.setState({editRow: null, rowData: ""});
    };

    handleAmountChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({rowData: event.currentTarget.value});
    };

    handleAddNewCategorySubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.addCategory({label: this.state.newCategoryName, type: this.state.newCategoryType} as NewCategory);
        this.setState({newCategoryName: "", newCategoryType: null});
    };

    handleNewCategoryChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({newCategoryName: event.currentTarget.value});
    };

    handleAddNewCategoryClicked = () => {
        this.setState({newCategoryName: "", newCategoryType: this.props.type});
        setTimeout(() => this.newCategoryInput.current.focus(), 50);
    };

    handleCategoryLabelClicked = () => {
      console.log("ano");
    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.categoriesWithData.map((categoryWithAmount, index) => (
                        <li key={index} className="list-group-item">
                            <div className={"section-label"}
                                 onClick={() => this.handleCategoryLabelClicked()}>
                                {categoryWithAmount.label}
                            </div>

                            <div className={"section-data"}>
                                {this.state.editRow === index ?
                                    <form onSubmit={(event) => this.handleSubmit(event, categoryWithAmount)}>
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control form-control-sm"
                                                value={this.state.rowData}
                                                placeholder="Enter Value"
                                                ref={this.editCategoryInput}
                                                onChange={this.handleAmountChange}/>
                                        </div>
                                    </form>
                                    : <div onClick={() => this.handleRowClicked(index, categoryWithAmount.amount)}>
                                        {categoryWithAmount.amount}
                                    </div>
                                }
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="add-new-category">
                    {this.state.newCategoryType ?
                        <form onSubmit={(event) => this.handleAddNewCategorySubmit(event)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.newCategoryName}
                                    placeholder="Enter New Category Name"
                                    ref={this.newCategoryInput}
                                    onChange={this.handleNewCategoryChange}/>
                            </div>
                        </form>
                        :
                        (this.props.type === CategoryType.EXPENSE ?
                            <button type="button" className="btn btn-danger btn-sm"
                                    onClick={() => this.handleAddNewCategoryClicked()}>Add Expense Category</button>
                            :
                            <button type="button" className="btn btn-success btn-sm"
                                    onClick={() => this.handleAddNewCategoryClicked()}>Add Income Category</button>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(MonthDetailSection);