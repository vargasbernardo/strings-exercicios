// # Exercício 1

// Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3
  
    
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>
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