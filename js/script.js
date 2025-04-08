const perfumes = [
    {
      nome: "HSTN Edição Mbappé",
      preco: "R$ 249,90",
      imagem: "img/mbappe.png",
      link: "https://rafamelhoresrp.com.br/produto/hstn-edicao-limitada-mbappe/"
    },
    {
      nome: "Ladrina",
      preco: "R$ 199,90",
      imagem: "img/asad.png",
      link: "produto.html"
    },
    {
      nome: "Million",
      preco: "R$ 229,90",
      imagem: "img/9pm.png",
      link: "produto.html"
    },
    {
        nome: "perfume Asad",
        preco: "R$ 199,90",
        imagem: "img/asad.png",
        link: "produto.html"
    },
    {
        nome: "Afnan 9PM",
        preco: "R$ 229,90",
        imagem: "img/9pm.png",
        link: "produto.html"
    }
  ];
  
  // Exibir todos os perfumes
  function exibirProdutos(lista) {
    const container = document.getElementById('productCarousel');
    container.innerHTML = '';
  
    lista.forEach(perfume => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${perfume.imagem}" alt="${perfume.nome}">
        <div class="product-info">
          <h2>${perfume.nome}</h2>
          <p>${perfume.preco}</p>
        </div>
        <button class="view-button" onclick="window.open('${perfume.link}', '_blank')">Ver opção</button>
      `;
      container.appendChild(card);
    });
  }
  
  // Filtro automático ao digitar
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchInput');
    exibirProdutos(perfumes); // mostrar todos ao iniciar
  
    input.addEventListener('input', () => {
      const valor = input.value.toLowerCase();
      const resultado = perfumes.filter(perfume =>
        perfume.nome.toLowerCase().includes(valor)
      );
      exibirProdutos(resultado);
    });
  });
  
  
  // Exibe todos ao carregar a página
  document.addEventListener('DOMContentLoaded', () => {
    exibirProdutos(perfumes);
  });
  