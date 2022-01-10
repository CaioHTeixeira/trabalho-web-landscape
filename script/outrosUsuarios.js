const logo = document.querySelector('#logo');
const menu = document.querySelector('#perfilCabecalho');
const lupa = document.querySelector('#lupa');

logo.addEventListener('click', () => {
    window.location = "./home.html"
})

menu.addEventListener('click', () => {
    window.location = "./menuUsuario.html"
})

lupa.addEventListener('click', () => {
    window.location = "./outrosUsuarios.html"
})