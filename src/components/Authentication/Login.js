import React, {Component} from 'react'
import './Login.css'

export default class Login extends Component{
  //Set initial state
  state={
    email: "",
    password: "",
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = evt => {
    evt.preventDefault()
    sessionStorage.setItem("credentials",
    JSON.stringify({
      email: this.state.email,
      password: this.state.password
    }))
    this.props.history.push("/")
  }

  render(){
    return(
      <form className="login" onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail">Email Address</label>
        <input onChange={this.handleFieldChange} type="email" id="email" placeholder="Email address" required="" autoFocus="" />
        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" />
        <button type="submit">Sign in</button>
      </form>
    )
  }
}