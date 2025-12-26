// Constantes
const form = document.getElementById("contactForm");
const resp = document.getElementById("Resposta");
const nome = document.getElementById("name").value;
const email = document.getElementById("email").value;
const mensagem = document.getElementById("message").value;

// Monitorar envio do formulário e validar
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Sanitizar entradas
    const sanitizaNome = nome.replace(/^[\p{L} '\-]$/gi,'');
    const sanitizaEmail = email.replace(/[^\w\s@.]/gi,'');
    const sanitizaMensagem = mensagem.replace(/[^\w\s.]/gi,'');

    resp.innerText = sanitizaMensagem;
    console.log("Nome: ", sanitizaNome);
    console.log("Email: ", sanitizaEmail);
    console.log("Mensagem: ",sanitizaMensagem);
})