let idade = 22;
let cnh = true;

if (idade >= 18 && cnh) {
  console.log('Parabens, tudo certo!')
} else if (idade >= 18 && !cnh) {
  console.log('Precisa fazer a CNH!');
} else {
  console.log('Não tem idade para dirigir!');
}