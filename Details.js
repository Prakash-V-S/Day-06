//TASK : 06
//DATE : 27/11/2023
//03) Write a “person” class to hold all the details.-----------------------------------------

class Person {
    constructor(name, age, curr, ug, clg, cgpa, skills) {
        this.name = name;
        this.age = age;
        this.curr = curr;
        this.ug = ug;
        this.clg = clg;
        this.cgpa = cgpa;
        this.skills = skills;
    }
    getPersonDetails() {
        return `
Hello Every one, Myself ${this.name}, ${this.age} years old and I'm currently porsuing ${this.curr} 
and I completed ${this.ug} in ${this.clg} with ${this.cgpa} CGPA,
My Technical Skills are ${this.skills} 
Thank You ............!`
    }
}
let detail = new Person("Prakash V S", 22, "GUVI FSD Course", "MCA", "SRM IST RAMAPURAM", 9.35, "HTML, CSS, JS, CORE JAVA, MYSQL, FIGMA");
console.log(detail.getPersonDetails());

// output ----------------------------------------

// Hello Every one, Myself Prakash V S, 22 years old and I'm currently porsuing GUVI FSD Course 
// and I completed MCA in SRM IST RAMAPURAM with 9.35 CGPA,
// My Technical Skills are HTML, CSS, JS, CORE JAVA, MYSQL, FIGMA 
// Thank You ............!

