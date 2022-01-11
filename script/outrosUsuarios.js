const logo = document.querySelector('#logo');
const menu = document.querySelector('#perfilCabecalho');
const lupa = document.querySelector('#lupa');
const pagamento = document.querySelectorAll('.pagamento > img');
const balaoComentario = document.querySelectorAll('#imgComentario');
const imgsCurtida = document.querySelectorAll('#imgCurtida');

logo.addEventListener('click', () => {
    window.location = "./home.html"
})

menu.addEventListener('click', () => {
    window.location = "./menuUsuario.html"
})

lupa.addEventListener('click', () => {
    window.location = "./outrosUsuarios.html"
})

Array.from(pagamento).forEach(item => {
    item.addEventListener('click', () => {
        window.location = "./pagamentos.html"
    })
})

Array.from(imgsCurtida).forEach(item => {
    item.addEventListener('click', (event) => {
        if (item.getAttribute("src") == "imagens/curtido.png") {
            item.setAttribute("src", "imagens/naoCurtido.png");
            event.target.classList.toggle("curtido");
            event.target.classList.toggle("naoCurtido");
        } else {
            item.setAttribute("src", "imagens/curtido.png");
            event.target.classList.toggle("curtido");
            event.target.classList.toggle("naoCurtido");
        }
    })
})

Array.from(balaoComentario).forEach(item => {
    item.addEventListener('click', event => {
        event.target.nextElementSibling.classList.toggle("hidden");
    })
})