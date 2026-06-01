# Projeto: Lista de Alunos com JSON

Este projeto é uma aplicação simples em HTML, CSS e JavaScript que carrega e exibe uma lista de alunos a partir de um arquivo JSON.

---

## Funcionalidades

* Carregar dados de um arquivo JSON
* Exibir alunos em formato de cards
* Mostrar informações como:

  * Nome
  * Idade
  * Curso
  * Cidade
  * Email

---

## Estrutura do Projeto

```
projeto
├── index.html
├── style.css (ou dentro do HTML)
├── script.js
└── alunos.json
```

---

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (Fetch API)
* JSON

---

## Como funciona

1. O usuário clica no botão "Carregar JSON"
2. O JavaScript faz uma requisição usando fetch() para o arquivo alunos.json
3. Os dados são convertidos para objeto com .json()
4. Cada aluno é exibido dinamicamente na tela dentro de uma `<div class="card">`

---

## Exemplo de Aluno (JSON)

```json
{
  "nome": "João Silva",
  "idade": 19,
  "curso": "Administração",
  "cidade": "Caxias do Sul",
  "email": "joao@email.com"
}
```

---

## Como executar

1. Baixe ou clone o projeto
2. Abra o arquivo index.html no navegador

Importante:
Para evitar erro de CORS com o fetch, o ideal é rodar com um servidor local.

Exemplo com VS Code:

* Instale a extensão Live Server
* Clique com botão direito no index.html
* Selecione "Open with Live Server"

---

## Objetivo do Projeto

Este projeto foi desenvolvido para praticar:

* Manipulação de JSON
* Requisições com fetch
* Manipulação do DOM
* Estruturas de dados em JavaScript

---

## Possíveis Melhorias

* Busca de alunos por nome
* Adicionar novos alunos pela interface
* Salvar dados com LocalStorage
* Melhorar o design com CSS moderno

---

## Autor

Davi Kleemann
