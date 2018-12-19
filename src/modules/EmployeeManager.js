import APIManager from "./APIManager";

class EmployeeManager extends APIManager{
  getEmployees(){
    return this.getAll("employees")
  }
}

export default new EmployeeManager()