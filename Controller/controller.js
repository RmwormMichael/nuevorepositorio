let vista = null;
const mainContenido = document.getElementById("mainContenido");
const contenidoTemptlate = document.getElementById("contenidoTemptlate");

window.onload = () => {
    vista = new Vista();
    mostrarMainContenido()
    /*document
    .getElementById("abrir")
    .addEventListener("click", mostrarMenu)
    document
    .getElementById("b-about")
    .addEventListener("click", mostrarAbout)
*/
};

const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
})



function mostrarMenu() {
    vista.mostrarPlantilla("menu", "mainContenido")
}

// function mostrarMainContenido() {
//     vista.mostrarPlantilla("inicio", "mainContenido")
// }

// function mostrarAbout() {
//     vista.mostrarPlantilla("about", "mainContenido")
// }

// function mostrarServices() {
//     vista.mostrarPlantilla("our-services", "mainContenido")
// }

function mostrarGallery() {
    vista.mostrarPlantilla("galery", "mainContenido")
}

function mostrarQuotePrice() {
    vista.mostrarPlantilla("quote-price", "dash")
}

function mostrarLogin() {
    vista.mostrarPlantilla("login", "mainContenido")
}

function mostrarRecovery() {
    vista.mostrarPlantilla("recovery", "mainContenido")
}

function mostrarRegister() {
    vista.mostrarPlantilla("register", "mainContenido")
}

function mostrarQuotePrice() {
    vista.mostrarPlantilla("QuotePrice", "mainContenido")
}

function mostrarProfile() {
    vista.mostrarPlantilla("mostrarProfile", "contenidoTemplate")
}

