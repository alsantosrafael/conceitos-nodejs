<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Desafio 02: Conceitos do Node.js
</h3>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/LeoAlvarenga/GoStack-Challenge-Node?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Leonardo Alvarenga" src="https://img.shields.io/badge/made%20by-Leonardo Alvarenga-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#calendar-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio, você deve criar uma aplicação para treinar o que você aprendeu até agora no Node.js!

Essa será uma aplicação para armazenar repositórios do seu portfólio, que irá permitir a criação, listagem, atualização e remoção dos repositórios, e além disso permitir que os repositórios possam receber "likes".

### Template da aplicação

Para te ajudar nesse desafio, criamos para você um modelo que você deve utilizar como um template do Github.

O template está disponível na seguinte url: **[Acessar Template](https://github.com/Rocketseat/gostack-template-conceitos-nodejs)**

**Dica**: Caso não saiba utilizar repositórios do Github como template, temos um guia em **[nosso FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Agora navegue até a pasta criada e abra no Visual Studio Code, lembre-se de executar o comando `yarn` no seu terminal para instalar todas as dependências, e você terá algo parecido com isso:

<p align="center">
  <img  src="./assets/nodejs-example.png">
</p>

### Rotas da aplicação

Agora que você já está com o template clonado, e pronto para continuar, você deve abrir o arquivo app.js, e completar onde não possui código com o código para atingir os objetivos de cada rota.

- **`POST /repositories`**: A rota deve receber `title`, `url` e `techs` dentro do corpo da requisição, sendo a URL o link para o github desse repositório. Ao cadastrar um novo projeto, ele deve ser armazenado dentro de um objeto no seguinte formato: `{ id: "uuid", title: 'Desafio Node.js', url: 'http://github.com/...', techs: ["Node.js", "..."], likes: 0 }`; Certifique-se que o ID seja um UUID, e de sempre iniciar os likes como 0.

- **`GET /repositories`**: Rota que lista todos os repositórios;

- **`PUT /repositories/:id`**: A rota deve alterar apenas o `title`, a `url` e as `techs` do repositório que possua o `id` igual ao `id` presente nos parâmetros da rota;

- **`DELETE /repositories/:id`**: A rota deve deletar o repositório com o `id` presente nos parâmetros da rota;

- **`POST /repositories/:id/like`**: A rota deve aumentar o número de likes do repositório específico escolhido através do `id` presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1;

**Dica**: Acima utilizamos `POST` em uma rota, mesmo ela alterando o número de likes do repositório sem criar nada diretamente.

Se dividirmos semânticamente as responsabilidades da nossa aplicação em entidades, o `like` seria uma entidade, e `repository` seria outra entidade.

Com essa separação, temos diferentes regras de negócio para cada entidade, assim, ao chamar a rota de `like` e adicionamos apenas um like, podemos interpretar que estamos criando um novo like, e não atualizando os likes.

Então por que não usar `PUT` no lugar de `POST`? Justamente por estarmos "criando" UM novo like, e não atualizando o número de likes para qualquer outro valor.

Talvez fique difícil enxergar por ser apenas um número, mas pense que cada like seja salvo em uma tabela no banco junto do usuário que realizou esse like. Agora fica mais claro que você está criando um novo like, certo?

Bons estudos <3

### Específicação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dé uma olhada em **[nosso FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Para esse desafio temos os seguintes testes:

- **`should be able to create a new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja criado, e retorne um json com o projeto criado.

- **`should be able to list the repositories`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um array com todos os repositórios que foram criados até o momento.

- **`should be able to update repository`**: Para que esse teste passe, sua aplicação deve permitir que sejam alterados apenas os campos `url`, `title` e `techs`.

- **`should not be able to update a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de update se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should not be able to update repository likes manually`**: Para que esse teste passe, você não deve permitir que sua rota de update altere diretamente os likes desse repositório, mantendo o mesmo número de likes que o repositório já possuia antes da atualização. Isso porque o único lugar que deve atualizar essa informação é a rota responsável por aumentar o número de likes.

- **`should be able to delete the repository`**: Para que esse teste passe, você deve permitir que a sua rota de delete exclua um projeto, e ao fazer a exclusão, ele retorne uma resposta vazia, com status `204`.

- **`should not be able to delete a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de delete se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

- **`should be able to give a like to the repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório com o id informado possa receber likes. O valor de likes deve ser incrementado em 1 a cada requisição, e como resultado, retornar um json contendo o repositório com o número de likes atualizado.

- **`should not be able to like a repository that does not exist`**: Para que esse teste passe, você deve validar na sua rota de like se o id do repositório enviado pela url existe ou não. Caso não exista, retornar um erro com status `400`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---


<a href="https://github.com/alsantosrafael/">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/60659321?s=460&u=f7b85d61e01a491287fce14c7e9bc0ee74475cc8&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Rafael Almeida</b></sub></a> <a href="https://github.com/alsantosrafael" title="Github">🚀</a>


Implementado com ❤️ por Rafael Almeida 👋🏽 Entre em contato! <br/>
Feito com 💜 by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

 [![Linkedin Badge](https://img.shields.io/badge/-Rafael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rafaalms/)](https://www.linkedin.com/in/rafaalms/) 
[![Gmail Badge](https://img.shields.io/badge/-rafael.profeng@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rafael.profeng@gmail.com)](mailto:rafael.profeng@gmail.com)
