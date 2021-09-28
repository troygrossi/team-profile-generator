const Employee = require("../lib/Employee.js");


describe("Employee Test", ()=>{

    it("Add employee", () => {
        const employee = new Employee("Troy", 123, "troy@gmail.com");
    
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });

    it("Get employee name", () => {
        const employee = new Employee("Troy", 123, "troy@gmail.com");
    
        expect(employee.getName()).toEqual(expect.any(String));
    });

    it("Get employee ID", () => {
        const employee = new Employee("Troy", 123, "troy@gmail.com");
    
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    it("Get employee email", () => {
        const employee = new Employee("Troy", 123, "troy@gmail.com");
    
        expect(employee.getEmail()).toEqual(expect.any(String));
    });

    it("Get employee role", () => {
        const employee = new Employee("Troy", 123, "troy@gmail.com");

        expect(employee.getRole()).toEqual("Employee");
    });
});