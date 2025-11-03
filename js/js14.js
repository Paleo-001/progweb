const frm = document.querySelector("form");
const retPendentes = document.querySelector("span")
const retExecucao = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(frm.enServico.value != ""){
        const servico = frm.enServico.value;
        if(localStorage.getItem("TIServico")){
            localStorage.setItem("TIServico",localStorage.getItem("TIServico") + "; " + servico);
        } else {
            localStorage.setItem("TIServico",servico);
        }
        mostraPendentes();
        frm.enServico.value = "";
        frm.enServico.focus();
    }
});

const mostraPendentes = () => {
    let numPendentes;
    if(localStorage.getItem("TIServico")) {
        numPendentes = localStorage.getItem("TIServico").split("; ").length;
    } else {
        numPendentes = 0;
    }
    retPendentes.innerHTML = `${numPendentes}<br><p>${localStorage.getItem("TIServico").split("; ").join("</p><p>")}`;
};

window.addEventListener("load", mostraPendentes);

frm.btExecutar.addEventListener("click", () => {
    if(!localStorage.getItem("TIServico")){
        alert("Não há serviços pendentes de execução!");
        return;
    }
    const servico = localStorage.getItem("TIServico").split("; ");
    const emExecucao = servico.shift();
    retExecucao.innerText = emExecucao;
    localStorage.setItem("TIServico", servico.join("; "));
    mostraPendentes();
});