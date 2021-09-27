const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, workNumber){
        super(name, id, email);
        this.workNumber = workNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;