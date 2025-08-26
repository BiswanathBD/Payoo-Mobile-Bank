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

// current Balance
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

// bill pay
const billCard = getById("bill-card");
billCard.addEventListener("click", function () {
  hiddenToggle("bill-section");
});

// transaction card
const transactionCard = getById("trns-card");
transactionCard.addEventListener("click", function () {
  hiddenToggle("transaction-section");
});

// latest transaction feature
const latestTrnsParent = getById("history-parent");
const latestTrns = getById("history-card");
function newLatestTrs(type, time, amount) {
  const latestTrnsClone = latestTrns.cloneNode(true);
  latestTrnsClone.removeAttribute("id");

  latestTrnsClone.querySelector("#trns-type").innerText = type;
  latestTrnsClone.querySelector("#trns-time").innerText = time;
  latestTrnsClone.querySelector("#trns-amount").innerText = amount;

  const latestTrnsIcon = latestTrnsClone.querySelector("#trns-icon");

  if (type == "Add Money") {
    latestTrnsIcon.src = "./assets/wallet1.png";
  } else if (type == "Cash Out") {
    latestTrnsIcon.src = "./assets/send1.png";
  } else if (type == "Transfer Money") {
    latestTrnsIcon.src = "./assets/money1.png";
  } else if (type == "Get Bonus") {
    latestTrnsIcon.src = "./assets/bonus1.png";
  } else if (type == "Pay Bill") {
    latestTrnsIcon.src = "./assets/purse1.png";
  }

  latestTrnsParent.appendChild(latestTrnsClone);
}

// transactions history feature
const TrnsParent = getById("transaction-parent");
const trns = getById("transaction-card");

function newTrns(type, time, amount) {
  const trnsClone = trns.cloneNode(true);
  trnsClone.removeAttribute("id");

  trnsClone.querySelector("#transaction-type").innerText = type;
  trnsClone.querySelector("#transaction-time").innerText = time;
  trnsClone.querySelector("#transaction-amount").innerText = amount;

  const trnsIcon = trnsClone.querySelector("#transaction-icon");

  if (type === "Add Money") {
    trnsIcon.src = "./assets/wallet1.png";
  } else if (type === "Cash Out") {
    trnsIcon.src = "./assets/send1.png";
  } else if (type === "Transfer Money") {
    trnsIcon.src = "./assets/money1.png";
  } else if (type === "Get Bonus") {
    trnsIcon.src = "./assets/bonus1.png";
  } else if (type === "Pay Bill") {
    trnsIcon.src = "./assets/purse1.png";
  }

  TrnsParent.appendChild(trnsClone);
}

// add money feature
const addBtn = getById("add-money");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const selectBank = getById("bank").value;
  const acNumber = getById("ac-number").value.trim();
  const addAmount = getById("add-amount").value.trim();
  const addPin = getById("add-pin").value;

  if (selectBank === "") {
    alert("Select Bank");
  } else if (acNumber.length !== 11 || isNaN(Number(acNumber))) {
    alert("Invalid Account Number");
  } else if (addAmount < 0 || isNaN(Number(addAmount))) {
    alert("Invalid Amount");
  } else if (addPin !== commonPin) {
    alert("Wrong Pin (Use 4848)");
  } else {
    currentBalance += parseInt(addAmount);
    getById("current-balance").innerText = currentBalance;
    showHide();
    alert("Add Money Successful");
    hiddenToggle("latest-transaction");
    const time = new Date().toLocaleString();

    newLatestTrs("Add Money", time, addAmount);
    newTrns("Add Money", time, addAmount);

    getById("bank").value = "";
    getById("ac-number").value = "";
    getById("add-amount").value = "";
  }
  getById("add-pin").value = "";
});

// cash out features
const outBtn = getById("out-btn");
outBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const agentNumber = getById("agent-number").value.trim();
  const outAmount = getById("out-amount").value.trim();
  const outPin = getById("out-pin").value;

  if (agentNumber.length !== 11 || isNaN(Number(agentNumber))) {
    alert("Agent Not Exit");
  } else if (outAmount <= 0 || outAmount > currentBalance) {
    alert("Invalid Amount");
  } else if (outPin !== commonPin) {
    alert("Wrong Pin (Use 4848)");
  } else {
    currentBalance -= parseInt(outAmount);
    getById("current-balance").innerText = currentBalance;
    showHide();
    alert("Cash Out Successful");
    hiddenToggle("latest-transaction");
    const time = new Date().toLocaleString();

    newLatestTrs("Cash Out", time, outAmount);
    newTrns("Cash Out", time, outAmount);

    getById("agent-number").value = "";
    getById("out-amount").value = "";
  }
  getById("out-pin").value = "";
});

// transfer money feature
const transferBtn = getById("transfer-btn");
transferBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const userNumber = getById("user-number").value.trim();
  const transferAmount = getById("transfer-amount").value.trim();
  const transferPin = getById("transfer-pin").value;

  if (
    userNumber.length !== 11 ||
    isNaN(Number(userNumber)) ||
    !userNumber.startsWith("01")
  ) {
    alert("Invalid Number (Enter valid Bangladeshi Number)");
  } else if (transferAmount <= 0 || transferAmount > currentBalance) {
    alert("Invalid Amount");
  } else if (transferPin !== commonPin) {
    alert("Wrong Pin (Use 4848)");
  } else {
    currentBalance -= parseInt(transferAmount);
    getById("current-balance").innerText = currentBalance;
    showHide();
    alert("Transfer Successful");
    hiddenToggle("latest-transaction");
    const time = new Date().toLocaleString();

    newLatestTrs("Transfer Money", time, transferAmount);
    newTrns("Transfer Money", time, transferAmount);

    getById("user-number").value = "";
    getById("transfer-amount").value = "";
  }
  getById("transfer-pin").value = "";
});
