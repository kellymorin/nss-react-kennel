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
            </div>
            )
        }
      </section>
    )
  }
}