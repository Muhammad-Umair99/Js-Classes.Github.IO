// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.

// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():

//synyax
class ClassName {
    constructor() {  }
}


class car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}

// The example above creates a class named "Car".
// The class has two initial properties: "name" and "year"


// Using a Class
// When you have a class, you can use the class to create objects:

const car1 = new car("Ford","2024");
const car2 = new car("Audi","2029")
console.log(car1)
document.getElementById("para").innerHTML = `${car1.name}  ${car2.name}`

// The example above uses the Car class to create two Car objects.




// Class Methods
// Class methods are created with the same syntax as object methods.

// 1) Use the keyword class to create a class.

// 2) Always add a constructor() method.

// 3) Then add any number of methods.


// Syntax
// class ClassName {
//   constructor() {  }
//   method_1() {  }
//   method_2() {  }
//   method_3() {  }
// }

//Q)Create a Class method named "age", that returns the Car age:

class cars  {
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date;
        return date.getFullYear() - this.year;
    }
}

const ghari =  new cars("Toyota","2015");
document.getElementById("para").innerHTML = `my car is ${ghari.age()} year old`