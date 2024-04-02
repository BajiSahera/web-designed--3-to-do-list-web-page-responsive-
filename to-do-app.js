// script.js
function addTask() {
    var taskValue = document.getElementById('newTask').value;
    if (taskValue) {
        var li = document.createElement('li');
        li.textContent = taskValue;
        li.onclick = function() {
            this.classList.toggle('completed');
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = '-';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById('taskList').appendChild(li);
        document.getElementById('newTask').value = '';
    } else {
        alert('Please enter a task.');
    }
}
