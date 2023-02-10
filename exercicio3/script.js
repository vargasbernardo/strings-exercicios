//Crie a const para a frase aqui

const manipularFrase = () => {

    // parte 1
    const guardarFrase = `"Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

    // parte 2
    const novaFrase = guardarFrase.replace('verde', 'rosa').replace('azul', 'laranja')
    const novaFraseInclui1 = novaFrase.includes('verde')
    const novaFraseInclui2 = novaFrase.includes('laranja')

    // Extra
    const fraseExtra = novaFrase.replace('mas não deixe o gato sair"', 'MAS NÃO DEIXE O GATO SAIR"')

    console.log(`
    ${guardarFrase}
    ${novaFrase}
    ${novaFraseInclui1}
    ${novaFraseInclui2}
    ${fraseExtra}`)
}
manipularFrase()



