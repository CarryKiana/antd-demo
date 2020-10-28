import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import basic from 'views/report/basic'

import * as a from 'react-router-dom';
console.log(a)
export default class View extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={basic}></Route>
      </Router>
    )
  }
}