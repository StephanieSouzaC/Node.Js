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

cliente.enderecos.push({
    rua: "Av Pedro II",
    numero: 5001,
    apartamento: true,
    complemento: "apto 216",
});

const apenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);
console.log(apenasApartamentos)