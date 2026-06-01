let cursos = [];

async function carregarCursos() {
    const resposta = await fetch("cursos.json");
    cursos = await resposta.json();

    renderizarCursos(cursos);
}

// renderização
function renderizarCursos(lista) {
    const container = document.getElementById("container-cursos");

    container.innerHTML = "";

    lista.forEach(curso => {

        const modulosHTML = curso.modulos
            .map(modulo => `<li>${modulo}</li>`)
            .join('');

        const cardClass = curso.vagasEsgotadas ? "card esgotado" : "card";

        const aviso = curso.vagasEsgotadas
            ? `<span class="tag">Inscrições Encerradas</span>`
            : "";

        container.innerHTML += `
        <div class="${cardClass}">
            <h3>${curso.titulo}</h3>
            ${aviso}
            <p><strong>Categoria:</strong> ${curso.categoria}</p>
            <p><strong>Instrutor:</strong> ${curso.instrutor.nome}</p>
            <p><strong>Experiência:</strong> ${curso.instrutor.experiencia}</p>
            <p><strong>Módulos:</strong></p>
            <ul>${modulosHTML}</ul>
        </div>
        `;
    });
}

// filtro
document.getElementById("filtro").addEventListener("change", function () {
    const valor = this.value;

    if (valor === "Todos") {
        renderizarCursos(cursos);
    } else {
        const filtrados = cursos.filter(curso => curso.categoria === valor);
        renderizarCursos(filtrados);
    }
});

// iniciar
carregarCursos();