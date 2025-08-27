// get element by id
function getByID(id) {
  return document.getElementById(id);
}

const loginBtn = getByID("login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumber = parseInt(getByID("mobile").value);
  const numStr = mobileNumber.toString();
  const pin = getByID("pin").value;

  if (numStr.length !== 10 || !numStr.startsWith("1")) {
    alert("Invalid Number (Enter valid Bangladeshi Number)");
  } else if (pin !== numStr.slice(-4)) {
    alert("Invalid Pin (Enter last 4 digit of your Number)");
  } else {
    window.location.href = "./home.html";
    alert("Remember Your Pin " + "(" + pin + ")");
    localStorage.setItem("userPin", pin);
  }
});

const numValue = getByID("mobile");
const flag = getByID("icon-flag");

const pinValue = getByID(pin);
const lock = getByID("icon-lock");

numValue.addEventListener("blur", () => {
  if (numValue.value.length > 0) {
    flag.classList.replace("opacity-50", "opacity-100");
  } else {
    flag.classList.replace("opacity-100", "opacity-50");
  }
});

pinValue.addEventListener("blur", () => {
  if (pinValue.value.length > 0) {
    lock.classList.replace("opacity-50", "opacity-100");
  } else {
    lock.classList.replace("opacity-100", "opacity-50");
  }
});
