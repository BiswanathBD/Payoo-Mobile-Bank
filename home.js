function getById(id) {
  return document.getElementById(id);
}
getById("show-balance").addEventListener("click", function () {
  getById("balance").classList.remove("hidden");
  getById("hide").classList.add("hidden");

  setTimeout(() => {
    getById("balance").classList.add("hidden");
    getById("hide").classList.remove("hidden");
  }, 5000);
});
getById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// common features
const commonPin = "4848";

const sections = document.getElementsByClassName("dynamic-section");


function hiddenToggle(id) {
  for (let section of sections) {
    section.classList.add("hidden");
  }
  getById(id).classList.remove("hidden");
}
// option card section
// add money card
const addCard = getById("add-card");
addCard.addEventListener("click", function () {
  hiddenToggle("add-money-section");
});

// cash-out card
const outCard = getById("out-card");
outCard.addEventListener("click", function () {
  hiddenToggle("cash-out-section");
});

// transfer card
const transferCard = getById("transfer-card");
transferCard.addEventListener("click", function () {
  hiddenToggle("transfer-section");
});


// add money feature
