/* document.createElement("button");
let btn=document.querySelector("button");
btn.innerText="submit";
btn.addEventListener("submit",function(event){
    event.preventDefault();
    btn.backgroundColor="green";

});
 */
/* document.createElement("h1");
let h1=document.querySelector("h1");
h1.innerText("ToDo List");
let body=document.querySelector("body");
body.appendChild(h1);
document.createElement("form");
let form=document.querySelector("form")
document.createElement("input");
let input=document.querySelector("input");
document.createElement("button");
let btn=document.querySelector("button");
button.innerText("submit");
form.appendChild("input");
form.appendChild("btn");
body.appendChild("form"); */
/* let body = document.querySelector("body");

let h1 = document.createElement("h1");
h1.innerText = "ToDo List";
body.appendChild(h1);

let form = document.createElement("form");

let input = document.createElement("input");

let btn = document.createElement("button");
btn.innerText = "Submit";

form.appendChild(input);
form.appendChild(btn);

body.appendChild(form);

let ul = document.createElement("ul");
body.appendChild(ul);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let li = document.createElement("li");

    li.innerText = input.value;
    let dbtn=document.createElement("button");
    dbtn.innerText="Delete";
    li.appendChild(dbtn);

    ul.appendChild(li);
    input.value="";
    ul.addEventListener("click",function(){
   ul.removeChild(li);
});
    
});


 */