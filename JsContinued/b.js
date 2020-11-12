

function Student(firstName, lastName, id, grades){
    this.firstName = firstName,
        this.lastName = lastName,
        this.id = id,
        this.grades = grades
        this.nameAndAverage = function (){

            console.log(`${this.firstName}, ${this.lastName}, grade average ${this.grades.reduce((a,b) => a + b,0) / grades.length}`)
        }

    }

    const student = new Student("mike","me","s18711", [5,5,4,5,5]);
    student.nameAndAverage();






