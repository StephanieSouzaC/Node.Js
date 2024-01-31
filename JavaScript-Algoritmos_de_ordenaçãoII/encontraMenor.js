const listaLivros = require("./arrayDesordenada");

function encontratMenores(pivo, array){

    let menores = 0;
    
    for (let atual =0; atual < array.length; atual ++){
        let itemAtual = array[atual];
        if(itemAtual.preco < pivo.preco){
            menores ++
        }
    };

    trocarLugar(array, array.indexOf(pivo), menores);
    return array
};

function trocarLugar(array, posicaoInicial, posicaoFinal){
    const item1 = array[posicaoInicial];
    const item2 = array[posicaoFinal];

    array[posicaoFinal] = item1;
    array[posicaoInicial] = item2;
};

function divideNoPivo(array){
    let pivo = array[Math.floor(array.length/2)];
    encontratMenores(pivo, array);
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando ++){
        let atual = array[analisando];
        if (atual.preco <= pivo.preco && atual != pivo){
            trocarLugar(array, analisando, valoresMenores);
            valoresMenores ++
        };
    };
    return array;
};

console.log(divideNoPivo(listaLivros));
console.log(encontratMenores(listaLivros[2], listaLivros));

module.exports = trocarLugar;