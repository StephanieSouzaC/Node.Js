const livros = require("./listaDosLivros");

function insertionSort(array){
    for (let atual = 0; atual < array.length; atual ++){
        let analiseDoItem = atual;
        while(analiseDoItem > 0 && array[analiseDoItem].preco < array[analiseDoItem - 1].preco){
            let itemEmAnalise = array[analiseDoItem];
            let itemAnterior = array[analiseDoItem - 1];
            
            array[analiseDoItem] = itemAnterior;
            array[analiseDoItem - 1] = itemEmAnalise;

            analiseDoItem --
        }
    }
    
    console.log(array)
}

insertionSort(livros)