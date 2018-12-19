import React, {Component} from 'react'
import './Login.css'

export default class Login extends Component{
  //Set initial state
  state={
    email: "",
    password: "",
    rememberMe: false,
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    if(evt.target.id === "rememberMe"){
      if(evt.target.checked){
        this.setState({rememberMe: true})
      } else{
        this.setState({rememberMe: false})
      }
    } else{
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }
  }

  handleLogin = evt => {
    evt.preventDefault()
    if(this.state.rememberMe === false){
      sessionStorage.setItem("credentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }))
      this.props.history.push("/")
    } else if(this.state.rememberMe === true){
      localStorage.setItem("credentials",
      JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }))
      this.props.history.push("/")
    }
  }

  render(){
    return(
      <form className="login" onSubmit={this.handleLogin}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail">Email Address</label>
        <input onChange={this.handleFieldChange} type="email" id="email" placeholder="Email address" required="" autoFocus="" />
        <label htmlFor="inputPassword">Password</label>
        <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" />
        <fieldset>
          <input onChange={this.handleFieldChange} type="checkbox" id="rememberMe"/>
          <label htmlFor="inputRememberMe">Remember Me</label>
        </fieldset>
        <button type="submit">Sign in</button>
      </form>
    )
  }
}