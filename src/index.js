import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import Kennel from './components/Kennel'

ReactDOM.render(
  <Router>
    <Kennel />
  </Router>
  , document.querySelector("#root"))
