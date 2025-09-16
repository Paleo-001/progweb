// arquivo: js/trocar-css.js
(function () {
const linkTema = document.getElementById('tema');
const botoes = document.querySelectorAll('.toolbar .btn');

// restaura ao abrir
const salvo = localStorage.getItem('layout-css');
if (salvo) {
linkTema.href = salvo;
marcaAtivo(salvo);
}

// troca ao clicar
botoes.forEach(btn => {
btn.addEventListener('click', () => {
const css = btn.getAttribute('data-css');
linkTema.href = css;
localStorage.setItem('layout-css', css);
marcaAtivo(css);
});
});

function marcaAtivo(cssAtual) {
botoes.forEach(b => b.classList.remove('ativo'));
document
.querySelector(`.toolbar .btn[data-css="${cssAtual}"]`)
?.classList.add('ativo');
}
})();