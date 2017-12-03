import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header.react'
import Landing from './Landing.react'
const Dashboard = () => <h1 className="subtitle is-1">dashboard</h1>
const SurvayNew = () => <h1 className="subtitle is-1">survayNew</h1>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
            <div> 
              <Header />
              <Route path="/" exact component={Landing}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/survey/new" component={SurvayNew}/>
            </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)