
import chalk from 'chalk';
import fs from 'fs';
import recebeArquivo from './index.js';
import listaValidada from './httpValidacao.js';

const caminho = process.argv;

async function mostraLista(validacao, resultado, indentificacao = '') {
    if (validacao) {
        console.log(chalk.black.bgCyanBright(`Lista validada ${indentificacao}`), await listaValidada(resultado));
    } else console.log(chalk.black.bgCyanBright(`Lista com links ${indentificacao}`), resultado);
};

async function processamentoTexto(argumentos) {
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log("O Arquivo ou diretório informado não existe.");
            return;
        };
    };

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await recebeArquivo(argumentos[2]);
        mostraLista(valida, resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivosDiretorio = await fs.promises.readdir(caminho);
        arquivosDiretorio.forEach(async (nomeDoArquivo) => {
            const listaDeArquivos = await recebeArquivo(`${caminho}/${nomeDoArquivo}`);
            mostraLista(valida, listaDeArquivos, nomeDoArquivo);
        });
    };
};

processamentoTexto(caminho);