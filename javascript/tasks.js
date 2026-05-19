
// ============================
//  TASK DASHBOARD PRO
// ============================

const taskInput = document.querySelector("#taskInput");
const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskCounter = document.querySelector("#taskCounter");

let taskArray = [];

// Actualizar contador
function updateCounter() {

    if (taskArray.length == 0) {

        taskCounter.textContent =
            "No hay tareas";

    } else if (taskArray.length == 1) {

        taskCounter.textContent =
            "1 tarea";

    } else {

    taskCounter.textContent =
        `${taskArray.length} tareas`;

    }
}

// Guardar localStorage
function saveTasks() {

    localStorage.setItem(
        "taskDashboard",
        JSON.stringify(taskArray)
    );

}

// Renderizar tareas
function renderTask() {

    taskList.innerHTML = "";

    taskArray.forEach(function(task, index) {

        const div = document.createElement("div");

        div.classList.add("task-item", "glass-card");

        if (task.completed) {
            div.classList.add("completed");
        }

        div.innerHTML =  `
            <span>${task.text}</span>

            <div class="task-actions">

                <button onclick="completeTask(${index})">
                    ✅
                </button>

                <button onclick="deleteTask(${index})">
                    ❌
                </button>

            </div>
        `;

        taskList.appendChild(div);

    });

    updateCounter();

}

// Agregar tarea
taskBtn.addEventListener("click", function() {

    const text = taskInput.value.trim();

    if (text == "") return;

    taskArray.push({
        text: text,
        completed: false
    });

    saveTasks();
    renderTask();

    taskInput.value = "";

});

taskInput.addEventListener("keypress", function(e) {

    if (e.key == "Enter") {
        taskBtn.click();
    }

})

// Completar tarea 
function completeTask(index) {

    taskArray[index].completed =
        !taskArray[index].completed;

    saveTasks();
    renderTask();

}

// Eliminar tarea
function deleteTask(index) {

    taskArray.splice(index, 1);

    saveTasks();
    renderTask();

}

// Cargar tareas guardadas
const savedTasks =
    localStorage.getItem("taskDashboard");

if (savedTasks) {

    taskArray = JSON.parse(savedTasks);

    renderTask();

}
