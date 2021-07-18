var greeting = document.querySelector("#greeting");
var time = document.querySelector("#time");

// var choice;
// if (choice==="%"){
//       num1=num1ch.value;
//       ans1.innerHTML="Here is your Answer!!";
//       document.getElementById("Answer1").innerHTML=percentage(num1);
//       for (i=1;i<41;i=i+1){
//               document.getElementById(i).innerHTML="";
//       }
//     }

// else if(choice==="//") {
//         num1=num1ch.value;
//         ans1.innerHTML="Here is your Answer!!";
//         document.getElementById("Answer1").innerHTML=sq_rt(num1);
//         for (i=1;i<41;i=i+1){
//                 document.getElementById(i).innerHTML="";
//         }
// }else if (choice==="***"){
//         ans1.innerHTML="";
//         document.getElementById("Answer1").innerHTML="";

//         //location.replace("tables.html");
//         num1=Number(num1ch.value);
//         ans1="Here is your" + " " + num1 + " " + "Table!!";

//         for (i=1;i<51;i=i+1){
//                 n=i;
//                 m=num1*i;
//                 document.getElementById("Answer1").innerHTML='Here is your'+ ' ' + num1 +' '+'Tables';
//                 document.getElementById(i).innerHTML=num1 + " " + "x" +" " + i +" " + "=" + "  " + m ;
//         }
// }else if (choice==="****"){
//         num1=Number(num1ch.value);
//         ans1.innerHTML="Here is your Answer!!";
//         document.getElementById("Answer1").innerHTML=Circle(num1);

// }
// function Circle(str){
//  result=" ";
//  num1=Number(num1ch.value);
//  const pi=3.141592653589793238462;
//  m=pi*num1*num1;
//  return m;
// }

// function sq_rt(str){
//   result=" ";
//   num1=Number(num1ch.value);
//   result=Math.sqrt(num1);
//   return result;
// }

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