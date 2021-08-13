
var greeting = document.getElementById('greeting');
var expInput = document.getElementById('expInput');
//var body = document.getElementById('body');
const submit = document.getElementById('submit');
var click_count = 0;
// var article = document.getElementById('article');


function displayTime() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hour + " : " + minutes + " : " + seconds;
  document.getElementById("time").innerHTML = "Time " + " " + time;

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

// submit.addEventListener('click', function () {
//   var expInput = document.getElementById("expInput");
//   var product = document.createElement('p');
//   var txt = document.createTextNode(expInput.value +' '+'X'+' '+'factor'+' '+'product');
//   product.appendChild(txt);
//   document.getElementById('article').appendChild(task);
//   if(input.value == ""){
//     alert("Please enter a task!");
//   }else{
//     document.getElementById('article').appendChild(task);
//   }
//   input.value = "";
// });

setInterval(displayTime, 100);
