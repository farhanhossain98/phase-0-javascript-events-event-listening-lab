

const input = document.getElementById('button');
  console.log("input",input);
function addingEventListener() {
  
  input.addEventListener("click",function(event){
    alert('I was clicked!')
  });
}

//input.addEventListener("click",addingEventListener);