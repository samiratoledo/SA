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


// 🌟 Estrelas normais
const quantidadeEstrelas = 100;
const estrelasContainer = document.getElementById("stars");

for (let i = 0; i < quantidadeEstrelas; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";
  const size = Math.random() * 3 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.animationDuration = (Math.random() * 2 + 1) + "s";
  estrelasContainer.appendChild(star);
}

// 🌠 Estrelas cadentes
function criarEstrelaCadente() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");
  shootingStar.style.top = Math.random() * 50 + "%";
  shootingStar.style.left = "-10%";
  shootingStar.style.width = Math.random() * 2 + 2 + "px";
  shootingStar.style.height = Math.random() * 60 + 40 + "px";
  shootingStar.style.animationDuration = Math.random() * 2 + 1.5 + "s";
  estrelasContainer.appendChild(shootingStar);

  // remove após a animação
  setTimeout(() => {
    shootingStar.remove();
  }, 3000);
}

// Cria uma estrela cadente a cada 3-6 segundos
setInterval(criarEstrelaCadente, 3000 + Math.random() * 3000);


