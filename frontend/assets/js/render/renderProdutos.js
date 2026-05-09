import { produtos }
from "../data/produtos.js";

// ================= CARD =================

function criarProduto(produto){

  return `

    <div class="product-card">

      <img
        src="${produto.imagem}"
        alt="${produto.nome}"
      >

      <div class="product-info">

        <h4>${produto.nome}</h4>

        <div class="price-area">

          <span class="old-price">
            ${produto.precoAntigo}
          </span>

          <span class="price">
            ${produto.preco}
          </span>

        </div>

        <span class="discount">
          ${produto.desconto}
        </span>

      </div>

    </div>

  `;
}

// ================= RENDER =================

export function renderProdutos(){

  const grid =
    document.getElementById(
      "products-grid"
    );

  if(!grid) return;

  let html = "";

  produtos.forEach(produto => {

    html += criarProduto(produto);

  });

  grid.innerHTML = html;
}