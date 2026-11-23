
const lampada = document.getElementById("lampada");
const botao = document.getElementById("botao");
const status = document.getElementById("status");

let acesa = false;

botao.addEventListener("click", function() {

    if (acesa === false) {
        lampada.classList.add("acesa");
        botao.textContent = "Apagar lâmpada";
        status.textContent = "A lâmpada está acesa.";
        acesa = true;

    } else {
        lampada.classList.remove("acesa");
        botao.textContent = "Acender lâmpada";
        status.textContent = "A lâmpada está apagada.";
        acesa = false;
    }

});
