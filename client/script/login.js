$(function() {
    const btnLogin = document.querySelector("#signin");
    const btnLogar = document.querySelector("#btnLogar");
    const btnCadastrarNavegacao = document.querySelector("#signup");
    const btnCadastrar = document.querySelector('#btnCadastrar');
    const body = document.querySelector("body");
    const requiredFieldsLogin = document.getElementById('formLogin').querySelectorAll("[required]");
    const requiredFieldsCadastro = document.getElementById('formCadastro').querySelectorAll("[required]"); 

    btnLogin.addEventListener("click", () => {
        body.className = "sign-in-js";
    });

    btnCadastrarNavegacao.addEventListener("click", () =>  {
        body.className = "sign-up-js";
    })

    btnLogar.addEventListener("click", () => {
        let camposValidos = true;

        Array.from(requiredFieldsLogin).forEach(item => {
            if (item.value == "" || item.value == null) {
                camposValidos = false;
            }
        })
        
        if (camposValidos) {
            toastr.success("Login realizado com sucesso.");

            setTimeout(() => {
                window.location = "./home.html";    
            }, 1500);
        } else {
            toastr.error("Preencha todos os campos.");
        }
    })

    btnCadastrar.addEventListener("click", () => {
        let camposValidos = true;

        Array.from(requiredFieldsCadastro).forEach(item => {
            if (item.value == "" || item.value == null) {
                camposValidos = false;
            }
        })
        
        if (camposValidos) {
            toastr.success("Cadastro realizado com sucesso.");
        } else {
            toastr.error("Preencha todos os campos.");
        }
    })
})