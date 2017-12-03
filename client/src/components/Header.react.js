import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments.react'

class Header extends Component {

  renderTitle() {
    switch(this.props.auth) {
      case null:
        return ''
      case false:
        return 'Udemy Emaily'
      default:
        return this.props.auth.name ? `Hi !, ${this.props.auth.name}` : ''
    }
  }

  renderButton() {
    switch(this.props.auth) {
      case null:
        return ''
      case false:
        return <a className="button is-primary" href="/auth/google">Log In</a>
      default:
        return (
          <div className="field is-grouped">
            <p className="control"><Payments/></p>
            <p className="control"><a className="button is-static">Credits: {this.props.auth.credits}</a></p>
            <p className="control"><a className="button is-danger" href="/api/logout">Logout</a></p>
          </div>
        )
    }
  }

  render() {
    return (
      <div> 
        <nav className="navbar is-dark">
          <div className="container">
            <div className="navbar-start">
              <div className="navbar-item">
                <Link to={ this.props.auth ? '/dashboard' : '/' }>
                  <h1 className="subtitle has-text-light">{ this.renderTitle() }</h1>
                </Link>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                { this.renderButton() }
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
