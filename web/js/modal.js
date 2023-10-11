document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login-btn");
  const modal = document.querySelector(".login-modal");
  const closeModal = document.querySelector(".close-modal");
  const signUp = document.querySelector(".sign--up-btn");
  const registerModal = document.querySelector(".register-modal");
  const closeModalReg = document.querySelector(".close-modal-reg");

  if (loginBtn && modal) {
    loginBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }

  if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  if (signUp && registerModal) {
    signUp.addEventListener("click", () => {
      registerModal.classList.remove("hidden");
    });
  }

  if (closeModalReg && registerModal) {
    closeModalReg.addEventListener("click", () => {
      registerModal.classList.add("hidden");
    });
  }
});
