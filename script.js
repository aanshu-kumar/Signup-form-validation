let email="";
let password="";

function checkmail() {
  let emailInput = document.querySelector(".email");
  let msg = document.getElementsByClassName("err-msg")[0];
  let regax = /@.*\./;
  if (regax.test(emailInput.value) && (emailInput.value.length>=3)) {
    msg.style.display = "none";
  } else {
    msg.style.display = "block";
  }
  checkSuccess();
}

function checkpassword() {
  let psdInput = document.querySelector(".password");
  let msg = document.getElementsByClassName("err-msg")[1];
  if (psdInput.value.length >= 8) {
    msg.style.display = "none";
  } else {
    msg.style.display = "block";
  }
  checkSuccess();
}

function checkSuccess() {
  let successMsg = document.getElementsByClassName("success-msg")[0];
  let emailInput = document.querySelector(".email");
  let psdInput = document.querySelector(".password");
  let regax = /@.*\./;
  if (regax.test(emailInput.value) && psdInput.value.length >= 8) {
    successMsg.style.display = "block";
  }
  email=emailInput.value;
  password=psdInput.value;
}

function Signup() {
  if(confirm("Are you sure you want to submit?"))
  {
    alert("You are Successfully Signed up!!");
  }
  else
  {
    alert("You have canceled the submission");
  }
}