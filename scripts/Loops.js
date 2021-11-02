//time stamp - 37.45
const todoLoop = [
    {
        id: 4,
        text: "wash dishes",
        isCompleted: true
 },
 {
    id: 5,
    text: "fold laundry",
    isCompleted: true
},
{
    id: 6,
    text: "meet with friends",
    isCompleted: false
}
];
//For loops this example starts at 0
for(let i=0; i < 10; i++) {
    console.log(i);
    console.log(`For loop number: ${i}`);
}

//while loop - set variable outside of loop 40.23 mins
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//loop throug arrays

// to show array number
for(let i = 0; i < todoLoop.length; i++) {
    console.log(`For Loop Number: ${i}`)
}
// to show text in console
for(let i = 0; i < todoLoop.length; i++) {
    console.log(todoLoop[i].text);
}

// better practise for looping through arrays to show text in console
for(let todo of todoLoop){
    console.log(todo.text); //text can be replaced with id to get the id numbers 
}

//forEach, map, filter

//forEach
todoLoop.forEach(function(todo1){
    console.log(todo1.id);
});

//map
const todoText = todoLoop.map(function(todo1){
    return todo1.text;
});
console.log(todoText);

//filter
const todoCompleted = todoLoop.filter(function(todo2){
    return todo2.isCompleted === true;
});

console.log(todoCompleted);

// you can chain on other array methods

const todocompmap = todoLoop.filter(function(todo3){
    return todo3.isCompleted === true;
}).map(function(todo3){
    return todo3.text;
})

console.log(todocompmap);