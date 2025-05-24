document.addEventListener("DOMContentLoaded", function () {
      const botoes = document.querySelectorAll('.toggle-detalhes');
      botoes.forEach(botao => {
        botao.addEventListener('click', () => {
          const detalhes = botao.nextElementSibling;
          const aberto = detalhes.style.display === 'block';
          detalhes.style.display = aberto ? 'none' : 'block';
          botao.textContent = aberto ? 'Saiba mais' : 'Fechar';
        });
      });
    });document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll('.toggle-detalhes');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const detalhes = botao.closest('.card').querySelector('.detalhes-curso');
      const estaAberto = detalhes.classList.contains('aberto');

      detalhes.classList.toggle('aberto');
      botao.textContent = estaAberto ? 'Saiba mais' : 'Fechar';
    });
  });
});