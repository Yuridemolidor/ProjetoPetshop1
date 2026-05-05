// ================= DADOS DAS LOJAS =================

// simulação de várias lojas
const lojas = {
  1: {
    nome: "🐾 PET Shop Toyo",
    titulo: "Bem-vindo! 👋",
    descricao: "Tudo para o seu pet em um só lugar.",
    imagem: "https://placedog.net/300",
    servicos: "Banho, tosa e cuidados especiais 🐶",

    produtos: [
      {
        nome: "Osso resistente",
        preco: "R$ 15,00",
        img: "https://via.placeholder.com/100"
      },
      {
        nome: "Ração Premium",
        preco: "R$ 70,00",
        img: "https://via.placeholder.com/100"
      }
    ]
  },

  2: {
    nome: "Auto Rápido",
    titulo: "Seu carro feliz 🚗",
    descricao: "Serviços automotivos de qualidade para você e seu veículo.",
    imagem: "https://placeimg.com/300/200/tech",
    servicos: "Troca de óleo, alinhamento e muito mais! 🛠️",

    produtos: [
      {
        nome: "Óleo de motor",
        preco: "R$ 40,00",
        img: "https://via.placeholder.com/100"
      },
      {
        nome: "Filtro de ar",
        preco: "R$ 30,00",
        img: "https://via.placeholder.com/100"
      }
    ]
  },

  3: {
    nome: "Pizzaria Bella",
    titulo: "Sabor que conquista 🍕",
    descricao: "As melhores pizzas da cidade, feitas com amor e ingredientes frescos.",
    imagem: "https://placeimg.com/300/200/food",
    servicos: "Delivery rápido e atendimento de qualidade! 🚀",
    produtos: [
      {
        nome: "Pizza Margherita", 
        preco: "R$ 25,00",
        img: "https://via.placeholder.com/100"
      },
      {
        nome: "Pizza Pepperoni", 
        preco: "R$ 30,00",
        img: "https://via.placeholder.com/100"
      } 
    ]
  },
};

// ================= PEGAR ID DA URL =================

// exemplo: perfil.html?id=2
const params = new URLSearchParams(window.location.search);
const id = params.get("id") || 1;

const loja = lojas[id];

if (!loja) {
  document.body.innerHTML = "<h1>Loja não encontrada</h1>";
  throw new Error("Loja inválida");
}

// ================= RENDERIZAR =================

// HEADER
document.getElementById("nome-loja").innerText = loja.nome;
document.getElementById("titulo-loja").innerText = loja.titulo;
document.getElementById("descricao-loja").innerText = loja.descricao;
document.getElementById("img-loja").src = loja.imagem;

// SERVIÇOS
document.getElementById("texto-servicos").innerText = loja.servicos;

// PRODUTOS
const lista = document.getElementById("lista-produtos");

loja.produtos.forEach(produto => {
  lista.innerHTML += `
    <div class="card">
      <img src="${produto.img}">
      <h4>${produto.nome}</h4>
      <p>${produto.preco}</p>
      <button onclick="comprar('${produto.nome}')">🛒</button>
    </div>
  `;
});

// ================= FUNÇÕES =================

function comprar(produto) {
  alert("Produto adicionado: " + produto);
}

function trocarAba(aba, el) {
  document.getElementById('produtos').classList.add('hidden');
  document.getElementById('servicos').classList.add('hidden');

  document.getElementById(aba).classList.remove('hidden');

  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.classList.remove('active');
  });

  el.classList.add('active');
}

function menu(opcao) {
  alert("Você clicou em: " + opcao);
}