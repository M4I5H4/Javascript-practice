//Document Object Model
//time stamp - 1:12.40
console.log(window); //is the parent level object
//Single element selectors
const form = document.getElementById('my-form');
console.log(form)//shows in the console what the html is for the form element
console.log(document.querySelector('.container'))
console.log(document.querySelector('h1')); // only selects first element of its kind

//Multiple element selctors 
console.log(document.querySelectorAll('.item')); //node list is similar to an array
console.log(document.getElementsByClassName('item')); // no need for dot(.) - this is HTML collection
console.log(document.getElementsByTagName('li')) //uses tag name

//loops through and grabs all of the list items
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//dom - user interface
const ul = document.querySelector('.items');
//ul.remove(); - will remove list items
//ul.lastElementChild.remove(); - will remove last element in this case the 3rd one
ul.firstElementChild.textContent = 'Hello'; // changes text content in li one
ul.children[1].innerText = 'Maisha';// changes the seconf li item using the index number
ul.lastElementChild.innerHTML = '<h1>HELLO</h1>'; //changing HTML dynamically - changes last element of the ul in to h4

//using the query selcetor to change the style
const btn = document.querySelector('.btn');
btn.style.background = '#FFE5B4';
btn.style.color = 'grey';

//event, function(arrow)
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('click')
    document.querySelector('#my-form')
    .style.background = '#fadadd';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h5>No Entry,</h5>'
    
    //you can get details of element you click, when you click it
    //console.log(e.target);
    //console.log(e.target.className);

    //mouseover
    //mouseout
})