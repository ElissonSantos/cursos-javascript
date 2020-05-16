import { umPorSegundo } from "./exercicio1";
import { getUserFromGithub } from "./exercicio2";
import { Github } from "./exercicio3";
import { buscaUsuario } from "./exercicio4";

async function executaExercicios() {
  console.log("Exercicio 1");
  await umPorSegundo();

  console.log("");
  console.log("");

  console.log("Exercicio 2");
  await getUserFromGithub("diego3g");
  await getUserFromGithub("diego3g124123");

  console.log("");
  console.log("");

  console.log("Exercicio 3");
  await Github.getRepositories("rocketseat/rocketseat.com.br");
  await Github.getRepositories("rocketseat/dslkvmskv");

  console.log("");
  console.log("");

  console.log("Exercicio 4");
  await buscaUsuario("ElissonSantos");
}

executaExercicios();
