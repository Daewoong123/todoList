var save_button = document.querySelector(".save-button");
var load_button = document.querySelector(".load-button");

function save() {
  var name = document.querySelector(".save .user-name").value;
  if (name == "") {
    alert("이름을 입력하세요");
    document.querySelector(".save .user-name").focus();
    return;
  }
  var save_list = $(".todo-list").html();
  if (save_list == "") {
    alert("저장할 것이 없습니다.");
    document.querySelector(".save .user-name").focus();
    return;
  } else {
    alert("저장 완료");
    document.querySelector(".save .user-name").value = null;
    document.querySelector(".input-area").focus();
  }
  localStorage.setItem(name, save_list);
}
function load() {
  var name = document.querySelector(".load .user-name").value;
  var load_list = localStorage.getItem(name);
  if (load_list == null || load_list == "") {
    alert("저장된 정보가 없습니다.");
    document.querySelector(".load .user-name").value = null;
    document.querySelector(".load .user-name").focus();
    return;
  }
  $(".todo-list").empty();
  $(".todo-list").append(load_list);
  document.querySelector(".load .user-name").value = null;
  document.querySelector(".input-area").focus();
}

function onEnterKeyDown_save() {
  if (event.keyCode == 13) {
    save();
  }
}
function onEnterKeyDown_load() {
  if (event.keyCode == 13) {
    load();
  }
}

save_button.addEventListener("click", save);
load_button.addEventListener("click", load);
document
  .querySelector(".save .user-name")
  .addEventListener("keydown", onEnterKeyDown_save);
document
  .querySelector(".load .user-name")
  .addEventListener("keydown", onEnterKeyDown_load);
