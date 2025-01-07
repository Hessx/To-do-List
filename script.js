const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask() {
  if (inputbox.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
  }
}
