export function toggleModal(targetElement) {
  const modal = document.querySelector(targetElement);
  const openModalBtn = document.querySelector("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);

  function openModal() {
    modal.classList.remove("modal-container--is-hidden");
  }

  function closeModal() {
    modal.classList.add("modal-container--is-hidden");
  }
}
