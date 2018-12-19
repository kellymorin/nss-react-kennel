import APIManager from "./APIManager";

class OwnerManager extends APIManager{
  getOwners(){
    return this.getAll("owners")
  }

  deleteOwner(id){
    let animalsInfo = []
    const remoteURL = "http://localhost:5002"
    return fetch(`${remoteURL}/animalsOwners?ownerId=${id}`)
    .then(e => e.json())
    .then(animalOwners => animalsInfo.push(animalOwners))
    .then(()=> this.delete(id, "owners"))
    .then(()=> this.getAll("animalsOwners"))
    .then(animalsOwners => {
      if(animalsOwners.find(info => info.animalId === animalsInfo[0][0].animalId)){
        return
      } else{
        this.delete(animalsInfo[0][0].animalId, "animals")
      }
    })
    .then(()=> this.getAll("owners"))
  }

}

export default new OwnerManager()