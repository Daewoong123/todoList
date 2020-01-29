function setClock() {
  var date = new Date();
  var hour = addZero(date.getHours());
  var minute = addZero(date.getMinutes());
  var sec = addZero(date.getSeconds());
  var time = hour + ":" + minute + ":" + sec;
  var date_field = document.querySelector(".header .clock");
  date_field.textContent = time;
}

function addZero(num) {
  var result;
  if (num / 10 < 1) {
    result = "0" + num.toString();
  } else {
    result = num;
  }
  return result;
}

function init() {
  setClock();
  setInterval(setClock, 1000);
}

init();
