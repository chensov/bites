const likeBtns = document.querySelectorAll(".fa-heart");

likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("color-toggle");
  });
});
