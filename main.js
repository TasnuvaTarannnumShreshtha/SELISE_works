document.getElementById("btn").addEventListener("click", newTask);

function newTask() {
  const task = document.getElementById("task_input");
  const inputTask = task.value;

  var li = document.createElement("li");
  var t = document.createTextNode(inputTask);
  li.appendChild(t);
  document.getElementById("u_list").appendChild(li);
}

// btn.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.innerText = ul.value;
//   ul.appendChild(li);

// const para = document.getElementById("output1");
// para.innerText = task;
// console.log(task);
// console.log(li);
// });
