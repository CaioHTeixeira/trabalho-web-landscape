$(function() {
    const logo = document.querySelector('#logo');
    const menu = document.querySelector('#perfilCabecalho');
    const lupa = document.querySelector('#lupa');
    const pagamento = document.querySelectorAll('#pagamentoSaco');
    const balaoComentario = document.querySelectorAll('#imgComentario');
    const imgsCurtida = document.querySelectorAll('#imgCurtida');
    const btnsComentar = document.querySelectorAll('#btnComentar');
    const comentarios = document.querySelector('#comentarios');
    const inputs = document.querySelectorAll('#addComentario');
    let userCounter = 90;

    logo.addEventListener('click', () => {
        window.location = "./home.html";
    })

    menu.addEventListener('click', () => {
        window.location = "./menuUsuario.html";
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

    Array.from(btnsComentar).forEach(item => {
        item.addEventListener('click', event => {
            const comentariosSection = event.target.parentNode.parentNode.nextElementSibling;
            const comentario = event.target.previousSibling.value;
            
            comentariosSection.innerHTML += `
            <article>
                <img class="perfilComentarios" src="imagens/profileIcon.jpeg"> 
                <label>Usuario${userCounter} : </label> 
                <label id="comentario">${comentario}</label>
            </article>`
            userCounter++;
        })
    })

    Array.from(inputs).forEach(item => {
        item.addEventListener('keypress', event => {
            if (event.key == 'Enter') {
                const comentariosSection = event.target.parentNode.parentNode.nextElementSibling;
                
                comentariosSection.innerHTML += `
                <article>
                    <img class="perfilComentarios" src="imagens/profileIcon.jpeg"> 
                    <label>Usuario${userCounter} : </label> 
                    <label id="comentario">${item.value}</label>
                </article>`
                userCounter++;
            }
        })
    })
})