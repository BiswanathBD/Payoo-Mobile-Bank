// get element by id
function getByID(id) {
  return document.getElementById(id);
}

const loginBtn = getByID("login-btn");

// const validMobileNumber = "01628284848";
// const validPin = 4848;

// loginBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   const mobileNumber = getByID("mobile").value;
//   const pin = parseInt(getByID("pin").value);

//   if (mobileNumber === validMobileNumber && pin === validPin) {
//     window.location.href = "./home.html";
//   } else {
//     getByID("mobile").value = "";
//     getByID("pin").value = "";
//     alert("Mobile Number or Pin incorrect");
//   }
// });

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("login btn clicked");

  const mobileNumber = parseInt(getByID("mobile").value);
  const numStr = mobileNumber.toString();
  const pin = getByID("pin").value;

  if (numStr.length !== 10 || !numStr.startsWith("1")) {
    alert("Invalid Number");
  } else if (pin !== numStr.slice(-4)) {
    alert("Invalid Pin");
  } else {
    window.location.href = "./home.html";
  }
});
