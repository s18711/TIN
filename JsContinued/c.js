function Student(courses)  {
    this.courses = courses;
}

const settingUpObject = (firstName, lastName, id) => {
   Student.prototype.firstName = firstName;
   Student.prototype.lastName = lastName;
   Student.prototype.id = id;
}
const student1 = new Student(["math","english","bio"]);

settingUpObject("mike","me", 1);

console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.id);
console.log(student1.courses);