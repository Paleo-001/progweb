// Criar as constantes para manipulação do documento
const frm = document.querySelector("form")
const respLista = document.querySelector("pre")
const respCavalo = document.querySelector("#saCavalo")
const cavalos = ["Drawing","Canabarro Bacudo","Nola Montez","Pirata da Lagoa","Toalha Negra","La Passante"]
const apostas = []

// Tratamento de eventos dos botões
frm.enCavalo.addEventListener("blur", () => {
    if(frm.enCavalo == ""){
        respCavalo.innerText = "";
        return;
    }
    const numCavalo = Number(frm.enCavalo.value);
    if(!validaCavalo(numCavalo)){
        alert("Nº inválido de cavalo!");
        frm.enCavalo.value = "";
        frm.enCavalo.focus();
        return;
    }
    const nomeCavalo = obterCavalo(numCavalo);
    respCavalo.innerText = `${nomeCavalo}`;
});
const validaCavalo = (num) => {
    return num >= 1 && num <= cavalos.length;
};
const obterCavalo = (num) => {
    const posicao = num - 1;
    return cavalos[posicao];
};
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cavalo = Number(frm.enCavalo.value);
    const valor = Number(frm.enAposta.value);
    apostas.push({cavalo,valor});
    let lista = `Apostas realizadas:\n${"-".repeat(45)}\n`;
    for(const aposta of apostas){
        lista += `Nº ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R\$ ${aposta.valor.toFixed(2)}\n`;
    }
    respLista.innerText = lista;
    respCavalo.innerText = "";
    frm.reset();
    frm.enCavalo.focus();
});
const contarApostas = (num) => {
    let contador = 0;
    for(const aposta of apostas){
        if(aposta.cavalo == num){
            contador ++;
        }
    }
    return contador;
};
const totalizarApostas = (num) => {
    let total = 0;
    for(const aposta of apostas){
        if(aposta.cavalo == num){
            total += aposta.valor;
        }
    }
    return total;
};
frm.btResumo.addEventListener("click", () => {
    const somaApostas = [0,0,0,0,0,0];
    for(const aposta of apostas){
        somaApostas[aposta.cavalo-1] += aposta.valor;
    }
    let respostas = `Nº Cavalo.................. R\$ apostados\n${"-".repeat(40)}\n`;
    cavalos.forEach((cavalo,i)=> {
        respostas += ` ${i+1} ${cavalo.padEnd(20)}`;
        respostas += ` ${somaApostas[i].toFixed(2).padStart(11)}\n`;
    })
    respLista.innerText = respostas;
});
frm.btGanhador.addEventListener("click", () => {
    const ganhador = Number(prompt("Informe o nº do cavalo ganhador."));
    if(isNaN(ganhador) || !validaCavalo(ganhador)){
        alert("Cavalo inválido!");
        return;
    }
    const total = apostas.reduce((acumulador,aposta) => acumulador + aposta.valor,0);
    let resumo = `Resultado Final do Páreo\n${"-".repeat(30)}\n`;
    resumo += `Nº total de apostas: ${apostas.length}\n`;
    resumo += `Total Geral R\$ ${total.toFixed(2)}\n\n`;
    resumo += `Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n`;
    resumo += `Nº apostas nele: ${contarApostas(ganhador)}\n`;
    resumo += `Total apostado nele: ${totalizarApostas(ganhador).toFixed(2)}`;
    respLista.innerText = resumo;
    frm.btApostar.disabled = true;
    frm.btResumo.disabled = true;
    frm.btGanhador.disabled = true;
    frm.btNovo.focus();
});
frm.btNovo.addEventListener("click", () => window.location.reload());

