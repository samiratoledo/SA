  document.getElementById("contador-container").classList.remove("hidden");
  iniciarContador();

function iniciarContador() {
  // Data inicial → 24 de maio de 2025, meia-noite
  const dataInicio = new Date(2025, 4, 24, 0, 0, 0);

  function atualizarContador() {
    const agora = new Date();
    let diferenca = agora - dataInicio;

    // Se ainda não chegou o dia, zera
    if (diferenca < 0) diferenca = 0;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
}


// Animação de entrada das seções
const elementos = document.querySelectorAll('.timeline, .music');

function aparecerAoScroll() {
  const windowHeight = window.innerHeight;
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    if (posicao < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener('scroll', aparecerAoScroll);

function abrirEnvelope() {
  document.querySelector(".envelope").classList.toggle("aberto");
}

document.getElementById("botao-secreto").addEventListener("click", function() {
  alert("Só te lembrando mais uma vez que eu te amo 💗");
});


