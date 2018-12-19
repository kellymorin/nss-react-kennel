import React, {Component} from 'react'
import "./Animal.css"
import dog from "./DogIcon.png"
import {Link} from 'react-router-dom'

export default class AnimalDetail extends Component {
  render(){
    const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

    return (
      <section className="animals">
        <div key={animal.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} className="icon--dog" />
                {animal.name}
            </h4>
            <h6 className="card-title">{animal.breed}</h6>
            <Link className="nav-link" to={"/animals"}     onClick={()=> {
                return this.props.deleteAnimals(animal.id)}}>Delete</Link>
          </div>
        </div>
      </section>
    )
  }
}