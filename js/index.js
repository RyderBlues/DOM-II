// Border around h1 on click
const funBusChanger = document.querySelector('h1');


funBusChanger.addEventListener("click", function(event){
    event.stopPropagation();
    funBusChanger.style.border = '2px solid black';
});

// Change border radius of fun bus picture on dblclick

const busRadius = document.querySelector('.intro img');
busRadius.addEventListener("dblclick", function(event){
    busRadius.style.borderRadius = '25px';
});

//change background color on scroll
const background = document.querySelector('html');

document.addEventListener('scroll', function(event){
    background.style.backgroundColor = "#871f6a";
});

//reset background color on Esc press
document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        background.style.backgroundColor = "white";
    }
});

//change pictures on load
const imgChanger = document.querySelectorAll('img');

window.addEventListener('load', e => {
    imgChanger.forEach(item =>{
        item.style.filter = "hue-rotate(200deg)";
    });
});

// Background color change on focus
const focusChanger = document.querySelectorAll('.nav-link');

Array.from(focusChanger).forEach(item => {
    item.addEventListener("focus", event => {
        item.style.backgroundColor = "pink";
    });
});

// Change header size on resize
const header = document.querySelector('header');

window.addEventListener('resize', e =>{
    header.style.height = "20vh";
});

//change h2's on mouseover
const h2Changer = document.querySelectorAll('h2');
Array.from(h2Changer).forEach(item =>{
    item.addEventListener("mouseover", event => {
        item.style.fontSize = '25px';
    });
});

//Message on Copy Event
window.addEventListener('copy', e => {
    alert('You copied something!');
});

//Change footer size on wheel
const wheel = document.querySelector('footer');

document.addEventListener('wheel', function(event){
    wheel.style.height = "20vh";
});

//stop nav items from refreshing the page
document.querySelector('a').addEventListener('click', e => {
    e.preventDefault();
});

//stop propagation example (relates to the click listener on h1 @ top of page)
//********** the actual stop propagation is up on the h1 *********
const propEx = document.querySelector('.nav-container');

propEx.addEventListener("click", e => {
    propEx.style.border = "2px solid black";
});
