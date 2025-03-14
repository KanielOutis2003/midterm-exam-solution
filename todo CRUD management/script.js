let tasks = [];


function addTask() {
    const name = document.getElementById(`taskName${taskNumber}`).value;
const description = document.getElementById(`taskDescription${taskNumber}`).value;


    if (!name || !description) {
        alert("Both task name and description are required.");
        return;
    }

    const taskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = {
        id: taskId,
        name: name,
        description: description
    };

    tasks.push(newTask);
    clearForm();
    renderTasks();
}


function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span><strong>${task.name}</strong>: ${task.description}</span>
            <div>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}


function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        document.getElementById("taskName").value = task.name;
        document.getElementById("taskDescription").value = task.description;

       
        const addButton = document.querySelector("button");
        addButton.textContent = "Update Task";
        addButton.onclick = function() { updateTask(id); };
    }
}


function updateTask(id) {
    const name = document.getElementById("taskName").value;
    const description = document.getElementById("taskDescription").value;

    if (!name || !description) {
        alert("Both task name and description are required.");
        return;
    }

    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].name = name;
        tasks[taskIndex].description = description;
    }

    clearForm();
    renderTasks();

    
    const addButton = document.querySelector("button");
    addButton.textContent = "Add Task";
    addButton.onclick = addTask;
}


function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}


function clearForm() {
    document.getElementById("taskName").value = '';
    document.getElementById("taskDescription").value = '';
}
