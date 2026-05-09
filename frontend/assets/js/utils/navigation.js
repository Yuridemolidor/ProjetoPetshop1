// ================= ABRIR PERFIL =================

export function abrirPerfil(id){

  window.location.href =
    `./pages/perfilLoja.html?id=${id}`;
}

// GLOBAL
window.abrirPerfil = abrirPerfil;