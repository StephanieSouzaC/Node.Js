import fs from "fs"
import chalk from "chalk";


function tratamentoErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não foi possível ler o texto.'));
};

function retiraLinks (texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const retorno = capturas.map(captura => ({[captura[1]]: captura[2]}));
    return retorno.length !== 0 ? retorno : "Não foi encontrado links";
}

//Usando async/await
async function recebeArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return retiraLinks(texto);
    } catch (erro) {
        tratamentoErro(erro);
    } finally {
        console.log(chalk.yellow('Processamento finalizado.'));
    }
};

/* Usando Promisses com then()
function recebeArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.blue(texto)))
        .catch((erro) => tratamentoErro(erro))
};
*/

export default recebeArquivo;
