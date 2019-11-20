import React, {Component} from "react";
import './App.scss';
import { Redirect } from 'react-router-dom'

class App extends Component {
    render () {
      return (
          <Redirect to="/years" />
      );
    }
}

export default App;
