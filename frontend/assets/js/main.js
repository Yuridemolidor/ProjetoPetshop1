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

// ================= DADOS DOS PRODUTOS =================
const produtos = [
    {
        nome: "Tênis Esportivo Premium",
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        precoAntigo: "R$ 299,90",
        preco: "R$ 189,90",
        desconto: "35% OFF"
    },

    {
        nome: "Notebook Gamer RGB",
        imagem: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1000&auto=format&fit=crop",
        precoAntigo: "R$ 4.999",
        preco: "R$ 3.799",
        desconto: "24% OFF"
    },

    {
        nome: "Controle Gamer Sem Fio",
        imagem: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1000&auto=format&fit=crop",
        precoAntigo: "R$ 219,90",
        preco: "R$ 139,90",
        desconto: "18% OFF"
    },

    {
        nome: "Smartwatch Ultra",
        imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
        precoAntigo: "R$ 599,90",
        preco: "R$ 349,90",
        desconto: "42% OFF"
    }
];

// ================= RENDERIZAR PRODUTOS =================
const productsGrid = document.getElementById("products-grid");

produtos.forEach(produto => {

    productsGrid.innerHTML += `
    
        <div class="product-card">

            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="product-info">

                <h4>${produto.nome}</h4>

                <div class="price-area">
                    <span class="old-price">${produto.precoAntigo}</span>
                    <span class="price">${produto.preco}</span>
                </div>

                <span class="discount">${produto.desconto}</span>

            </div>

        </div>

    `;
});

// ================= FUNÇÃO DE ABRIR PERFIL =================
function abrirPerfil(id) {
  window.location.href = `./pages/perfilLoja.html?id=${id}`;
}

// ================= MENU =================
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}