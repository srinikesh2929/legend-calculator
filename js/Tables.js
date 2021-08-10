
var greeting = document.getElementById('greeting');
var expInput = document.getElementById('expInput');
//var body = document.getElementById('body');
var submit = document.getElementById('submit');
var click_count = 0;
var article = document.getElementById('article');


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



submit.onclick = async function () {
  click_count += 1;
  if (expInput.value != '') {
    for (var i = 1; i <= 11; i = i +1) {
      var product = expInput.value * i;
      var para = document.createElement('p');
      para.innerHTML = await expInput.value+ ' '+ 'X' +i+' ' + '=' +product;
      para.classList.add('para');
      para.id = 'paragraph';
      article.appendChild(para);
    };
  };
};

setInterval(displayTime, 100);
