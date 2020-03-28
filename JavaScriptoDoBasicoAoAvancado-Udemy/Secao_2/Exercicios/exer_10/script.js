let numero = 41;
let divisoes = 0;

for (i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log('É um numero primo.')
} else {
  console.log('Não é um numero primo.')
}
