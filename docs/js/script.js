// MENU
// Variables
let toggleButton = document.querySelector(".logo-and-toggle-button__toggle-button");
let menuWithCatalog = document.querySelector(".menu-catalog-and-personal");
let menuWithSearch = document.querySelector(".menu-search-and-bucket");

// Close menu, show menu-toggle-button.
toggleButton.classList.toggle("button--hidden");
menuWithCatalog.classList.toggle("menu--hidden");
menuWithSearch.classList.toggle("menu--hidden");

// Make menu-toggle-button interactive.
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle("logo-and-toggle-button__toggle-button--opened");
  menuWithCatalog.classList.toggle("menu--hidden");
  menuWithSearch.classList.toggle("menu--hidden");
});

// OVERLAY
// Variables
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let orderButton = document.querySelector(".week-product__order-button");
let cardOrderButtons = document.querySelectorAll(".card__order-button");

// Switch overlay & modal popup function
function overlayShow(evt) {
  evt.preventDefault();
  overlay.classList.toggle("overlay--close");
  modal.classList.toggle("modal--close");
}

// Make interactive elements on different pages.
if (orderButton) {
  orderButton.addEventListener('click', overlayShow);
} else if (cardOrderButtons.length > 0) {
  cardOrderButtons.forEach(
    element => element.addEventListener('click', overlayShow));
}

// Make overlay interactive
overlay.addEventListener('click', overlayShow);

// Make window interactive on 'Esc' keydown event, when overlay is opened.
window.addEventListener('keydown', (evt) => {
    let key = evt.key || evt.keyCode;
    if (!overlay.classList.contains("overlay--close")
      && (key === 'Escape' || key === 'Esc' || key === 27)) {
      overlayShow(evt);
    }
  }
)
