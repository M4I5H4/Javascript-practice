//See console
//time stamp - 24.00
// Arrays - varibales that hold multiple values

const numbers = new Array(1,2,3,4,5); //uses new
console.log(numbers);

const fruits = ["apples", "oranges", "pears"]; //uses brackets 
fruits[3] = "grapes" //adds grapes to the array

/*if you want to add a value to the array and you don't know how long it is to add it like 
above we use the push method*/
fruits.push("mangoes"); // to take off last value use pop()
// to add a value at the beginning of the array we use unshift
fruits.unshift("blueberrys");// to take off first value use shift

//if you want to check if something is an array
console.log(Array.isArray(fruits));//comes up as true

//if you want to fins the index of a value in an array
console.log(fruits.indexOf("oranges"));// orange is index 2

console.log(fruits);
console.log(fruits[1]); // 1 gives oranges because the index starts at 0




