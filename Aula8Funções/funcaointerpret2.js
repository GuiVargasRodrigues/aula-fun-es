let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// a) A utilidade desta função é verificar se uma determinada 
// palavra está presente em uma string, 
// independentemente de sua capitalização.

// b) i. Eu gosto de cenoura: true
// ii. CENOURA é bom pra vista: true
// iii. Cenouras crescem na terra: true