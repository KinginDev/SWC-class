//create element
var img = document.createElement('img');
//add attibute to element
img.src = 'img/a.png';
//give the image a height
img.style.height = '300px';
//get the element to want to append to
var myP = document.getElementById('myP');
//append the image to the element
myP.appendChild(img);


/*
* Listen to an event with Vanilla Js
**/

//Create a Button in html and give it an id
var button = document.getElementById('myButton');
//listen to the click event and return a callback
button.addEventListener('click', function(){
    //log into the console
   // console.log('I am a clicked button')
   //change the css properties of the button
   //this.style.backgroundColor = 'red';
    this.className = 'clickedButton'
    
});

/*
* jQuery
*/

//const pTag =  $('p'); 
//console.log(pTag);

//Listen to click event
$('#myButton2').click(function(){
    $(this).addClass('clickedButton');
})

