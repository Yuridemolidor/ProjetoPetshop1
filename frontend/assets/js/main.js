// ================= DADOS DAS EMPRESAS =================
const empresas = [
  {
    id: 1,
    nome: "Pet Fiel",
    icone: "fa-paw"
  },
  {
    id: 2,
    nome: "Auto Rápido",
    icone: "fa-tv"
  },
  {
    id: 3,
    nome: "Pizzaria Bella",
    icone: "fa-pizza-slice"
  }
];

// ================= RENDERIZAR EMPRESAS =================
const lista = document.getElementById("lista-empresas");

// limpa antes (boa prática)
lista.innerHTML = "";

empresas.forEach(empresa => {
  lista.innerHTML += `
    <div class="card" onclick="abrirPerfil(${empresa.id})">
      <i class="fa-solid ${empresa.icone}"></i>
      <p>${empresa.nome}</p>
    </div>
  `;
});

// ================= FUNÇÃO DE ABRIR PERFIL =================
function abrirPerfil(id) {
  window.location.href = `./pages/perfil.html?id=${id}`;
}

// ================= MENU =================
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}