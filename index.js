// get element by id
function getByID(id) {
  return document.getElementById(id);
}
const validMobileNumber = "01628284848";
const validPin = 4848;
const loginBtn = getByID("login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = getByID("mobile").value;
  const pin = parseInt(getByID("pin").value);

  if (mobileNumber === validMobileNumber && pin === validPin) {
    window.location.href = "./home.html";
  } else {
    alert("Mobile Number or Pin incorrect");
  }
});
