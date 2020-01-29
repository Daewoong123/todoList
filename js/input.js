const input_field = document.querySelector(".input-field");
const input = document.querySelector(".input-field .input-area");
const add_button = document.querySelector(".add-button");

function onFocus() {
  input_field.style.boxShadow = "0 1px 6px 0 rgba(32, 33, 36, 0.28)";
}
function onFocusOut() {
  input_field.style.boxShadow = "none";
}
function getId(date) {
  var id =
    date.getMonth().toString() +
    date.getDate().toString() +
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString() +
    date.getMilliseconds().toString();
  return id;
}

function addTodo() {
  var date = new Date();
  var id = getId(date);
  var todo_item_text = document.createElement("span");
  todo_item_text.className = "todo-text";
  var text = input.value;
  if (text == "") {
    input.value = null;
    input.focus();
    return;
  }
  var text_node = document.createTextNode(text);
  todo_item_text.appendChild(text_node);
  var todo_item = document.createElement("li");
  todo_item.className = "todo-item";
  todo_item.id = id;
  var todo_list = document.querySelector(".todo-list");
  var square_button = document.createElement("i");
  square_button.className = "far fa-square square-button";
  var trash_button = document.createElement("i");
  trash_button.className = "far fa-trash-alt trash-button";

  todo_item.appendChild(square_button);
  todo_item.appendChild(todo_item_text);
  todo_item.appendChild(trash_button);
  todo_list.appendChild(todo_item);
  input.value = null;
  input.focus();
}

function onEnterKeyDown() {
  if (event.keyCode == 13) {
    addTodo();
  }
}

input.addEventListener("focus", onFocus);
input.addEventListener("focusout", onFocusOut);
input.addEventListener("keydown", onEnterKeyDown);
add_button.addEventListener("click", addTodo);

input.focus();
