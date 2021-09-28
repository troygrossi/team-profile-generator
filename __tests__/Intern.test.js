const Intern = require('../lib/Intern');


describe("Intern Test", ()=>{
    it("Add intern", () => {
        const intern = new Intern("Troy", 123, "troy@gmail.com", "UCBerkley");
        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    });

    it("Get intern name", () => {
        const intern = new Intern("Troy", 123, "troy@gmail.com", "UCBerkley");
    
        expect(intern.getName()).toEqual(expect.any(String));
    });

    it("Get intern ID", () => {
        const intern = new Intern("Troy", 123, "troy@gmail.com", "UCBerkley");
    
        expect(intern.getId()).toEqual(expect.any(Number));
    });

    it("Get intern email", () => {
        const intern = new Intern("Troy", 123, "troy@gmail.com", "UCBerkley");
    
        expect(intern.getEmail()).toEqual(expect.any(String));
    });

    it("Get intern school", () => {
        const intern = new Intern("Troy", 123, "troy@gmail.com", "UCBerkley");

        expect(intern.getSchool()).toEqual(expect.any(String));
    });

    it("Get intern role", () => {
        const intern = new Intern("Troy", 123, "troy@gmail.com", "UCBerkley");

        expect(intern.getRole()).toEqual("Intern");
    });
});