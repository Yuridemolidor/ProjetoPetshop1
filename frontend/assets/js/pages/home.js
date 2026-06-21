import { abrirPerfil }
from "../utils/navigation.js";

import {
  renderEmpresas
}
from "../render/renderEmpresas.js";

import {
  renderProdutos
}
from "../render/renderProdutos.js";

import {
  toggleMenu
}
from "../utils/menu.js";

// ================= INIT =================

renderEmpresas();

renderProdutos();

// ================= MENU =================

window.toggleMenu =
  toggleMenu;