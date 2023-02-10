

const manipularString = () => {
    // a) **remover excesso de espacos
    const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
    const removerEspacosString = minhaString.trim()

    // b) contar letras
    const tamanhoStringAntes = minhaString.length
    const tamanhoStringDepois = removerEspacosString.length

    // c) substituir tracos 
    const substituirTracos = removerEspacosString.replace('________', 'sticioso')
    
    
    console.log(`
    ${removerEspacosString} 
    ${tamanhoStringAntes}
    ${tamanhoStringDepois}
    ${substituirTracos}`)
}
manipularString()