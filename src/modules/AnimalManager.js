const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  },
  delete(id){
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(()=> fetch(`http://localhost:5002/animals`))
    .then(e => e.json())
  }
}