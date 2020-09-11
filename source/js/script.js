let toggleButton = document.querySelector(".logo-and-toggle-button__toggle-button");
let menuWithCatalog = document.querySelector(".menu-catalog-and-personal");
let menuWithSearch = document.querySelector(".menu-search-and-bucket");

toggleButton.onclick = () => {
  toggleButton.classList.toggle("logo-and-toggle-button__toggle-button--opened");
  menuWithCatalog.classList.toggle("menu--hidden");
  menuWithSearch.classList.toggle("menu--hidden");
}
