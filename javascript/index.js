document.getElementsByClassName("menu-contenedor")[0].firstElementChild.addEventListener('click', () => {
    Array.from(document.getElementsByClassName("barras")).forEach((item) => {
        item.classList.toggle("barras-cruz");
    });
    document.getElementsByClassName("contenedor")[0].classList.toggle("contenedor-responsive");
    Array.from(document.getElementsByClassName("icono")).forEach((item) => {
        item.classList.toggle("icono-tooltip-hidden");
    });
});