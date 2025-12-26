// JavaScript para adicionar um botão "Voltar ao Topo"

// Criação do botão
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '⬆';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

// Função para mostrar/esconder o botão
function toggleBackToTopButton() {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

// Adiciona evento de rolagem
window.addEventListener('scroll', toggleBackToTopButton);

// Função para rolar de volta ao topo
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Inicializa o estado do botão
toggleBackToTopButton();
