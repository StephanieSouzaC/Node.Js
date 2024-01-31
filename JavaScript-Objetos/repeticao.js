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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
};