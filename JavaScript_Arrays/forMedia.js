
const notas = [10, 6.5, 8, 7.5];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log(media);

////////////////////////////////////

const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let mediaGlobal = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        mediaGlobal += notasGerais[i][j] / notasGerais[i].length;
    }
}

mediaGlobal = mediaGlobal / notasGerais.length

console.log(mediaGlobal)
