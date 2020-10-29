import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import basic from 'views/report/basic'

import { asyncComponent } from 'router/asyncComponent'
import { load } from 'router/load'
export default class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      views: basic
    }
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={this.state.views}></Route>
        <Route path="/report/personas" component={ asyncComponent(() => load('/report/personas')) }></Route>
      </Router>
    )
  }
}