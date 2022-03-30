const btnNavMobile = document.getElementById("nav__mobile-button-container");
const listNavMobile = document.getElementById("nav__mobile-list");
let posicionMenuInicial = 0;


btnNavMobile.addEventListener("click", function() {
    listNavMobile.style.left = posicionMenuInicial + "px";
    listNavMobile.style.transition = "left .3s";
    posicionMenuInicial = posicionMenuInicial === 0 ? -(listNavMobile.clientWidth + 10) : 0;
});