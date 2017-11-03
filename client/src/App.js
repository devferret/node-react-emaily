import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar is-light">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-danger" href="/auth/google">
                    {/* <span class="icon">
                      <i class="fa fa-download"></i>
                    </span> */}
                    <span>Log Out</span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="/auth/google">
                    {/* <span class="icon">
                      <i class="fa fa-download"></i>
                    </span> */}
                    <span>Log In</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default App
