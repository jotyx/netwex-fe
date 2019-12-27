import React, { Component } from "react";
import { connect } from "react-redux";
import './MonthDetailSection.scss';
import {CombinedAppState} from "../redux/reducers";
import {CategoryType, CategoryWithAmount, NewCategory, RenamedCategory} from "./model/Model";
import * as actions from "../redux/actions";
import {getAllCategoryLabels, getSumOfExpenses, getSumOfIncomes} from "../redux/selectors/selectors";

const mapStateToProps = (state: CombinedAppState) => {
    return {
        allCategoryLabels: getAllCategoryLabels(state.app),
        sumOfExpenses: getSumOfExpenses(state.app),
        sumOfIncomes: getSumOfIncomes(state.app),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCategoryAmount: updatedCategory => dispatch(actions.updateCategoryAmount(updatedCategory)),
        addCategory: newCategory => dispatch(actions.addCategory(newCategory)),
        updateCategory: renamedCategory => dispatch(actions.updateCategory(renamedCategory)),
    }
};

interface ComponentStateProps {
    allCategoryLabels: string[],
    sumOfExpenses: number,
    sumOfIncomes: number,
}

interface ComponentDispatchProps {
    updateCategoryAmount: (updatedCategory: CategoryWithAmount) => void,
    addCategory: (newCategory: NewCategory) => void,
    updateCategory: (updateCategoryLabel: RenamedCategory) => void,
}

interface ComponentOwnProps {
    categoriesWithData: CategoryWithAmount[],
    type: CategoryType,
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

interface ComponentState {
    editRow: number,
    rowData: string,
    editCategory: number,
    categoryData: string,
    newCategoryName: string,
    newCategoryType: CategoryType,
}

class MonthDetailSection extends Component<ComponentProps, ComponentState> {
    static defaultProps = {
        categoriesWithData: [],
        type: CategoryType.EXPENSE,
    };

    private readonly editCategoryInput: React.RefObject<HTMLInputElement>;
    private readonly editCategoryLabelInput: React.RefObject<HTMLInputElement>;
    private readonly newCategoryInput: React.RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);
        this.state = {
            editRow: null,
            rowData: "",
            editCategory: null,
            categoryData: "",
            newCategoryName: "",
            newCategoryType: null,
        };

        this.editCategoryInput = React.createRef();
        this.editCategoryLabelInput = React.createRef();
        this.newCategoryInput = React.createRef();
    }

    componentDidMount(){
        document.addEventListener("keydown", this.escapeHandler, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escapeHandler, false);
    }

    escapeHandler = (event) => {
        if (event.keyCode === 27) {
            this.cleanAddCategory();
            this.cleanEditState();
            this.cleanCategoryEditState();
        }
    };

    handleRowClicked = (index: number, amount: number) => {
        this.setState({editRow: index, rowData: amount.toString()});
        setTimeout(() => this.editCategoryInput.current.focus(), 50);
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>, categoryData: CategoryWithAmount) => {
        event.preventDefault();
        this.props.updateCategoryAmount(
            {label: categoryData.label, amount: Number(this.state.rowData)} as CategoryWithAmount);
        this.cleanEditState();
    };

    handleAmountChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({rowData: event.currentTarget.value});
    };

    cleanEditState = () => {
        this.setState({editRow: null, rowData: ""});
    };

    //

    handleAddNewCategorySubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!this.state.newCategoryName) {
            return;
        }
        this.props.addCategory({label: this.state.newCategoryName, type: this.state.newCategoryType} as NewCategory);
        this.cleanAddCategory();
    };

    handleNewCategoryChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({newCategoryName: event.currentTarget.value});
    };

    handleAddNewCategoryClicked = () => {
        this.setState({newCategoryName: "", newCategoryType: this.props.type});
        setTimeout(() => this.newCategoryInput.current.focus(), 50);
    };

    cleanAddCategory = () => {
        this.setState({newCategoryName: "", newCategoryType: null});
    };

    //

    handleCategoryLabelClicked = (index: number, categoryLabel: string) => {
        this.setState({editCategory: index, categoryData: categoryLabel});
        setTimeout(() => this.editCategoryLabelInput.current.focus(), 50);
    };

    cleanCategoryEditState = () => {
        this.setState({editCategory: null, categoryData: ""});
    };

    handleNewLabelChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({categoryData: event.currentTarget.value});
    };

    handleNewLabelSubmit = (event: React.FormEvent<HTMLFormElement>, oldLabel: string) => {
        event.preventDefault();
        if (!this.props.allCategoryLabels.includes(this.state.categoryData)) {
            this.props.updateCategory(
                {oldLabel: oldLabel, newLabel: this.state.categoryData} as RenamedCategory);
            this.cleanCategoryEditState();
        }
    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.categoriesWithData.map((categoryWithAmount, index) => (
                        <li key={index} className="list-group-item">
                            <div className={"section-label"}>
                                {this.state.editCategory === index ?
                                    <form onSubmit={(event) => this.handleNewLabelSubmit(event, categoryWithAmount.label)}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                value={this.state.categoryData}
                                                placeholder="Enter Category Name"
                                                ref={this.editCategoryLabelInput}
                                                onBlur={() => this.cleanCategoryEditState()}
                                                onChange={this.handleNewLabelChange}/>
                                        </div>
                                    </form>
                                    :
                                    <div onClick={() => this.handleCategoryLabelClicked(index, categoryWithAmount.label)}>
                                        {categoryWithAmount.label}
                                    </div>
                                }
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
                                                onBlur={() => this.cleanEditState()}
                                                onChange={this.handleAmountChange}/>
                                        </div>
                                    </form>
                                    :
                                    <div onClick={() => this.handleRowClicked(index, categoryWithAmount.amount)}>
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
                                    onBlur={() => this.cleanAddCategory()}
                                    onChange={this.handleNewCategoryChange}/>
                            </div>
                        </form>
                        :
                        (this.props.type === CategoryType.EXPENSE ?
                                <>
                                    <button type="button" className="btn btn-danger btn-sm"
                                        onClick={() => this.handleAddNewCategoryClicked()}>Add Expense Category</button>
                                    <span className={"total-sum"}>Total: {this.props.sumOfExpenses}</span>
                                </>
                            :
                                <>
                                    <button type="button" className="btn btn-success btn-sm"
                                        onClick={() => this.handleAddNewCategoryClicked()}>Add Income Category</button>
                                    <span className={"total-sum"}>Total: {this.props.sumOfIncomes}</span>
                                </>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
(mapStateToProps, mapDispatchToProps)(MonthDetailSection);