import React, {Component} from "react";
import './MonthDetail.scss';
import {connect} from "react-redux";
import {AppState} from "../redux/reducers";


const mapStateToProps = (state: AppState) => {
    return {
        categories: state.spendingCategories,
    }
};


interface ComponentStateProps {
    categories: string[]
}

interface ComponentDispatchProps {
}


interface ComponentOwnProps {
}

type ComponentProps = ComponentStateProps & ComponentDispatchProps & ComponentOwnProps;

class MonthDetail extends Component<ComponentProps, {}> {
    public static defaultProps = {
        categories: [],
    };

    render() {
        return (
            <div className="month-detail-wrapper">
                <h4>Month Detail</h4>
                <ul className="list-group">
                    {this.props.categories.map((category, index) => (
                        <li key={index} className="list-group-item">
                            <div>{category}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default connect <ComponentStateProps, ComponentDispatchProps, ComponentOwnProps>
    (mapStateToProps, null)(MonthDetail);