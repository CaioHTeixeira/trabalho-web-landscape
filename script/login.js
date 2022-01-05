const btnLogin = document.querySelector("#signin");
const btnLogar = document.querySelector("#btnLogar");
const btnCadastrar = document.querySelector("#signup");
const body = document.querySelector("body");

btnLogin.addEventListener("click", () => {
   body.className = "sign-in-js";
});

btnCadastrar.addEventListener("click", () =>  {
    body.className = "sign-up-js";
})
