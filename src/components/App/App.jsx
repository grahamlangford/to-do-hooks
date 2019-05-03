import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Context from '../Context'
import Redux from '../Redux'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/redux" component={Redux} />
        <Route path="/" component={Context} />
      </Switch>
    </Router>
  )
}

export default App
