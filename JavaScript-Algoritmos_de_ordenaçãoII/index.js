const { editoraFolha, editoraGalho } = require("./arrayDividida");

function juntarListas(lista1, lista2) {
    let listaFinal = [];
    let posicaoLista1 = 0;
    let posicaoLista2 = 0;
    let posicaoListaFinal = 0;

    while (posicaoLista1 < lista1.length && posicaoLista2 < lista2.length) {

        let itemAtualLista1 = lista1[posicaoLista1];
        let itemAtualLista2 = lista2[posicaoLista2];

        if (itemAtualLista1.preco < itemAtualLista2.preco) {
            listaFinal[posicaoListaFinal] = itemAtualLista1;
            posicaoLista1++;
        } else if (itemAtualLista1.preco == itemAtualLista2.preco) {
            listaFinal[posicaoListaFinal] = itemAtualLista1;
            posicaoLista1++;
        } else {
            listaFinal[posicaoListaFinal] = itemAtualLista2;
            posicaoLista2++;
        }

        posicaoListaFinal++;
    };

    while (posicaoLista1 < lista1.length){
        listaFinal[posicaoListaFinal] = lista1[posicaoLista1];
        posicaoLista1 ++;
        posicaoListaFinal ++;
    }

    while (posicaoLista2 < lista2.length){
        listaFinal[posicaoListaFinal] = lista2[posicaoLista2];
        posicaoLista2 ++;
        posicaoListaFinal ++;
    }

    return listaFinal;
};

console.log(juntarListas(editoraFolha, editoraGalho));