// Rest

const usuario = {
  nome: "Elisson",
  idade: 22,
  empresa: "Sanepar",
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// Spread

const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
