const logo = document.querySelector('#logo');
const menu = document.querySelector('#perfilCabecalho');
const lupa = document.querySelector('#lupa');
const btnPagamento = document.querySelector('.btn-pagamento');

logo.addEventListener('click', () => {
    window.location.href = "/home.html"
})

menu.addEventListener('click', () => {
    window.location.href = "/menuUsuario.html"
})

lupa.addEventListener('click', () => {
    window.location.href = "/outrosUsuarios.html"
})

btnPagamento.addEventListener('click', () => {
    window.location.href = "/transacoes.html"
})