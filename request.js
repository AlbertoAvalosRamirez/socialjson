//const { json } = require("stream/consumers");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    let menu = document.getElementById('users');
    let options =  "";
    for(let i = 0 ; i<json.length ;i++){
      options +=`
      <option value="${json[i].id}">${json[i].username}</option> "`

    }
    menu.innerHTML = options;
  });

let menusr =   document.getElementById("users");
menusr.addEventListener('change', (e) =>{
  fetch('https://jsonplaceholder.typicode.com/users/'+ menusr.value)
  .then(response => response.json())
  .then(json => {
    let content = " ";
  }
    )



});
