import React, {Component} from 'react'

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
          <div key={animal.id}>
            {animal.name} the {animal.breed}
            <p>Owned by: {this.animalOwners(animal.id).join(" & ")}</p>
          </div>
          )
      }
      </section>
    )
  }
}