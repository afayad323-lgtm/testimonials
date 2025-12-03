//selectors

let cards = document.querySelectorAll(".card");
let modal = document.querySelector(".modal");
let modalInner = document.querySelector(".modal-inner");
let closeBtn = document.querySelector(".close");
let darkBtn = document.querySelector("#toggleDark");

cards.forEach((card) => {
  card.addEventListener("click", function () {
    modal.style.display = "flex";
    modalInner.innerHTML = card.innerHTML;
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleDark.textContent = "☀️ Light Mode";
  } else {
    toggleDark.textContent = "🌙 Dark Mode";
  }
});
