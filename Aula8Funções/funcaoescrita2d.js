function imprimirMensagemEMaiusculas(mensagem) {
    const tamanhoDaMensagem = mensagem.length;
    const mensagemMaiuscula = mensagem.toUpperCase();
    
    console.log(`Tamanho da mensagem: ${tamanhoDaMensagem}`);
    console.log(`Mensagem em maiúsculas: ${mensagemMaiuscula}`);
}


imprimirMensagemEMaiusculas("Olá, mundo!");
