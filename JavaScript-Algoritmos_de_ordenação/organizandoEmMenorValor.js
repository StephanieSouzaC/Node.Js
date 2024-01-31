const livros = require("./listaDosLivros");

function menorValor(arrayProdutos, posicaoInicial){
    let menorPreço = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrayProdutos.length; atual++){
        if(arrayProdutos[atual].preco < arrayProdutos[menorPreço].preco){
            menorPreço = atual;
        };
    };
    return menorPreço;
};


module.exports = menorValor;