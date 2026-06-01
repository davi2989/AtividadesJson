async function carregarProdutos() {
    const resposta = await fetch("produtos.json");
    const produtos = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    produtos.forEach(produto => {
        lista.innerHTML += `
        <div class="card">
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Estoque: ${produto.estoque}</p>
        </div>
        `;
    });
}