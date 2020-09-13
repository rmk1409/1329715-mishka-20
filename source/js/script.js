let toggleButton = document.querySelector(".logo-and-toggle-button__toggle-button");
let menuWithCatalog = document.querySelector(".menu-catalog-and-personal");
let menuWithSearch = document.querySelector(".menu-search-and-bucket");

toggleButton.classList.toggle("button--hidden");
menuWithCatalog.classList.toggle("menu--hidden");
menuWithSearch.classList.toggle("menu--hidden");

toggleButton.onclick = () => {
  toggleButton.classList.toggle("logo-and-toggle-button__toggle-button--opened");
  menuWithCatalog.classList.toggle("menu--hidden");
  menuWithSearch.classList.toggle("menu--hidden");
}

let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let orderButton = document.querySelector(".week-product__order-button");
let cardOrderButtons = document.querySelectorAll(".card__order-button");

function overlayShow(evt) {
  evt.preventDefault();
  overlay.classList.toggle("overlay--close");
  modal.classList.toggle("modal--close");
}

if (orderButton) {
  orderButton.onclick = overlayShow;
} else if (cardOrderButtons.length > 0) {
  cardOrderButtons.forEach(
    element => element.onclick = overlayShow);
}

overlay.onclick = overlayShow;
