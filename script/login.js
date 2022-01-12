$(function() {
    const btnLogin = document.querySelector("#signin");
    const btnLogar = document.querySelector("#btnLogar");
    const btnCadastrar = document.querySelector("#signup");
    const body = document.querySelector("body");
    const requiredFields = document.getElementById('formLogin').querySelectorAll("[required]"); 

    btnLogin.addEventListener("click", () => {
    body.className = "sign-in-js";
    });

    btnCadastrar.addEventListener("click", () =>  {
        body.className = "sign-up-js";
    })

    btnLogar.addEventListener("click", () => {
        let camposValidos = true;

        Array.from(requiredFields).forEach(item => {
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
})