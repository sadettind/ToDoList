let addTaskBtn = document.getElementById("add-task-button");
let inputTask = document.getElementById("input-task");
let taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
    let task = inputTask.value;
    if (!task) {
        return;
    }

    let li = document.createElement("li");
    li.innerHTML =
        '<input type="checkbox" class="check" /><span class="task">' +
        task +
        '</span><button class="delete-btn"></button>';

    taskList.appendChild(li);
    addDelete();
    inputTask.value = "";
});

function addDelete() {
    let delBtns = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < delBtns.length; i++) {
        delBtns[i].addEventListener("click", function () {
            let node = delBtns[i].parentNode;
            taskList.removeChild(node);
        });
    }
}

//addDelete();