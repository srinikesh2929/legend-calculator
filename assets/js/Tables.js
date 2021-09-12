//this is a website file
const greeting = document.querySelector('#greeting');
const expInput = document.getElementById('expInput');
//var body = document.getElementById('body' );
const submit = document.getElementById('submit');
const form = document.querySelector('form');  
const article = document.querySelector('#article');
// var article = document.getElementById('article');
const timeElement = document.getElementById("time")



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

init = () => {
  // var text ='hi';
  for (let i = 0; i < 10; i++) {
    // const element = array[index];
    var para = document.createElement("p");
    para.classList.add("para");
    // para.innerHTML = text;
    article.appendChild(para);
    // expInput.disabled = false;
    // console.log(document.getElementsByClassName("para")[0]);
  }
}

submit.onclick = () => {
  var object = document.getElementsByClassName("para");
  var text = expInput.value;
  // console.log('here it starts')
  for (let i in object) {
    // object[i].innerHTML = 'hello';
    // object[0].innerHTML="shutup";
    // object[9].innerHTML="You are a good boy";
    product = i * text;
    object[i].innerHTML = `${text} X ${i} = ${product}`
  }
  // console.log('ends here')
    
};
console.log('This project is Working!! ⚡⚡⚡')