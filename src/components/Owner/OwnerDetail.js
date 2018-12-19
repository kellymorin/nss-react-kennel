import React, {Component} from 'react'
import "./Owner.css"
import {Link} from 'react-router-dom'

export default class OwnerDetail extends Component{
  render(){
    const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

    return(
      <section className="owner">
        <div key={owner.id} className="card">
          <div className="card-body">
            <h4 className="card-title">{owner.name}</h4>
            <h6 className="card-title">{owner.phoneNumber}</h6>
            <Link className="nav-link" to={"/owners"}     onClick={()=> {
                return this.props.deleteOwners(owner.id)}}>Delete</Link>
          </div>
        </div>
      </section>
    )
  }
}