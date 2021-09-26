//this is a website file
const greeting = document.querySelector('#greeting');
const expInput = document.getElementById('expInput');
//var body = document.getElementById('body' );
const submit = document.getElementById('submit');
const form = document.querySelector('form');  
const article = document.querySelector('#article');
// var article = document.getElementById('article');
const timeElement = document.getElementById("time")
const numProducts = document.getElementById('numProducts');

function displayTime() {
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var time = hour + " : " + minutes + " : " + seconds;
  timeElement.innerHTML = `Time is ${time}`;

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


submit.onclick = () => {
  const limit = Number(numProducts.value);
  for (let i = 1; i = limit; i++) {
    var para = document.createElement("p");
    para.classList.add("para");
    article.appendChild(para);
  }
  var object = document.getElementsByClassName("para");
  var text = expInput.value;
  for (let j in object) {
    product = j * text;
    object[j].innerHTML = `${text} X ${j} = ${product}`
  }

};
console.log('This project is Working!! ⚡⚡⚡')