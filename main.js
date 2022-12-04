document.getElementById("btn").addEventListener("click", newTask);

console.log("Working");

function newTask() {
  const task = document.getElementById("task_input");
  const inputTask = task.value;
  var li = document.createElement("li");
  var t = document.createTextNode(inputTask);
  li.appendChild(t);
  document.getElementById("u_list").appendChild(li);
}
