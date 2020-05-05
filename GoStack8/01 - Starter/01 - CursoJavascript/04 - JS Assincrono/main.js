/*
 * Exercicio 1
 * Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
 * segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
 * idade o resultado deve cair no .then, caso contrário, no .catch
 */
var textElement = document.querySelector("#exer1 h3");
var inputElement = document.querySelector("#exer1 input");
var buttonElement = document.querySelector("#exer1 button");

function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (idade >= 18) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

checaIdade(20)
  .then(function () {
    var ageText = document.createTextNode("Maior que 18");
    textElement.appendChild(ageText);
  })
  .catch(function () {
    var ageText = document.createTextNode("Menor que 18");
    textElement.appendChild(ageText);
  });

/*
 * Exercicio 2 e 3
 * Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
 * nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github
 * os dados de repositórios do usuário e mostrá-los em tela.
 */
var listElement = document.querySelector("#exer2 ul");
var errorElement = document.querySelector("#exer2 div");
var inputElement = document.querySelector("#exer2 input");
var buttonElement = document.querySelector("#exer2 button");
var repos = [];

function buscar() {
  repos = [];
  listElement.innerHTML = "";
  var carregandoElement = document.createElement("li");
  var carregandoText = document.createTextNode("Carregando...");
  carregandoElement.appendChild(carregandoText);
  listElement.appendChild(carregandoElement);

  errorElement.innerHTML = "";

  var name = inputElement.value;
  var url = `https://api.github.com/users/${name}/repos`;
  axios
    .get(url)
    .then(function (response) {
      var numRepo = 1;
      reposData = response.data;
      reposData.map(function (rep) {
        var text = "repo" + numRepo;
        repos.push(text);
        numRepo += 1;
      });
      renderRepos();
    })
    .catch(function (error) {
      var messageError = document.createElement("h3");
      var repoText = document.createTextNode("Este usuario não existe");
      messageError.style.color = "#f00";

      messageError.appendChild(repoText);
      errorElement.appendChild(messageError);
      listElement.innerHTML = "";
    });

  inputElement.value = "";
}

buttonElement.onclick = buscar;

function renderRepos() {
  listElement.innerHTML = "";

  for (repo of repos) {
    var repoElement = document.createElement("li");
    var repoText = document.createTextNode(repo);

    repoElement.appendChild(repoText);

    listElement.appendChild(repoElement);
  }
}
