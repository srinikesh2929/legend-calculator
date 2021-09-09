var greeting = document.querySelector("#greeting");
var time = document.querySelector("#time");
var result = 0;

function Circle(str) {
 num1=Number(num1ch.value);
 const pi=3.141592653589793238462;
 result=pi*num1*num1;
 return result;
}

function sq_rt(str){
  num1=Number(num1ch.value);
  result=Math.sqrt(num1);
  return result;
}

function displayTime(){
        var date= new Date();
        var hour = date.getHours();
        var minutes= date.getMinutes();
        var seconds = date.getSeconds();
        var time_value = hour + " : " + minutes + " : " + seconds;
        time.innerHTML = "Time " + "    " + time_value;
        
        if ( hour<12){
          greeting.innerHTML="Good Morning!!";
        }else if(hour<16){
          greeting.innerHTML="Good Afternoon!!";
        }else if (hour<21){
          greeting.innerHTML="Good Evening!!";
        }else if (hour<22){
          greeting.innerHTML="Good Night!!";
        }else{
          greeting.innerHTML="Go to Sleep（︶^︶）";
        }
}
setInterval(displayTime,100);