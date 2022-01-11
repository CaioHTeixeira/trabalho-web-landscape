const logo = document.querySelector('#logo');
const menu = document.querySelector('#perfilCabecalho');
const lupa = document.querySelector('#lupa');
const meusPostsMenu = document.querySelector('#meusPosts');
const adicionarPostMenu = document.querySelector('#adicionarPost');
const historicoTransacoesMenu = document.querySelector('#historicoTransacoes');
const alterarDadosMenu = document.querySelector('#alterarDados');
const btnLogout = document.querySelector('#btnLogout');
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

meusPostsMenu.addEventListener('click', () => {
    window.location = "./menuUsuario.html"
})

adicionarPostMenu.addEventListener('click', () => {
    window.location = "./adicionarPost.html"
})

historicoTransacoesMenu.addEventListener('click', () => {
    window.location = "./transacoes.html"
})

alterarDadosMenu.addEventListener('click', () => {
    window.location = "./alterarDados.html"
})

btnLogout.addEventListener('click', () => {
    window.location = "./login.html"
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