const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");
const emailInput = document.getElementById("email");
const studentIdInput = document.getElementById("studentId");
const phoneInput = document.getElementById("phone");
const courseSelect = document.getElementById("course");
const feeInput = document.getElementById("fee");
const agreeCheckbox = document.getElementById("agree");

const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

/* INPUT CONTROL */
nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, "");
});

phoneInput.addEventListener("input", () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");
});

/* COURSE FEE */
courseSelect.addEventListener("change", () => {
  const option = courseSelect.options[courseSelect.selectedIndex];
  const fee = option.getAttribute("data-fee");
  feeInput.value = fee ? "$" + fee : "";
});

/* SUBMIT */
form.addEventListener("submit", function (e) {
  e.preventDefault();

  errorMsg.textContent = "";
  successMsg.textContent = "";
  nameError.textContent = "";

  document.querySelectorAll("input, select")
    .forEach(el => el.classList.remove("error"));

  if (nameInput.value.length < 3 || nameInput.value.length > 15) {
    nameInput.classList.add("error");
    nameError.textContent = "Name must be 3–15 letters";
    return;
  }

  if (!emailInput.value) {
    emailInput.classList.add("error");
    errorMsg.textContent = "Email is required";
    return;
  }

  if (studentIdInput.value.length !== 8) {
    studentIdInput.classList.add("error");
    errorMsg.textContent = "Student ID must be exactly 8 characters";
    return;
  }

  if (phoneInput.value.length < 9) {
    phoneInput.classList.add("error");
    errorMsg.textContent = "Invalid phone number";
    return;
  }

  if (!courseSelect.value) {
    courseSelect.classList.add("error");
    errorMsg.textContent = "Please select a course";
    return;
  }

  if (!agreeCheckbox.checked) {
    errorMsg.textContent = "You must agree to the terms & conditions";
    return;
  }

  successMsg.innerHTML = `
    🎉 Registration Successful!<br>
    Welcome to <b>Al-Nour Technology Institute</b> 🚀
  `;

  form.reset();
  feeInput.value = "";
});