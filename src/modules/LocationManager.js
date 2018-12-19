import APIManager from "./APIManager";

class LocationManager extends APIManager{
  getLocations(){
    return this.getAll("locations")
  }
}

export default new LocationManager()