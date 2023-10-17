const modal = document.querySelector(".login-modal");
const registerModal = document.querySelector(".register-modal");

// Event Delegation for Dynamically Loaded Content
document.body.addEventListener("click", function (event) {
  // For the login button
  if (event.target.matches(".login-btn")) {
    modal.classList.remove("hidden");
  }

  // For the close modal button
  if (event.target.matches(".close-modal")) {
    modal.classList.add("hidden");
  }

  // For the sign-up button
  if (event.target.matches(".sign--up-btn")) {
    registerModal.classList.remove("hidden");
  }

  // For the close register modal button
  if (event.target.matches(".close-modal-reg")) {
    registerModal.classList.add("hidden");
  }
});

const loginBtn = document.querySelector(".login-btn");
const closeModal = document.querySelector(".close-modal");
const signUp = document.querySelector(".sign--up-btn");
const closeModalReg = document.querySelector(".close-modal-reg");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

if (signUp) {
  signUp.addEventListener("click", () => {
    registerModal.classList.remove("hidden");
  });
}

if (closeModalReg) {
  closeModalReg.addEventListener("click", () => {
    registerModal.classList.add("hidden");
  });
}
