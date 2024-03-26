function informacoesPessoa(nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
}


const mensagem = informacoesPessoa("Guilherme", 20, "São Leopoldo", "estudante");
console.log(mensagem);
