const likeBtns = document.querySelectorAll(".fa-heart");

likeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    btn.classList.toggle("color-toggle");
  });
});
