
const imprimirParametro = parametro => {
    console.log(parametro);
};


const somarEImprimir = (valor1, valor2) => {
    const resultado = valor1 + valor2;
    imprimirParametro(resultado);
};


somarEImprimir(5, 3); 
