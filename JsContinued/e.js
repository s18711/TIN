class Student{
    constructor(firstName, lastName, id, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }
    nameAndAverage = function (){

        console.log(`${this.firstName}, ${this.lastName}, grade average ${this.grades.reduce((a,b) => a + b,0) / this.grades.length}`)
    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(name){
        const words  = name.toString().split(' ');
        this.firstName = words[0] || " ";
        this.lastName = words[1] || " ";
    }
    get averageGrade(){
        return this.grades.reduce((a,b) => a + b,0) / this.grades.length
    }
}
const student = new Student("mike","me",5, [5,5,4,5,5]);
console.log(student.averageGrade);
console.log(student.fullName);
student.fullName = "something else";
console.log(student.fullName);
student.nameAndAverage();