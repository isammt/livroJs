//Crie a referencia ao form e ao elemento h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outMedicamento");
const resp2 = document.querySelector("#outPromocao");

// criei um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  // obtém conteúdo dos campos de entrada
  const medicamento = frm.inMedicamento.value;
  const preco = Number(frm.inPreco.value);

  // calcula valor da promoção (arredonda para baixo)
  const promocao = Math.floor(preco * 2);

  // exibe as respostas
  resp1.innerText = `Promoção de ${medicamento}`
  resp2.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`
  e.preventDefault();
})