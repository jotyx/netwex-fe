import React from 'react';
import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import store from "./redux/store/configureStore";
import { Route, Router, withRouter } from 'react-router-dom'
import Years from "./components/Years";
import YearDetail from "./components/YearDetail";
import history from "./history/history";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
      <Route exact path="/years" component={withRouter(Years)}/>
      <Route exact path="/year-detail" component={withRouter(YearDetail)}/>
    </Router>
  </Provider>
);
