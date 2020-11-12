class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    set fullName(name){
        const words  = name.toString().split(' ');
        this.firstName = words[0] || " ";
        this.lastName = words[1] || " ";
    }

}

class Student extends  Person{
    constructor(firstName, lastName, id, grades) {
       super(firstName,lastName);
        this.id = id;
        this.grades = grades;
    }
    nameAndAverage = function (){
        console.log(`${this.firstName}, ${this.lastName}, grade average ${this.grades.reduce((a,b) => a + b,0) / this.grades.length}`)
    }

    get averageGrade(){
        return this.grades.reduce((a,b) => a + b,0) / this.grades.length
    }
}

const student = new Student("mike", "me", "s18711",[5,5,4,5,5]);
console.log(student.fullName);
student.fullName = "carl carlovski";
console.log(student.fullName);
student.nameAndAverage();
console.log(student.averageGrade);