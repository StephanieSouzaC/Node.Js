const listaLivros = require("./arrayDesordenada");

function mergeSort(array) {

    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordenar(parte1, parte2);
    }
    return array;
};

function ordenar(parte1, parte2) {
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let itemAtualParte1 = parte1[posicaoAtualParte1];
        let itemAtualParte2 = parte2[posicaoAtualParte2];
        if (itemAtualParte1.preco < itemAtualParte2.preco) {
            resultado.push(itemAtualParte1);
            posicaoAtualParte1++
        } else if (itemAtualParte1.preco == itemAtualParte2.preco) {
            resultado.push(itemAtualParte1);
            posicaoAtualParte1++
        } else {
            resultado.push(itemAtualParte2);
            posicaoAtualParte2++
        };
    };

    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))
};

console.log(mergeSort(listaLivros));