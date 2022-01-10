const logo = document.querySelector('#logo');
const menu = document.querySelector('#perfilCabecalho');
const lupa = document.querySelector('#lupa');
const meusPostsMenu = document.querySelector('#meusPosts');
const adicionarPostMenu = document.querySelector('#adicionarPost');
const historicoTransacoesMenu = document.querySelector('#historicoTransacoes');
const alterarDadosMenu = document.querySelector('#alterarDados');
const btnLogout = document.querySelector('#btnLogout');

logo.addEventListener('click', () => {
    window.location.href = "/home.html";
})

menu.addEventListener('click', () => {
    window.location.href = "/menuUsuario.html";
})

lupa.addEventListener('click', () => {
    window.location.href = "/outrosUsuarios.html"
})

meusPostsMenu.addEventListener('click', () => {
    window.location.href = "/menuUsuario.html"
})

adicionarPostMenu.addEventListener('click', () => {
    window.location.href = "/adicionarPost.html"
})

historicoTransacoesMenu.addEventListener('click', () => {
    window.location.href = "/transacoes.html"
})

alterarDadosMenu.addEventListener('click', () => {
    window.location.href = "/alterarDados.html"
})

btnLogout.addEventListener('click', () => {
    window.location.href = "/login.html"
})