import APIManager from "./APIManager";


class AnimalManager extends APIManager{
  getAnimals(){
    return this.getAll("animals")
  }
}

export default new AnimalManager()