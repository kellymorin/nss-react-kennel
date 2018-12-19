import React, {Component} from 'react'
import "./Location.css"

export default class LocationDetail extends Component{
  render(){
    const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

    return(
      <section className="locations">
        <div key={location.id} className="card">
          <div className="card-body">
            <h4 className="card-title">{location.name}</h4>
            <h6 className="card-title">{location.address}</h6>
          </div>
        </div>
      </section>
    )
  }
}