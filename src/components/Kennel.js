import React, {Component} from 'react'
import NavBar from './Nav/NavBar'
import ApplicationViews from './ApplicationViews'
import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default class Kennel extends Component {
  render(){
    return(
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    )
  }

}