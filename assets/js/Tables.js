//this is a website file
const greeting = document.querySelector('#greeting');
const expInput = document.getElementById('expInput');
//var body = document.getElementById('body' );
const submit = document.getElementById('submit');
const form = document.querySelector('form');  
const article = document.querySelector('#article');
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

init = () => {
  for (let i = 0; i < 10; i++) {
    // const element = array[index];
    var para = document.createElement("p");
    para.classList.add("para");
    // para.innerHTML = "This is a paragraph.";
    article.appendChild(para);
    console.log(document.getElementsByClassName("para"));
  }
}

tables = () => {
  for (let i = 0; i < 10; i++) {
    // const element = array[index];
    var input = expInput.value;
    var paras = document.getElementsByClassName("para");
    paras.innerHTML=`{input} X {i} = {input*i}`
  }
}
