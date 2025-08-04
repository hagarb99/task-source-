// var inputBox = document.getElementById("input_box");
// var listnot = document.getElementById("list-not");
// var li = document.createElement("li");

// //name
function savename(){
    window.localStorage.setItem("name", document.getElementById("input_name").value);
    document.getElementById("todo").innerText=window.localStorage.getItem("name")+"'s To-Do List";
}
//task
// var listone = document.getElementById("list-not");
// function addTask() {
//     var text = document.getElementById("input_box");
//     var task = text.value.trim();

//     if (!task) {
//         alert("please write a task");
//         return;
//     }
//     var li = document.createElement("li");
//     li.innerHTML = `
//         <label>
//             <input type="checkbox">
//             <span id="taskD">${task}</span>
//         </label>
//         <span class="delete-btn" style="margin-left: 10px; color: red; cursor: pointer;">Delete</span>
//     `;
//     li.querySelector("span").onclick = function () {
//         li.classList.toggle("checked");
//     };
//     li.querySelector(".delete-btn").onclick = function () {
//         remove(this);
//     };
//     listone.appendChild(li);
//     text.value = "";
// }
// function remove(span) {
//     span.parentElement.remove();
// }

// li.setAttribute("draggable","true");
// li.ondragstart = function(event){
//     event.dataTransfer.setData("id",event.target.id);
//     listone.appendChild(span);
//     text.value = "";
// }

   

// function allowDrop(event){
//     event.preventDefault();
// }

// function drop(event){
//     event.preventDefault();
//     var data=event.dataTransfer.getData("id");
//     document.getElementById(event.target.id).appendChild(document.getElementById(data));
// }
var btn = document.getElementById("input-button");
var inp = document.getElementById("input_box");
var boxes=document.querySelectorAll(".box");

btn.onclick = function () {
    if (inp.value !== '') {
        boxes[0].innerHTML += `
            <p class="item" draggable="true">${inp.value}</p> 
        `;
        inp.value = '';
    }
};
