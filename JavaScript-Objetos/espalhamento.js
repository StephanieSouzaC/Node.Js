const cliente = {
    nome: "Alfred",
    idade: 24,
    email: "fredinho@gmail.com",
    telefone: ["31 3131313131", "31 9999888898"],
};

cliente.enderecos = [
    {
        rua: "Av Afonso Pena",
        numero: 2125,
        apartamento: false,
        complemento: "casa 1",
    },
];

function ligarCliente (telfoneFixo, telefoneCelular){
    console.log(`Ligando para ${telfoneFixo}`);
    console.log(`Ligando para ${telefoneCelular}`);
};

ligarCliente(...cliente.telefone);

const encomenda  = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);