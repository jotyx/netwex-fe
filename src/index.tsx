import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store/configureStore";
import { Route, Router, withRouter } from 'react-router-dom'
import Years from "./components/Years";
import YearDetail from "./components/YearDetail";
import history from "./history/history";
import App from "./App";

render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={App} />
            <Route exact path="/years" component={withRouter(Years)}/>
            <Route exact path="/year-detail" component={withRouter(YearDetail)}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
