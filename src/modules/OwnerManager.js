const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/owners`).then(e => e.json())
  },
  delete(id){
    let animals = []
    return fetch(`${remoteURL}/animalsOwners?ownerId=${id}`)
    .then(e => e.json())
    .then(animalOwners => animals.push(animalOwners))
    // .then(()=> console.log(animals))
    .then(()=> fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    }))
    .then(e=> e.json())
    .then(()=> fetch(`${remoteURL}/animalsOwners`))
    .then(e => e.json())
    .then(animalsOwners => {
      if(animalsOwners.find(info => info.animalId === animals[0][0].animalId)){
        return
      } else{
        return fetch(`${remoteURL}/animals/${animals[0][0].animalId}`, {
          method: "DELETE"
        })
        .then(e => e.json())
      }
    })
    .then(()=> this.getAll())
  }
}