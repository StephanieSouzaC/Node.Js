const nomes = ["Ana", "Bel", "Gael", "Oto"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((aluno,indice) => {
    return notas[indice] < 7;
})

console.log(reprovados);