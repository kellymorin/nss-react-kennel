import React, {Component} from 'react'
import EmployeeList from "./Employee/EmployeeList"
import LocationList from './Location/LocationList';

export default class Kennel extends Component {
  render() {
    return (
      <div>
        <h3>Student Kennels</h3>
        <LocationList />
        <EmployeeList />
      </div>
    );
  }
}