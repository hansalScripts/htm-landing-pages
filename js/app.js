const loader = document.getElementById("loader");

setTimeout(function () {
  document.onload = loader.style.display = "none";
}, 1000);
