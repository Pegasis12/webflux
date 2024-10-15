// beneficios pergunta
const pergunta = document.querySelectorAll(".beneficios-pergunta button");

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo")
  const ativo = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPergunta(pergunta){
  pergunta.addEventListener("click", ativarPergunta);
}

pergunta.forEach(eventosPergunta);



