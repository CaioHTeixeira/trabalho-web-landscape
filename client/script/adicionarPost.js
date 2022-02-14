$(function() {
    const logo = document.querySelector('#logo');
    const menu = document.querySelector('#perfilCabecalho');
    const lupa = document.querySelector('#lupa');
    const meusPostsMenu = document.querySelector('#meusPosts');
    const adicionarPostMenu = document.querySelector('#adicionarPost');
    const historicoTransacoesMenu = document.querySelector('#historicoTransacoes');
    const alterarDadosMenu = document.querySelector('#alterarDados');
    const btnLogout = document.querySelector('#btnLogout');
    const salvar = document.querySelector('#salvar');
    const requiredFields = document.querySelector('.content').querySelectorAll("[required]");

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

    salvar.addEventListener('click', () => {
        let = camposValidos = true;
        Array.from(requiredFields).forEach(item => {
            if (item.value == "" || item.value == null) {
                camposValidos = false;
            }
        })

        if (camposValidos) {
            toastr.success("Adicionado com sucesso.");
            setTimeout(() => {
                window.location = "./menuUsuario.html";
            }, 1500);
        } else {
            toastr.error("Preencha todos os campos.");
        }
    })
})