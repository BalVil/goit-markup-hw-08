const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  const name = data.get("name");
  const phone = data.get("phone");
  const comment = data.get("comment");
  const checkbox = data.get("checkbox");

  if (name && phone && comment && checkbox) {
    const modal = document.querySelector(".modal-container");
    modal.classList.add("modal-container--is-hidden");

    const thanksMessage = document.querySelector(".thanks-message");
    thanksMessage.style.display = "block";
    setTimeout(() => {
      thanksMessage.classList.add("thanks-message--show");
    }, 500);

    setTimeout(() => {
      thanksMessage.style.display = "none";
      thanksMessage.classList.remove("thanks-message--show");
    }, 3500);
  }
};

document
  .getElementById("feedback-form")
  ?.addEventListener("submit", handleSubmit);
