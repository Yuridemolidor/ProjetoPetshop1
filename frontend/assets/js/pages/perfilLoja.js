import { empresas }
from "../data/empresas.js";

// ================= ID =================

const params =
  new URLSearchParams(
    window.location.search
  );

const id = params.get("id");

// ================= LOJA =================

const loja = empresas.find(
  empresa => empresa.id == id
);

if(!loja){

  document.body.innerHTML =
    "<h1>Loja não encontrada</h1>";

  throw new Error(
    "Loja inválida"
  );
}

// ================= RENDER =================

document.getElementById(
  "nome-loja"
).innerText = loja.nome;