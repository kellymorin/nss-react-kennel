import React, {Component} from 'react'
import "./Employee.css"
import {Link} from 'react-router-dom'

export default class EmployeeDetail extends Component{
  render(){
    const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

    return(
      <section className="employee">
        <div key={employee.id} className="card">
          <div className="card-body">
            <h4 className="card-title">{employee.name}</h4>
            <Link className="nav-link" to={"/employees"}     onClick={()=> {
                return this.props.deleteEmployees(employee.id)}}>Delete</Link>
          </div>
        </div>
      </section>
    )
  }
}