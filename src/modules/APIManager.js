import {Component} from 'react'

const remoteURL = "http://localhost:5002"

export default class APIManager extends Component{
  get(category, id){
      return fetch(`${remoteURL}/${category}/${id}`).then(e => e.json())
  }

  getAll(category){
    return fetch(`${remoteURL}/${category}`).then(e => e.json())
  }
  delete(id, category){
    return fetch(`${remoteURL}/${category}/${id}`, {
      method: "DELETE"
    })
    .then(e => e.json())
    .then(()=> this.getAll(category))
  }
}