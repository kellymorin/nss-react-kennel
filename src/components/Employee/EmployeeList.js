import React, { Component } from 'react'
import "./Employee.css"
import {Link} from 'react-router-dom'


export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        {
          this.props.employees.map(employee =>
            <div key={employee.id}>
              {employee.name}
              <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
              <a href="#"
                onClick={()=> this.props.deleteEmployees( employee.id)}
                className="card-link">Fire Employee</a>
            </div>
          )
        }
      </section>
    )
  }
}