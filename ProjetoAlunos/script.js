async function carregarDados() {
    const resposta = await fetch("alunos.json");
    const alunos = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    alunos.forEach(aluno => {
        lista.innerHTML += `
        <div class="card">
            <h3>${aluno.nome}</h3>
            <p>Idade: ${aluno.idade}</p>
            <p>Curso: ${aluno.curso}</p>
            <p>Cidade: ${aluno.cidade}</p>
            <p>Email: ${aluno.email}</p>
        </div>
        `;
    });
}