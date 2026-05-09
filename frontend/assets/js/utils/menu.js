// ================= MENU =================

const menu =
  document.getElementById("menu");

const menuButton =
  document.querySelector(".menu-toggle");

const overlay =
  document.getElementById("overlay");

// ================= ABRIR / FECHAR =================

export function toggleMenu(){

  menu.classList.toggle("active");

  overlay.classList.toggle("active");

}

// ================= FECHAR AO CLICAR FORA =================

document.addEventListener("click", (event) => {

  const clicouNoMenu =
    menu.contains(event.target);

  const clicouNoBotao =
    menuButton.contains(event.target);

  if(
    !clicouNoMenu &&
    !clicouNoBotao
  ){

    menu.classList.remove("active");

    overlay.classList.remove("active");

  }

});

// ================= FECHAR PELO OVERLAY =================

overlay.addEventListener("click", () => {

  menu.classList.remove("active");

  overlay.classList.remove("active");

});

// ================= GLOBAL =================

window.toggleMenu = toggleMenu;