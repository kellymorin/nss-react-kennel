import React, {Component} from 'react'

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
      {
        this.props.employees.map(employee =>
          <div key={employee.id}>
            {employee.name}
            <a href="#"
              onClick={()=> this.props.deleteEmployees(employee.id)}
              className="card-link">Fire Employee</a>
          </div>
        )
      }
      </section>
    );
  }
}