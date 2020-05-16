"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var exercicio1 = function exercicio1() {
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
  var Usuario = /*#__PURE__*/function () {
    function Usuario(email, senha) {
      _classCallCheck(this, Usuario);

      this.email = email;
      this.senha = senha;
    }

    _createClass(Usuario, [{
      key: "isAdmin",
      value: function isAdmin() {
        return this.admin === true;
      }
    }]);

    return Usuario;
  }();

  var Admin = /*#__PURE__*/function (_Usuario) {
    _inherits(Admin, _Usuario);

    var _super = _createSuper(Admin);

    function Admin() {
      var _this;

      _classCallCheck(this, Admin);

      _this = _super.call(this);
      _this.admin = true;
      return _this;
    }

    return Admin;
  }(Usuario);

  var User1 = new Usuario("email@teste.com", "senha123");
  var Adm1 = new Admin("email@teste.com", "senha123");
  console.log("Exercicio 1 = ", User1.isAdmin()); // false

  console.log("Exercicio 1 = ", Adm1.isAdmin()); // true
};

var exercicio2 = function exercicio2() {
  /*
   * Exercicio 2
   * A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
   */
  var usuarios = [{
    nome: "Diego",
    idade: 23,
    empresa: "Rocketseat"
  }, {
    nome: "Gabriel",
    idade: 15,
    empresa: "Rocketseat"
  }, {
    nome: "Lucas",
    idade: 30,
    empresa: "Facebook"
  }];
  /*
   * 2.1 Utilizando o map
   * Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
   */

  var ages = usuarios.map(function (usuario) {
    return usuario.idade;
  });
  console.log("Exercicio 2.1 = ", ages);
  /*
   * 2.2 Utilizando o filter
   * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e
   * com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
   */

  var jobRocketseat = usuarios.filter(function (usuario) {
    return usuario.empresa == "Rocketseat" && usuario.idade > 18;
  });
  console.log("Exercicio 2.2 = ", jobRocketseat);
  /*
   * 2.3 Utilizando o find
   * Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
   */

  var jobGoogle = usuarios.find(function (usuario) {
    return usuario.empresa == "Google";
  });
  console.log("Exercicio 2.3 = ", jobGoogle);
  /*
   * 2.4 Unindo operações
   * Multiplique a idade de todos usuários por dois e depois realize
   * um filtro nos usuários que possuem no máximo 50 anos:
   */

  var doubleAge = usuarios.map(function (usuario) {
    var idade = usuario.idade,
        resto = _objectWithoutProperties(usuario, ["idade"]);

    idade *= 2;
    return _objectSpread(_objectSpread({}, resto), {}, {
      idade: idade
    });
  });
  var less50 = doubleAge.filter(function (usuario) {
    return usuario.idade < 50;
  });
  console.log("Exercicio 2.4 = ", less50);
};

var exercicio3 = function exercicio3() {
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
  var arr = [1, 2, 3, 4, 5];
  var exer31 = arr.map(function (item) {
    return item + 10;
  });
  console.log("Exercicio 3.1 = ", exer31);
  /*
   * 3.2
   * function mostraIdade(usuario) {
   *  return usuario.idade;
   * }
   * Dica: Utilize uma constante pra function
   */

  var usuario = {
    nome: "Diego",
    idade: 23
  };

  var mostraIdade = function mostraIdade(usuario) {
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

  var nome = "Diego";
  var idade = 23;

  var mostraUsuario = function mostraUsuario() {
    var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Diego";
    var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
    return {
      nome: nome,
      idade: idade
    };
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

  var promise = function promise() {
    return new Promise(function (resolve, reject) {
      return resolve();
    });
  };

  console.log("Exercicio 3.4 = ", promise());
};

var exercicio4 = function exercicio4() {
  /*
   * Exercicio 4
   */

  /*
   * 4.1 Desestruturação simples
   * A partir do seguinte objeto:
   */
  var empresa = {
    nome: "Rocketseat",
    endereco: {
      cidade: "Rio do Sul",
      estado: "SC"
    }
  };
  /*
   * Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis,
   * no fim deve ser possível fazer o seguinte:
   */

  var nome = empresa.nome,
      _empresa$endereco = empresa.endereco,
      cidade = _empresa$endereco.cidade,
      estado = _empresa$endereco.estado;
  console.log("Exercicio 4.1 = ", nome); // Rocketseat

  console.log("Exercicio 4.1 = ", cidade); // Rio do Sul

  console.log("Exercicio 4.1 = ", estado); // SC

  /*
   * 4.2 Desestruturação em parâmetros
   * Na seguinte função:
   */

  function mostraInfo(usuario) {
    var nome = usuario.nome,
        idade = usuario.idade;
    return "".concat(nome, " tem ").concat(idade, " anos.");
  }
  /*
   * Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
   * separadamente e a função poder retornar apenas:
   * return `${nome} tem ${idade} anos.`;
   */


  console.log("Exercicio 4.2 = ", mostraInfo({
    nome: "Diego",
    idade: 23
  }));
};

var exercicio5 = function exercicio5() {
  /*
   * Exercicio5
   * Utilizando o operador de rest/spread (...) realize as seguintes operações:
   */

  /*
   * 5.1 Rest
   * A partir do array:
   */
  var arr = [1, 2, 3, 4, 5, 6];
  /*
   * defina uma variável x que
   * recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.
   */

  var x = arr[0],
      y = arr.slice(1);
  console.log("Exercicio 5.1 = ", x); // 1

  console.log("Exercicio 5.1 = ", y); // [2, 3, 4, 5, 6]

  /*
   * Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
   */

  function soma() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return params.reduce(function (total, next) {
      return total + next;
    });
  }

  console.log("Exercicio 5.1 = ", soma(1, 2, 3, 4, 5, 6)); // 21

  console.log("Exercicio 5.1 = ", soma(1, 2)); // 3

  /*
   * 5.2 Spread
   * A partir do objeto e utilizando o operador spread:
   */

  var usuario = {
    nome: "Diego",
    idade: 23,
    endereco: {
      cidade: "Rio do Sul",
      uf: "SC",
      pais: "Brasil"
    }
  };
  /*
   * Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
   * Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
   */

  var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
    nome: "Gabriel"
  });

  var usuario3 = _objectSpread(_objectSpread({}, usuario), {}, {
    endereco: _objectSpread(_objectSpread({}, usuario.endereco), {}, {
      cidade: "Lontras"
    })
  });

  console.log("Exercicio 5.2 = ", usuario2);
  console.log("Exercicio 5.2 = ", usuario3);
};

var exercicio6 = function exercicio6() {
  /*
   * Exercicio 6
   * Converta o seguinte trecho de código utilizando Template Literals:
   * console.log("O usuário " + usuario + " possui " + idade + " anos");
   */
  var usuario = "Diego";
  var idade = 23;
  console.log("Exercicio 6 = ", "O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
};

var exercicio7 = function exercicio7() {
  /*
   * Exercicio 7
   * Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
   */
  var nome = "Diego";
  var idade = 23;
  var usuario = {
    nome: nome,
    idade: idade,
    cidade: "Rio do Sul"
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
