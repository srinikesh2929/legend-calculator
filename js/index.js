var submit = document.getElementById('submit');

function something(){ 
  var expInput = document.getElementById("expInput");
  var product = document.createElement('p');
  var txt = document.createTextNode(expInput.value +' '+'X'+' '+'factor'+' '+'product');
  product.appendChild(txt);
  document.getElementById('article').appendChild(task);
  if(input.value == ""){
    alert("Please enter a task!");
  }else{
    document.getElementById('article').appendChild(task);
  }
  input.value = "";
};
