// Your code goes here

const header = document.querySelector('header');
header.addEventListener('mousemove', runEvent);
function runEvent(e){
    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

}


const nav = document.querySelector('.nav');

//Stoping nav from refreshing
nav.addEventListener('click', event => {
event.preventDefault();
event.stopPropagation();
});

// making text of the links in nav bar all upper case on mouse over
nav.addEventListener('mouseover', event => {
    if (event.target.tagName == 'A'){
        event.target.textContent = event.target.textContent.toUpperCase();
    }
});

// making text for nav go back to lower case when the mouse isn't hovering on it.
nav.addEventListener('mouseout', event => {
    if (event.target.tagName == 'A'){
        event.target.textContent = event.target.textContent.toLowerCase();
    }
});

// Mouseover on second image
const firstImage = document.getElementsByClassName('img-content')[1].querySelector('img');
firstImage.addEventListener('mouseover', event => {
    event.target.style.border = 'solid purple 3px';
});

//mouseover for first image 

const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseover', function(){
    funBus.style.transform = 'scale(1.2)';
    funBus.style.transition = 'transform 1s';
});

// mouse leave for first image

funBus.addEventListener('mouseleave', function(){
    funBus.style.transform = 'scale(1)';
});

//mouseover on adventure img

const letsGo = document.querySelector('.content-section .img-content img');
letsGo.addEventListener('mouseover', function(){
    letsGo.style.transform = 'scale(1.2)';
    letsGo.style.transition = 'transform 1s';
});
// click on destination img
const destination = document.querySelector('.content-destination  img');
destination.addEventListener('mousedown', () => {
    destination.style.transform = 'scale(1.2)';
    destination.style.transition = 'transform 1s';
});

destination.addEventListener('mouseup', () => {
    destination.style.transform = 'scale(1)';
    destination.style.transition = 'transform 1s';
});

// mouse leave on adventure image
letsGo.addEventListener('mouseleave', function(){
    letsGo.style.transform = 'scale(1)';
    letsGo.style.transition = 'transform 1s';
})



//Scroll

window.addEventListener('scroll', () => {
    const body = document.querySelector('body');
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;

    const scrolled = window.scrollY;

    if(scrolled === scrollable) {
        alert('You\'ve reached the bottom of the window!');
        window.addEventListener('scroll', () => {
            body.style.backgroundColor = 'lightgreen';
            });
    } 

});


// pressing 1 turns background coral
document.addEventListener('keydown', event => {
    if (event.key == '1'){
        document.body.style.backgroundColor = 'coral';
    }
});

// releasing 1 turns back to normal
document.addEventListener('keyup', event => {
    if (event.key == '1'){
        document.body.style.backgroundColor = '';
    }
});

// button background turns red but will stop event propagation so that background does not turn yellow
const buttons = document.getElementsByClassName('btn');
buttons[1].addEventListener('click', event=> {
    event.target.style.backgroundColor = 'red';
    event.stopPropagation();
});

// Resize button when it is clicked and the background turns yellow
buttons[0].addEventListener('click', event => {
    event.target.style.padding = "20%";
});

// when clicked background turns yellow
document.body.addEventListener('click', event => {
    document.body.style.backgroundColor = 'yellow';
});

// mouseover in footer so it changes red 
const foot = document.getElementsByTagName('footer')
foot[0].addEventListener('mouseover', event => {
    event.target.style.color = 'red';
});


// changing the opacity of image when clicked
const topImage = document.querySelector('img');
topImage.addEventListener('click', event => {
    event.target.style.opacity = '50%';
});

// dblclick makes a border
topImage.addEventListener('dblclick', event => {
    event.target.style.border = 'dashed 7px green';
});

