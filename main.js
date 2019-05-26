// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// forEach, map, filter

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });

// console.log(todoCompleted);

// const x = 20;
// const y = 10;

// if(x > 5 || y > 10) {
//     console.log('x is more 5 or y is more than 10');
// }

// const x = 10;

// const color = x > 10 ? 'red' : 'blue';

// console.log(color);

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// function addNums(num1=1, num2=2) {
//     return num1 + num2
// }

// Arrow function
// const addNums = (num1=1, num2=2) => num1 + num2;

// console.log(addNums(3, 4));

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// // separate functions from objects
// Person.prototype.getBirthYear = function() {
    
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// As a class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}



const person1 = new Person('John', 'Doe', '4-3-1980');

console.log(person1.getBirthYear());
console.log(person1.getFullName());



    

