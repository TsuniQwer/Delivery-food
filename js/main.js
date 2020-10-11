const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const close_two = document.querySelector(".close_two");
const close_three = document.querySelector(".close_three");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
close_two.addEventListener("click", toggleModal);
close_three.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}
