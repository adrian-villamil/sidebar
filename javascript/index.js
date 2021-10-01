document.getElementsByClassName("contenedor")[0].firstElementChild.addEventListener('click', () => {
    document.getElementsByClassName("contenedor")[0].classList.toggle("contenedor-responsive");
    Array.from(document.getElementsByClassName("enlace-texto")).forEach((item) => {
        item.classList.toggle("enlace-texto-responsive");
    })
});