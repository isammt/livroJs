//Criei a referencia ao form e ao elemento h3 (onde vai exibir a resposta)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outPromocao");
const resp2 = document.querySelector("#outPrecoTerceiro");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", e => {
  const produto = frm.inProduto.value; //obtém conteudo dos campos
  const preco = Number(frm.inPreco.value);

  const terceiro = preco / 2; // calcula o valor dos 3 produtos
  const total = (preco * 2) + terceiro; //calcula o valor do 3º produto com desconto
  resp1.innerText = `${produto} - Promocao: Leve 3 por R$ ${total.toFixed(2)}`;
  resp2.innerText = ` O 3º produto custa apenas R$: ${terceiro.toFixed(2)} `;

  e.preventDefault(); // Evita envio do formulário
});

//precisei usar chatgpt e desintalar o prettier pq ele tirava o () da linha 12
//ordem dos fatores altera o produto SIM