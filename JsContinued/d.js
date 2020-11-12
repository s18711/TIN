

function Student(firstName, lastName, id, grades){
    this.firstName = firstName,
        this.lastName = lastName,
        this.id = id,
        this.grades = grades
    this.nameAndAverage = function (){
        console.log(`${this.firstName}, ${this.lastName}, grade average ${this.grades.reduce((a,b) => a + b,0) / grades.length}`)
    }
}


Object.defineProperties(Student.prototype, {
    fullName: {
        get: function()    { return this.firstName + " " + this.lastName; }
        ,set: function(name){
            const words  = name.toString().split(' ');
            this.firstName = words[0] || " ";
            this.lastName = words[1] || " ";
        }
    },
    averageGrade: {
        get: function (){
            return this.grades.reduce((a,b) => a + b,0) / this.grades.length;
        }
    }
});

const student = new Student("mike","me","s18711", [5,5,4,5,5]);
student.nameAndAverage();
console.log(student.fullName);
student.fullName = "sth else";
console.log(student.fullName);
console.log(student.averageGrade);






