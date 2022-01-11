const logo = document.querySelector('#logo');
const menu = document.querySelector('#perfilCabecalho');
const lupa = document.querySelector('#lupa');
const pagamento = document.querySelector('.pagamento > img');
const balaoComentario = document.querySelectorAll('#imgComentario');
const imgsCurtida = document.querySelectorAll('#imgCurtida');

logo.addEventListener('click', () => {
    window.location = "./home.html";
})

menu.addEventListener('click', () => {
    window.location = "./menuUsuario.html";
})

lupa.addEventListener('click', () => {
    window.location = "./outrosUsuarios.html"
})

pagamento.addEventListener('click', () => {
    window.location = "./pagamentos.html"
})

Array.from(imgsCurtida).forEach(item => {
    item.addEventListener('click', () => {
        if (item.getAttribute("src") == "imagens/curtido.png") {
            item.setAttribute("src", "imagens/naoCurtido.png");
        } else {
            item.setAttribute("src", "imagens/curtido.png")
        }
    })
})

Array.from(balaoComentario).forEach(item => {
    item.addEventListener('click', event => {
        event.target.nextElementSibling.classList.toggle("hidden");
    })
})