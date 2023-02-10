
// Exercicio 1 feito
const nomeUsuario = prompt('Digite seu nome: ')
const comidaFavorita1 = prompt('Sua comida favorita: ')
const comidaFavorita2 = prompt('Sua segunda comida favorita: ')
const comidaFavorita3 = prompt('Sua terceira comida favorita: ')

const imprimirComidasUsuario = (nome, comida1, comida2, comida3) => {
  const mensagem = 
  `
  Estas sao as comidas favoritas de ${nome}:
  - ${comida1};
  - ${comida2};
  - ${comida3};
  `
  console.log(mensagem)

}
imprimirComidasUsuario(nomeUsuario, comidaFavorita1, comidaFavorita2, comidaFavorita3)