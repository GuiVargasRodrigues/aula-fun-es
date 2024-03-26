
const calcularHipotenusa = (a, b) => {
    const hipotenusa = (a ** 2 + b ** 2) ** (1/2);
    return hipotenusa;
};


const cateto1 = 3;
const cateto2 = 4;
const hipotenusa = calcularHipotenusa(cateto1, cateto2);
console.log(`A hipotenusa é: ${hipotenusa}`);
