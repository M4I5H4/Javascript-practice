//Object Oriented Programming
//time stamp - 59.24
//contructor function - starts with capital 

function Person(firstName, lastName, dob){
this.firstName = firstName;
this.lastName = lastName;
this.dob = new Date(dob);
this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

//Class
/*class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}*/

//instatate object
const person1 = new Person('Joe', 'Dam', '30 April 2003'); //note - dates only seemed to work with written months
const person2 = new Person('Mary', 'Jay', '14 September 2003');
const person3 = new Person('Bob', 'Coop', '17 December 2004');
const person4 = new Person('Vandy', 'Loo', '01 July 2004');

console.log(person1);
console.log(person2.firstName);
console.log(person3.dob);
console.log(person4.lastName);

console.log(person1.getFullName())
console.log(person4.getBirthYear())