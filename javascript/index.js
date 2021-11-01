document.getElementsByClassName("menu-contenedor")[0].firstElementChild.addEventListener('click', () => {
    Array.from(document.getElementsByClassName("barras")).forEach((item) => {
        item.classList.toggle("barras-cruz");
    });
    Array.from(document.getElementsByClassName("enlace-texto")).forEach((item) => {
        item.classList.toggle("enlace-texto-open");
    });
    Array.from(document.getElementsByClassName("enlaces")).forEach((item) => {
        item.classList.toggle("enlaces-tooltip-hidden");
    });
    document.getElementsByClassName("dropdown-button")[0].classList.toggle("dropdown-button-visible");
});

document.getElementsByClassName("dropdown-button")[0].addEventListener("click", () => {
    document.getElementsByClassName("dropdown-button")[0].classList.toggle("dropdown-button-active");
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("dropdown-content-open");
});