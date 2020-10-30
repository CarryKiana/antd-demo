import React, { Suspense } from 'react';
import { Route, Link } from 'react-router-dom';

const basic = React.lazy(() => import('views/report/basic'))
const personas = React.lazy(() => import('views/report/personas'))


export default class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <>
        <Link to="/">1</Link>
        <Link to="/report/interaction">2</Link>
        <Link to="/report/personas">3</Link>
        <Suspense fallback={ <div>Loading...</div> }>
          <Route path="/report/interaction" exact component={basic}></Route>
          <Route path="/report/personas" component={personas}></Route>
        </Suspense>
      </>
    )
  }
}