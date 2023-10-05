const loginBtn = document.querySelector(".login-btn");
const modal = document.querySelector(".login-modal");
const closeModal = document.querySelector(".close-modal");

loginBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
