import React, {Component} from 'react'
import LocationNorth from './locationNorth'
import LocationSouth from './locationSouth'

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