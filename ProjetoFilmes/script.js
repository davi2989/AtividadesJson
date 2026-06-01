async function carregarFilmes() {
    const resposta = await fetch("filmes.json");
    const filmes = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    filmes.forEach(filme => {
        lista.innerHTML += `
        <div class="card">
            <h3>${filme.nome}</h3>
            <p>Nota: ${filme.nota}</p>
            <p>Gênero: ${filme.genero}</p>
        </div>
        `;
    });
}