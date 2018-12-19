import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import "./Owner.css"

export default class OwnerList extends Component{
  render(){
    return (
      <section className="owners">
        {
          this.props.owners.map(owner =>
            <div key={owner.id}>
              <h3>{owner.name}</h3>
              <p>{owner.phoneNumber}</p>
              <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
              <a href="#"
                onClick={()=> this.props.deleteOwners( owner.id)}
                className="card-link">Remove Owner</a>
            </div>
            )
        }
      </section>
    )
  }
}