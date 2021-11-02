//time stamp - 46.32
//with a '==' sign m = 10 and m = '10' is the same 
const m = '10';

if (m == 10) {
    console.log('m is 10')
}
// this will not show up in the console because === matches data type as well as content
if (m === 10 ){
    console.log('m is 10 ')
}

//if else
const n = 20;

if(n === 10) {
    console.log('n is 10');
} 
else{
    console.log('n is NOT 10');
}

//if else / else if

const o = 4;

if(o === 10) {
    console.log('o is 10');
} else if (o > 10){
    console.log('o is greater than 10');
} else{
    console.log('o is less than 10');
}

const p = 10;

if(o > 5 || p > 10){
console.log('o is more than 5 OR p is more tha 10')
}
//only one has to be true if you use or '||'
if(o > 5 || n > 10){
    console.log('o is more than 5 OR n is more tha 10')
}

//is we use and '&&' both arguments need to be true so the statement won't be in the console log
if(o > 5 && n > 10){
    console.log('o is more than 5 AND n is more tha 10')
}

if(p > 5 && n > 10){
    console.log('p is more than 5 AND n is more tha 10')
}

//ternary operator

const colour = p > 10 ? 'red' : 'blue';
// if p(10) is more than 10 then(?) red else(:) blue
console.log(colour);//this will give blue

const color = n > 10 ? 'red' : 'blue';
// if n(20) is more than 10 then(?) red else(:) blue
console.log(color); // this will give red

//switch - using colour and color const above

switch(color) {
    case 'red':
        console.log('colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('colour is NOT red or blue');
        break;
}

switch(colour){
    case 'red':
        console.log('colour is red');
        break;
    case 'blue':
        console.log('colour is blue');
        break;
    default:
        console.log('colour is NOT red or blue');
        break;
}