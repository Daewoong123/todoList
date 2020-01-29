$(document).on("click", ".square-button", function() {
  suqare_button_clicked(this);
});

$(document).on("click", ".check-square-button", function() {
  check_suqare_button_clicked(this);
});
$(document).on("click", ".trash-button", function() {
  trash_button_clicked(this);
});
function suqare_button_clicked(button) {
  button.className = "far fa-check-square check-square-button";
  var text = button.nextSibling;
  text.style.textDecoration = "line-through";
}
function check_suqare_button_clicked(button) {
  button.className = "far fa-square square-button";
  var text = button.nextSibling;
  text.style.textDecoration = "none";
}
function trash_button_clicked(button) {
  var li = button.parentNode;
  var ui = li.parentNode;
  ui.removeChild(li);
}
