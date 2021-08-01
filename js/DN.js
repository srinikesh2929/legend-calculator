//Used variable declaration
var num;
var num1;
var num2;
var i;
var choice;
var m;
var num1ch=document.getElementById("input1");
var num2ch=document.getElementById("input2");
var ans1= document.getElementById("Answer");
var ans2= document.getElementById("Answer1");
var tb=document.getElementById("__");
var hell;
var hell1=document.createAttribute("style");
var y;
var ad1;
var ad2;
var nums;
var nums_s;
var result = '';
var greeting = document.getElementById('greeting');


//Reset button function declaration
function reset(){
        ans1.innerHTML="";
        document.getElementById("Answer1").innerHTML="";
        num1ch.value="";
        for (i=1;i<51;i=i+1){
                document.getElementById(i).innerHTML="";
        }
}

//Opertor function declaration..
function simplify(str) {
  if (num1ch.value.includes('///')){
    result = '';
    var data = str.split('///');
    var numOne = Number(data[0]);
    var numTwo = Number(data[1]);
    for (var i = Math.max(numOne, numTwo); i > 1; i--) {
    if ((numOne % i == 0) && (numTwo % i == 0)) {
        numOne /= i;
        numTwo /= i;
    }
    }
    if (numTwo === 1) {
    result = numOne.toString();
    } else {
    result = numOne.toString() + '/' + numTwo.toString();
    }
    ans1.innerHTML="Here is your Answer!!";
    ans2.innerHTML=result;
    for (i=1;i<41;i=i+1){
      document.getElementById(i).innerHTML="";
    }
  }else {
    return ;
  }
}

function rtop(str){
  if (num1ch.value.includes('xx')) {
    result=" ";
    data=str.split('xx');
    num1=Number(data[0]);
    num2=Number(data[1]);
    result=Math.pow(num1,num2);
    ans1.innerHTML="Here is your Answer!!";
    ans2.innerHTML=result;
    for (i=1;i<41;i=i+1){
      document.getElementById(i).innerHTML="";
    }
  }else {
    return ;
  }
 }


function add(str){
  if (num1ch.value.includes('+')) {
    result=" ";
    data=str.split('+');
    num1=Number(data[0]);
    num2=Number(data[1]);
    result=num1+num2;
    ans1.innerHTML="Here is your Answer!!";
    ans2.innerHTML=result;
    for (i=1;i<41;i=i+1){
      document.getElementById(i).innerHTML="";
    }
  }else {
    return ;
  }
 }

function minus(str){
  if (num1ch.value.includes('-')) {
    result=" ";
    data=str.split('-');
    num1=Number(data[0]);
    num2=Number(data[1]);
    result=num1-num2;
    ans1.innerHTML="Here is your Answer!!";
    ans2.innerHTML=result;
    for (i=1;i<41;i=i+1){
      document.getElementById(i).innerHTML="";
    }
  }else {
    return ;
  }
 }

function mult(str){
  if (num1ch.value.includes('x')) {
    result=" ";
    data=str.split('x');
    num1=Number(data[0]);
    num2=Number(data[1]);
    result=num1*num2;
    ans1.innerHTML="Here is your Answer!!";
    ans2.innerHTML=result;
    for (i=1;i<41;i=i+1){
      document.getElementById(i).innerHTML="";
    }
  }else {
    return ;
  }
}

function divi(str){
  if (num1ch.value.includes('/')) {
    result=" ";
    data=str.split('/');
    num1=Number(data[0]);
    num2=Number(data[1]);
    result=num1/num2;
    ans1.innerHTML="Here is your Answer!!";
    ans2.innerHTML=result;
    for (i=1;i<41;i=i+1){
     document.getElementById(i).innerHTML="";
    }
  }else {
    return ;
  }
}

function percentage(str){
  if (num1ch.value.includes('//')) {
    result=" ";
    data=str.split('//');
    num1=Number(data[0]);
    num2=Number(data[1]);
    result=(num1 / num2)*100
    ans1.innerHTML="Here is your Answer!!";
    ans2.innerHTML=result;
    for (i=1;i<41;i=i+1){
     document.getElementById(i).innerHTML="";
    }
  }else {
    return ;
  }
 }
//main Calculator script
function getChoice(){
        add(num1ch.value);
        minus(num1ch.value);
        mult(num1ch.value);
        divi(num1ch.value);
        percentage(num1ch.value);
        rtop(num1ch.value);
        simplify(num1ch.value);
}

//Time
function displayTime(){
        var date= new Date();
        var hour = date.getHours();
        var minutes= date.getMinutes();
        var seconds = date.getSeconds();
        var time = hour + " : " + minutes + " : " + seconds;
        document.getElementById("time").innerHTML="Time " + "    "+time;
        

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
//Checking functions
setInterval(displayTime,100);



