function getById(id) {
  return document.getElementById(id);
}
getById("show-balnce").addEventListener("click", function () {
  getById("balance").classList.remove("hidden");
  getById("hide").classList.add("hidden");

  setTimeout(() => {
      getById("balance").classList.add("hidden");
  getById("hide").classList.remove("hidden");
  }, 5000)
});
