//time stamp - 54.24
//function name of func (param1, param2){
//console.log(param1 + param2);}
//name of func (data, data)
function addNums (num1, num2) {
    console.log(num1+num2);
} 

addNums(5,4);
//if you add value within the params then you don't need to name them in the last round brackets
function minusNums (N1 = 40, N2 = 30){
    console.log(N1-N2);
}
minusNums() // if you add numbers in the backets it will overide the values in the beginning

//how to write fuctions with returns

function multiNums (N3 = 50, N4 = 80){
    return N3 * N4;
}
console.log(multiNums(30, 5));

//arrow functions

//with only one thng to call you dont need curly braces 
const addN = (nu1 = 1, nu2 =1) => console.log(nu1 + nu2);
addN(5,5);

//or if using return style you don't need the return key word or curly braces 

const minusN = (nm1, nm2) => nm1 - nm2;
console.log(minusN(67, 7));

//or if using one param

const multiN = mulnum => mulnum * 5
console.log(multiN(5));