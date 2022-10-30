const filterBtn = document.querySelectorAll(".filter__button");
const portfolioItems = document.querySelectorAll(".portfolio__item");

filterBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // змінюємо активний клас на кнопках фільтра
    filterBtn.forEach((f) => f.classList.remove("button__active"));
    e.target.classList.toggle("button__active");

    //   прибераємо невибрані елементи
    portfolioItems.forEach((item) => {
      if (
        item.dataset.filter !== btn.dataset.action &&
        btn.dataset.action !== "all"
      ) {
        item.classList.add("portfolio__item--is-hidden");
      } else {
        item.classList.remove("portfolio__item--is-hidden");
      }
    });
  });
});
