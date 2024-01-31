const listaLivros = require('./arrayOrdenada');

function buscar(array, inicio, termino, valorBuscado) {
    const meio = Math.floor((inicio + termino) / 2);
    const atual = array[meio];

    if (inicio > termino) {
        return -1;
    } else if (valorBuscado === atual.preco) {
        return meio;
    } else if (valorBuscado < atual.preco) {
        return buscar(array, inicio, meio - 1, valorBuscado);
    } else if (valorBuscado > atual.preco) {
        return buscar(array, meio + 1, termino, valorBuscado);
    }
};

console.log(buscar(listaLivros, 0, listaLivros.length - 1, 51));