//Object Literals
//time stamp - 30.10
const person = {
    firstName: 'Jane',
    lastName:'Doe',
    theAge: 30,
    hobbies: ['Music', 'Movies', 'Sport'],
//object within an object
address: {
    street: '123 Jump Street',
    city: 'London',
    postCode: 'E17'
 }
}

console.log(person); // this will show us all the values in the object
console.log(person.firstName); //will show specific value
console.log(person.firstName, person.theAge); //can be used to show more than one value

// if you want to selcet the movie value from the array
console.log(person.hobbies[1])
//if we wanted the city
console.log(person.address.city);

// if we want to pull out specific values we ccan do this (called deconstruction)
const {firstName, lastName, address: {city}}  = person; // you are pulling out the first and last name from the object 'person'
console.log(firstName);
console.log(city);

//we can add a property/value
person.email = "jane@gamil.com";

//arrays of objects

const todos = [
    {
        id: 1,
        text: "take out bins",
        isCompleted: true
 },
 {
    id: 2,
    text: "meeting",
    isCompleted: true
},
{
    id: 3,
    text: "susans bithday",
    isCompleted: false
}
];

console.log(todos)
console.log(todos[1].text)
// get the value meeting second number in the array is 1 and then the .text is the value we want

//converting to JSON - data getting sent to a server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


