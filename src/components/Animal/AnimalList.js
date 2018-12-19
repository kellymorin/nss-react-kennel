import React, {Component} from 'react'
import dog from './DogIcon.png'
import "./Animal.css"

export default class AnimalList extends Component{

  //This function takes the id passed in from the render below and finds the animal id that matches it in the join table. It then takes that instance of the join table and maps over the owners to find the correct owner that matches that instance of the join table and returns their name. If the animal does not have an owner, "no one" is returned.
  animalOwners(animalId){
    let animalOwner= this.props.animalsOwners
    .filter(animalsOwners => animalsOwners.animalId === animalId)
    .map(animalsOwners => this.props.owners.find(owner => owner.id === animalsOwners.ownerId).name)

    if(animalOwner.length === 0){
      animalOwner =["no one"]
    }

    return animalOwner
  }

  render(){
    return(
      <section className="animals">
      {
        this.props.animals.map(animal =>
          <div key={animal.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                <img src={dog} alt="dog icon" className="icon--dog" />
                {animal.name}
              </h5>
                <p className="card-title">{animal.breed}</p>
              <p>Owned by: {this.animalOwners(animal.id).join(" & ")}</p>
              <a href="#"
                onClick={()=> this.props.deleteAnimal(animal.id)} className="card-link">Delete</a>
            </div>
          </div>
          )
      }
      </section>
    )
  }
}