console.log('working');

// Write a function called memeMe!
// prompt the user a start line, 
// then prompt them again for a punch line
// target the paragraph with a class of 'start'
// change the text to what the user inputed for a starting line
// target the paragraph with a class of 'punch'
// change the text to what the user inputed for punch line

var memeMe = function(){
  var start = prompt('input a setup line');
  var punch = prompt('input a punch line');

  $('.start').text(start);
  $('.punch').text(punch);
}

// Write a function called addLike
// target the text with a class of 'likes'
// store the text in a var
// hint: this will be a string, but we want it to be a number!
// add one to the likes
// reset the value of likes on the screen to the new value;

var addLike = function(){
  var likes = parseInt($('.likes').text());
  likes ++;
  $('.likes').text(likes);
}


//document ready?
// use jquery to append a h1 with a title to the wrapper
// create an event listener to watch for on a click on the generate button 
  // hint: it has a class name!
  // if the button is pressed, run the function memeMe

// create an event listener ot watch for a clikc on the 'like' button
  // if the button is pressed, run the addLike function

$(document).ready(function(){
  $('.wrapper').prepend('<h1>happy times</h1>');
  $('.generate').click(memeMe);  
  $('.like').click(addLike);  
});

// BONUS!
// Create a new button
// If this button is pressed
  // clear the text
  // change the image to a new meme image
  // hint: the image is a background image to the .image class
  // Use the .css function to change it.

// SUPER BONUS!
// Create an an array of meme urls!
// When the new button is pressed, randomly select a meme image from the array!

// need help finding meme worthy images? 
// there are a ton of examples at https://memegenerator.net



