function extrairLinks(arrayDeLinks) {
    return arrayDeLinks.map((linksExtraidos) => Object.values(linksExtraidos).join());
};

async function verificaStatus(listaURLs) {
    const arrayStatus = await Promise.all(listaURLs.map(async (url) => {
        try {
            const response = await fetch(url)
            return response.status;
        } catch (erro) {
            return trataErro(erro);
        };
    }));
    return arrayStatus;
};

function trataErro(erro) {
    if (erro.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado'
    } else {
        return 'Ocorreu um erro inesperado!'
    }
}

export default async function listaValidada(listaComLinks) {
    const linksURLS = extrairLinks(listaComLinks);
    const status = await verificaStatus(linksURLS);

    return listaComLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice]
    }));
};