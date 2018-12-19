import React, {Component} from 'react'
import LocationNorth from './LocationNorth'
import LocationSouth from './LocationSouth'

export default class LocationList extends Component{
  render(){
    return (
      <div>
        <LocationNorth />
        <LocationSouth />
      </div>
    )
  }
}