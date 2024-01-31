const listaLivros = require('./arrayDesordenada');
const trocaLugar = require('./encontraMenor');

function quickSort(array, inicio, fim) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, inicio, fim);
        if (inicio < indiceAtual - 1) {
            quickSort(array, inicio, indiceAtual - 1);
        };
        if (indiceAtual < fim) {
            quickSort(array, indiceAtual, fim);
        };
    };
    return array;
};

function particiona(array, inicio, fim) {
    let pivo = array[Math.floor((inicio + fim) / 2)]
    let autalInicio = inicio;
    let atualFim = fim;

    while (autalInicio <= atualFim) {
        while (array[autalInicio].preco < pivo.preco) {
            autalInicio++
        };
        while (array[atualFim].preco > pivo.preco) {
            atualFim--
        };
        if (autalInicio <= atualFim) {
            trocaLugar(array, autalInicio, atualFim);
            autalInicio++;
            atualFim--;
        };
    };
    return autalInicio;
};

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));