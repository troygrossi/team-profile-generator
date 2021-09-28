const Engineer = require('../lib/Engineer');


describe("Engineer Test", ()=>{
    it("Add engineer", () => {
        const engineer = new Engineer("Troy", 123, "troy@gmail.com", "troygrossi");
        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));
    });

    it("Get engineer name", () => {
        const engineer = new Engineer("Troy", 123, "troy@gmail.com", "troygrossi");
    
        expect(engineer.getName()).toEqual(expect.any(String));
    });

    it("Get engineer ID", () => {
        const engineer = new Engineer("Troy", 123, "troy@gmail.com", "troygrossi");
    
        expect(engineer.getId()).toEqual(expect.any(Number));
    });

    it("Get engineer email", () => {
        const engineer = new Engineer("Troy", 123, "troy@gmail.com", "troygrossi");
    
        expect(engineer.getEmail()).toEqual(expect.any(String));
    });

    it("Get engineer github", () => {
        const engineer = new Engineer("Troy", 123, "troy@gmail.com", "troygrossi");

        expect(engineer.getGithub()).toEqual(expect.any(String));
    });

    it("Get engineer role", () => {
        const engineer = new Engineer("Troy", 123, "troy@gmail.com", "troygrossi");

        expect(engineer.getRole()).toEqual("Engineer");
    });
});