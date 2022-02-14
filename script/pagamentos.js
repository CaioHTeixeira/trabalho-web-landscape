$(function() {
    const logo = document.querySelector('#logo');
    const menu = document.querySelector('#perfilCabecalho');
    const lupa = document.querySelector('#lupa');
    const btnPagamento = document.querySelector('.btn-pagamento');
    const requiredFields = document.getElementById('formPagamento').querySelectorAll("[required]");

    logo.addEventListener('click', () => {
        window.location = "./home.html"
    })

    menu.addEventListener('click', () => {
        window.location = "./menuUsuario.html"
    })

    lupa.addEventListener('click', () => {
        window.location = "./outrosUsuarios.html"
    })

    btnPagamento.addEventListener('click', () => {
        let camposValidos = true;

        Array.from(requiredFields).forEach(item => {
            if (item.value == "" || item.value == null) {
                camposValidos = false;
            }
        })
        
        if (camposValidos) {
            toastr.success("Pagamento finalizado com sucesso.");

            setTimeout(() => {
                window.location = "./transacoes.html";    
            }, 1500);
        } else {
            toastr.error("Preencha todos os campos.");
        }
    })
})