const exercicio1 = () => {
  /*
   * Exercicio 1
   * Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
   * extender uma segunda classe chamada "Usuario".
   * A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
   * em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
   * repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
   * true na classe.
   * Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
   * retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
   */
  class Usuario {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }

    isAdmin() {
      return this.admin === true;
    }
  }

  class Admin extends Usuario {
    constructor() {
      super();

      this.admin = true;
    }
  }

  const User1 = new Usuario("email@teste.com", "senha123");
  const Adm1 = new Admin("email@teste.com", "senha123");

  console.log("Exercicio 1 = ", User1.isAdmin()); // false
  console.log("Exercicio 1 = ", Adm1.isAdmin()); // true
};

const exercicio2 = () => {
  /*
   * Exercicio 2
   * A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
   */
  const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" },
  ];

  /*
   * 2.1 Utilizando o map
   * Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
   */
  const ages = usuarios.map((usuario) => usuario.idade);

  console.log("Exercicio 2.1 = ", ages);

  /*
   * 2.2 Utilizando o filter
   * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e
   * com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
   */
  const jobRocketseat = usuarios.filter(
    (usuario) => usuario.empresa == "Rocketseat" && usuario.idade > 18
  );

  console.log("Exercicio 2.2 = ", jobRocketseat);

  /*
   * 2.3 Utilizando o find
   * Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
   */
  const jobGoogle = usuarios.find((usuario) => usuario.empresa == "Google");

  console.log("Exercicio 2.3 = ", jobGoogle);

  /*
   * 2.4 Unindo operações
   * Multiplique a idade de todos usuários por dois e depois realize
   * um filtro nos usuários que possuem no máximo 50 anos:
   */
  const doubleAge = usuarios.map((usuario) => {
    let { idade, ...resto } = usuario;
    idade *= 2;
    return { ...resto, idade };
  });

  const less50 = doubleAge.filter((usuario) => usuario.idade < 50);

  console.log("Exercicio 2.4 = ", less50);
};

const exercicio3 = () => {
  /*
   * Exercicio 3
   * Converta as funções nos seguintes trechos de código em Arrow Functions:
   */

  /*
   * 3.1
   * arr.map(function(item) {
   *  return item + 10;
   * });
   */
  const arr = [1, 2, 3, 4, 5];
  const exer31 = arr.map((item) => item + 10);

  console.log("Exercicio 3.1 = ", exer31);

  /*
   * 3.2
   * function mostraIdade(usuario) {
   *  return usuario.idade;
   * }
   * Dica: Utilize uma constante pra function
   */
  const usuario = { nome: "Diego", idade: 23 };
  const mostraIdade = (usuario) => {
    return usuario.idade;
  };

  console.log("Exercicio 3.2 = ", mostraIdade(usuario));

  /*
   * 3.3
   * function mostraUsuario(nome = "Diego", idade = 18) {
   *  return { nome, idade };
   * }
   * Dica: Utilize uma constante pra function
   */
  const nome = "Diego";
  const idade = 23;
  const mostraUsuario = (nome = "Diego", idade = 18) => {
    return { nome, idade };
  };

  console.log("Exercicio 3.3 = ", mostraUsuario(nome, idade));
  console.log("Exercicio 3.3 = ", mostraUsuario(nome));

  /*
   * 3.4
   * const promise = function () {
   *  return new Promise(function (resolve, reject) {
   *   return resolve();
   *  });
   * }
   */
  const promise = () => {
    return new Promise((resolve, reject) => {
      return resolve();
    });
  };

  console.log("Exercicio 3.4 = ", promise());
};

const exercicio4 = () => {
  /*
   * Exercicio 4
   */
  /*
   * 4.1 Desestruturação simples
   * A partir do seguinte objeto:
   */
  const empresa = {
    nome: "Rocketseat",
    endereco: {
      cidade: "Rio do Sul",
      estado: "SC",
    },
  };
  /*
   * Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis,
   * no fim deve ser possível fazer o seguinte:
   */
  const {
    nome,
    endereco: { cidade, estado },
  } = empresa;

  console.log("Exercicio 4.1 = ", nome); // Rocketseat
  console.log("Exercicio 4.1 = ", cidade); // Rio do Sul
  console.log("Exercicio 4.1 = ", estado); // SC

  /*
   * 4.2 Desestruturação em parâmetros
   * Na seguinte função:
   */
  function mostraInfo(usuario) {
    const { nome, idade } = usuario;
    return `${nome} tem ${idade} anos.`;
  }
  /*
   * Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
   * separadamente e a função poder retornar apenas:
   * return `${nome} tem ${idade} anos.`;
   */
  console.log("Exercicio 4.2 = ", mostraInfo({ nome: "Diego", idade: 23 }));
};

const exercicio5 = () => {
  /*
   * Exercicio5
   * Utilizando o operador de rest/spread (...) realize as seguintes operações:
   */
  /*
   * 5.1 Rest
   * A partir do array:
   */
  const arr = [1, 2, 3, 4, 5, 6];
  /*
   * defina uma variável x que
   * recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.
   */
  const [x, ...y] = arr;
  console.log("Exercicio 5.1 = ", x); // 1
  console.log("Exercicio 5.1 = ", y); // [2, 3, 4, 5, 6]
  /*
   * Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
   */
  function soma(...params) {
    return params.reduce((total, next) => total + next);
  }
  console.log("Exercicio 5.1 = ", soma(1, 2, 3, 4, 5, 6)); // 21
  console.log("Exercicio 5.1 = ", soma(1, 2)); // 3

  /*
   * 5.2 Spread
   * A partir do objeto e utilizando o operador spread:
   */
  const usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
      cidade: "Rio do Sul",
      uf: "SC",
      pais: "Brasil",
    },
  };
  /*
   * Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
   * Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
   */
  const usuario2 = { ...usuario, nome: "Gabriel" };
  const usuario3 = {
    ...usuario,
    endereco: { ...usuario.endereco, cidade: "Lontras" },
  };

  console.log("Exercicio 5.2 = ", usuario2);
  console.log("Exercicio 5.2 = ", usuario3);
};

const exercicio6 = () => {
  /*
   * Exercicio 6
   * Converta o seguinte trecho de código utilizando Template Literals:
   * console.log("O usuário " + usuario + " possui " + idade + " anos");
   */
  const usuario = "Diego";
  const idade = 23;
  console.log("Exercicio 6 = ", `O usuário ${usuario} possui ${idade} anos`);
};

const exercicio7 = () => {
  /*
   * Exercicio 7
   * Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
   */
  const nome = "Diego";
  const idade = 23;
  const usuario = {
    nome,
    idade,
    cidade: "Rio do Sul",
  };

  console.log("Exercicio 7 = ", usuario);
};

exercicio1();
exercicio2();
exercicio3();
exercicio4();
exercicio5();
exercicio6();
exercicio7();
