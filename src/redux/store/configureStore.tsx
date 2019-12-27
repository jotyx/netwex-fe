import { createStore, compose } from "redux";
import rootReducer from "../reducers/index";

const enhancers = compose(
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    rootReducer,
    enhancers
);

export default store;