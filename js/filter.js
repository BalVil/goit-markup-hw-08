const filterButtons = document.querySelectorAll(".filter__button");

for (let button of filterButtons) {
  button.addEventListener("click", (e) => {
    // змінюємо активний клас на кнопках фільтра
    const active = document.querySelector(".button--active");
    if (active) {
      active.classList.remove("button--active");
    }
    e.target.classList.toggle("button--active");

    //   показуємо тільки вибрані елементи
    let portfolioItems = document.querySelectorAll(".portfolio__item");
    for (let item of portfolioItems) {
      if (
        item.dataset.id !== button.dataset.id &&
        button.dataset.id !== "all"
      ) {
        item.classList.add("item--is-hidden");
      } else {
        item.classList.remove("item--is-hidden");
      }
    }
  });
}
