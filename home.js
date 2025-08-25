function getById(id) {
  return document.getElementById(id);
}
// show balance
function showHide() {
  getById("balance").classList.remove("hidden");
  getById("hide").classList.add("hidden");

  setTimeout(() => {
    getById("balance").classList.add("hidden");
    getById("hide").classList.remove("hidden");
  }, 5000);
}
getById("show-balance").addEventListener("click", showHide);

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

let Balance = getById("current-balance").innerText;
let currentBalance = parseInt(Balance);

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

// get bonus card
const bonusCard = getById("bonus-card");
bonusCard.addEventListener("click", function () {
  hiddenToggle("bonus-section");
});

// transaction history feature
const latestTensParent = getById("history-parent");
const latestTens = getById("history-card");
function newLatestTrs(type, time, amount) {
  const latestTensClone = latestTens.cloneNode(true);
  latestTensClone.removeAttribute("id");

  latestTensClone.querySelector("#trns-type").innerText = type;
  latestTensClone.querySelector("#trns-time").innerText = time;
  latestTensClone.querySelector("#trns-amount").innerText = amount;

  const trnsIcon = latestTensClone.querySelector("#trns-icon");
  if (type == "Add Money") {
    trnsIcon.src = "./assets/wallet1.png";
  }

  if (type == "Add Money") {
    trnsIcon.src = "./assets/wallet1.png";
  } else if (type == "Cash Out") {
    trnsIcon.src = "./assets/send1.png";
  } else if (type == "Transfer Money") {
    trnsIcon.src = "./assets/money1.png";
  } else if (type == "Get Bonus") {
    trnsIcon.src = "./assets/bonus1.png";
  } else if (type == "Pay Bill") {
    trnsIcon.src = "./assets/purse1.png";
  }

  latestTensParent.appendChild(latestTensClone);
}

// add money feature
const addBtn = getById("add-money");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const selectBank = getById("bank").value;
  let acNumber = getById("ac-number").value.trim();
  const addAmount = getById("add-amount").value.trim();
  const addPin = getById("add-pin").value;

  if (selectBank === "") {
    alert("Select Bank");
  } else if (acNumber.length !== 11 || isNaN(Number(acNumber))) {
    alert("Invalid Account Number");
  } else if (addAmount < 0 || isNaN(Number(addAmount))) {
    alert("Invalid Amount");
  } else if (addPin !== commonPin) {
    alert("Invalid Amount");
  } else {
    currentBalance += parseInt(addAmount);
    getById("current-balance").innerText = currentBalance;
    showHide();
    // alert("Add Money Successful");
    hiddenToggle("latest-transaction");
    const time = new Date().toLocaleString();

    newLatestTrs("Add Money", time, addAmount);
  }
});
