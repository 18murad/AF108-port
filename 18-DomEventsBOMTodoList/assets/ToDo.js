let todos = [];

function addTodo() {
  let input = document.getElementById("todoInput");
  let value = input.value.trim();

  if (!value) {
    alert("Boş todo əlavə etmək olmaz!");
    return;
  }

  todos.push({ text: value, done: false });
  input.value = "";
  renderTodos();
}

function markAsDone(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

function editTodo(index) {
  let newText = prompt("Yeni metn:", todos[index].text);
  if (newText !== null && newText.trim() !== "") {
    todos[index].text = newText.trim();
    renderTodos();
  }
}

function deleteTodo(index) {
  if (todos[index].done) { 
    todos.splice(index, 1);
    renderTodos();
  } else {
    alert("Yalniz tamamlanmis todolar siline biler!");
  }
}
function clearAll() {
  if (confirm("Hamsi silinsin?")) {
    todos = [];
    renderTodos();
  }
}

function renderTodos() {
  let list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.className = todo.done ? "done" : "not-done";

    li.innerHTML = `
      <span class="number">${index + 1}.</span>
      <span class="todo-text">${todo.text}</span>
      <button onclick="markAsDone(${index})">${todo.done ? "Geri al" : "Tamamla"}</button>
      <button onclick="editTodo(${index})">Edit</button>
      <button onclick="deleteTodo(${index})">Sil</button>
    `;

    list.appendChild(li);
  });
}