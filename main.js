let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let AraayOfTask = [];

//Add atsk
submit.onclick = function () {
if (input.value !== "") {

    addTascToArray(input.value)
    input.value = ""; //empty
}
    }

function addTascToArray(TaskText) {
    const task = {
        id: Date.now(),
        title:TaskText,
        completed:false, 
    };
    AraayOfTask.push(task);
AddElementsToPageFrom(AraayOfTask)
}

function AddElementsToPageFrom(AraayOfTask) {
    tasksDiv = "";
    AraayOfTask.forEach(task => {
        let div = document.createElement("div");
        div.className ="task"
        div.setAttribute("date-id",task.id);
        div.appendChild(document.createTextNode(task.title))
        console.log(div);
    });
    
}
