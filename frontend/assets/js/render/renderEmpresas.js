import { empresas }
from "../data/empresas.js";

import { abrirPerfil }
from "../utils/navigation.js";

// ================= CARD EMPRESA =================

function criarCardEmpresa(empresa){

  return `
    <div
      class="card"
      onclick="abrirPerfil(${empresa.id})"
    >

      <div class="store-logo">

        <i class="
          fa-solid
          ${empresa.icone}
        "></i>

      </div>

      <h4>${empresa.nome}</h4>

      <span>
        ${empresa.categoria}
      </span>

    </div>

  `;
}

// ================= RENDER =================

export function renderEmpresas(){

  const lista =
    document.getElementById(
      "lista-empresas"
    );

  if(!lista) return;

  let html = "";

  empresas.forEach(empresa => {

    html +=
      criarCardEmpresa(empresa);

  });

  lista.innerHTML = html;
}