//this is a website file
const greeting = document.querySelector('#greeting');
const expInput = document.getElementById('expInput');
//var body = document.getElementById('body' );
const submit = document.getElementById('submit');
const form = document.querySelector('form');  
var click_count = 0;
// var article = document.getElementById('article');


function displayTime() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hour + " : " + minutes + " : " + seconds;
  document.getElementById("time").innerHTML = `Time is :${time}`;

  if (hour < 12) {
    greeting.innerHTML = "Good Morning!!";
  } else if (hour < 16) {
    greeting.innerHTML = "Good Afternoon!!";
  } else if (hour < 21) {
    greeting.innerHTML = "Good Evening!!";
  } else if (hour < 22) {
    greeting.innerHTML = "Good Night!!";
  } else {
    greeting.innerHTML = "Go to Sleep（︶^︶）";
  };
};

setInterval(displayTime, 100);

var tables = () => {
  console.log('object');
  setTimeout(console.log('object'), 3000);
}

