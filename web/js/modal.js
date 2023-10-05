const loginBtn = document.querySelector(".login-btn");
const modal = document.querySelector(".login-modal");
const closeModal = document.querySelector(".close-modal");
const signUp = document.querySelector(".sign--up-btn");
const registerModal = document.querySelector(".register-modal");
const closeModalReg = document.querySelector(".close-modal-reg");

loginBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

signUp.addEventListener("click", () => {
  registerModal.classList.remove("hidden");
});

closeModalReg.addEventListener("click", () => {
  registerModal.classList.add("hidden");
});
