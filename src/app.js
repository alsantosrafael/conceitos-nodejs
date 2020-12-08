const express = require("express");
const cors = require("cors");
// const { uuid, isUuid } = require("uuidv4");

const { v4: uuid, validate: isUuid } = require("uuid");
const validateId = (request, response, next) => {
  const { id } = request.params;
  console.log("Passou por aqui");
  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid repository id" });
  }
  return next();
};

const app = express();

app.use(express.json());
app.use(cors());
app.use("/repositores/:id", validateId);
const repositories = [];

app.get("/repositories", (request, response) => {
  return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);
  return response.status(201).json(repository);
});

app.put("/repository/:id", (request, response) => {
  const { id } = request.params;

  const { title = null, url = null, techs = null } = request.body;

  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );

  repositories[repositoryIndex] = {
    ...repositories[repositoryIndex],
    title: title ? title : repositories[repositoryIndex].title,
    url: url ? url : repositories[repositoryIndex].url,
    techs: techs ? techs : repositories[repositoryIndex].techs,
  };
  return response.status(200).json(repositories[repositoryIndex]);
});

app.delete("/repository/:id", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(
    (repository) => repository.id === id
  );
  repositories.splice(repositoryIndex, 1);
  return response.send({ message: "Repositório deletado com sucesso!" });
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
