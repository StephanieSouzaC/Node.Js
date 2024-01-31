const alunos = ["Ana", "Gael", "Maria", "Ster", "Vitoria"];
const medias = [10, 5.5, 8, 7.5, 6.5];

const alunosEMedias = [alunos, medias];

function exibeNomeENota(nome) {
    if (alunosEMedias[0].includes(nome)) {
        const [alunos, medias] = alunosEMedias;
        const indice = alunos.indexOf(nome);
        const mediaAluno = medias[indice];
        console.log(`O aluno ${nome}, está cadastrado. A média obtida foi ${mediaAluno} pontos.`);
    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Maria");