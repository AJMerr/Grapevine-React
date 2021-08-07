import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllSeeds from './components/AllSeeds';
import CreateSeed from './components/CreateSeed';
import SingleSeed from './components/SingleSeed';
import EditSeed from './components/EditSeed';
import './App.css';
require ("./components/styles.css")

class App extends React.Component {
  render () {
    return(
      <Router>
        <div>
          <Switch>
            <Route exact path = "/"component = {AllSeeds} />
            <Route exact path= "/newseed" component = {CreateSeed} />
            <Route exact path= "/seed/:id" component = {SingleSeed} />
            <Route exact path= "/edit/:id" component = {EditSeed} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
