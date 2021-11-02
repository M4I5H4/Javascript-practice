//see console
//time stamp - 18.40
const hisName = 'John';
const hisAge = 30;

//strings - concatenation
console.log("my name is " + hisName + " and I am " + hisAge);
//Template String
console.log(`My name is ${hisName} and I am ${hisAge}`);
//make it a const
const hello = `My name is ${hisName} and I am ${hisAge}`; //back tack is used so that we dont need the + and the quotes
console.log(hello);

//length give the number of character in the string
const s = "Hello World!";
console.log(s.length);
//
console.log(s.toUpperCase());//method need parenthesis
//
console.log(s.substring(0, 5));// this will give us the first 5 indices - Hello(space)
//
console.log(s.substring(0, 5).toLocaleUpperCase());//can be cained on to each other giving HELLO
//
console.log(s.split("")) // splits letter in to an array with 12 values
//making an array in a differnt context
const a = " tech, it, code, data";
console.log(a.split(", ")); //makes an array out of the 4 items in the string
