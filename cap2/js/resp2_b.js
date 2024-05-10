//Criei a referencia ao form e ao elemento h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

//criei um "ouvinte" de evento,acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTempo.value);

  const pagar = Math.ceil(tempo / 15) * valor

  resp1.innerText = `Valor a Pagar R$:${pagar.toFixed(2)}`

  e.preventDefault();
})

//lembrar de olhar a tabela pag 52 ou pesquisar a biblioteca Math