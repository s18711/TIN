const car = {
    manufacturer: "Ford",
    yearOfProduction: 1994,
    color: "blue",
    hp: 180,
   howOldIsIt (actualYear){
        return actualYear - this.yearOfProduction;
    },
    introduceCar(){
        console.log(`it's ${this.manufacturer}, it has ${this.hp} horses and was produced in ${this.yearOfProduction}`)
    }


}

const writeCarObj = (car) => {
    for (const carKey in car) {
        let value = car[carKey];
        console.log(value);
        console.log(typeof value);
    }
}

writeCarObj(car);