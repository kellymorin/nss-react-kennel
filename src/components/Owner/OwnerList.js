import React, {Component} from 'react'

export default class OwnerList extends Component{
  render(){
    return (
      <section className="owners">
        {
          this.props.owners.map(owner =>
            <div key={owner.id}>
              <h3>{owner.name}</h3>
              <p>{owner.phoneNumber}</p>
              <a href="#"
                onClick={()=> this.props.deleteOwners(owner.id)}
                className="card-link">Remove Owner</a>
            </div>
            )
        }
      </section>
    )
  }
}